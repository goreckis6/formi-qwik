# Backend Setup - HEIC to GIF

## Kopiowanie plików do backendu

Skopiuj następujący plik z projektu `formi-qwik` do backendu:

**Z:** `/home/slavko/cursor/formi-qwik/scripts/`  
**Do:** `C:\Users\admin_test\Desktop\backend\backend\scripts\` (lub odpowiedni katalog backendu)

Plik do skopiowania:
- `heic_to_gif.py`

## Instalacja zależności Python

Upewnij się, że masz zainstalowane następujące pakiety:

```bash
pip install Pillow pillow-heif
```

Lub jeśli używasz `requirements.txt`:

```bash
pip install -r scripts/requirements.txt
```

Wymagane pakiety:
- `Pillow` (PIL) - obsługa obrazów
- `pillow-heif` - obsługa formatu HEIC/HEIF

## Endpointy API do dodania w backendzie

Frontend wywołuje:
- `POST /convert/heic-to-gif/single` - konwersja pojedynczego pliku
- `POST /convert/heic-to-gif/batch` - konwersja wielu plików

### Parametry request:

**Single endpoint:**
- `file` (multipart/form-data) - plik HEIC/HEIF
- `quality` (optional, default: "85") - jakość GIF (0-100, wpływa na paletę kolorów)
- `maxDimension` (optional, default: "4096") - maksymalna szerokość/wysokość

**Batch endpoint:**
- `files[]` (multipart/form-data) - tablica plików HEIC/HEIF
- `quality` (optional, default: "85") - jakość GIF (0-100)
- `maxDimension` (optional, default: "4096") - maksymalna szerokość/wysokość

### Response format:

**Single endpoint:**
- Success: `200 OK` z plikiem GIF w body (Content-Type: image/gif)
- Error: `400/500` z JSON: `{"error": "error message"}`

**Batch endpoint:**
- Success: `200 OK` z JSON:
  ```json
  {
    "results": [
      {
        "originalName": "file1.heic",
        "outputFilename": "file1.gif",
        "size": 12345,
        "success": true,
        "downloadPath": "/path/to/file1.gif"
      },
      ...
    ]
  }
  ```
- Error: `400/500` z JSON: `{"error": "error message"}`

### Użycie skryptu w backendzie:

**Przykład dla single endpoint (Node.js/Express):**

```javascript
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });

app.post('/convert/heic-to-gif/single', upload.single('file'), async (req, res) => {
  const inputFile = req.file.path;
  const outputFile = path.join('outputs', `${Date.now()}.gif`);
  const quality = req.body.quality || '85';
  const maxDimension = req.body.maxDimension || '4096';

  // Ensure output directory exists
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  exec(
    `python3 scripts/heic_to_gif.py "${inputFile}" "${outputFile}" --quality ${quality} --max-dimension ${maxDimension}`,
    (error, stdout, stderr) => {
      // Cleanup input file
      fs.unlinkSync(inputFile);

      if (error) {
        return res.status(500).json({ error: stderr || 'Conversion failed' });
      }

      if (!fs.existsSync(outputFile)) {
        return res.status(500).json({ error: 'Output file not created' });
      }

      // Send file
      res.setHeader('Content-Type', 'image/gif');
      res.setHeader('Content-Disposition', `attachment; filename="${path.basename(outputFile)}"`);
      const fileStream = fs.createReadStream(outputFile);
      fileStream.pipe(res);

      // Cleanup output file after sending
      fileStream.on('end', () => {
        fs.unlinkSync(outputFile);
      });
    }
  );
});
```

**Przykład dla batch endpoint:**

```javascript
app.post('/convert/heic-to-gif/batch', upload.array('files'), async (req, res) => {
  const files = req.files;
  const quality = req.body.quality || '85';
  const maxDimension = req.body.maxDimension || '4096';
  const results = [];

  // Process each file
  for (const file of files) {
    const inputFile = file.path;
    const outputFile = path.join('outputs', `${Date.now()}-${file.originalname.replace(/\.(heic|heif)$/i, '.gif')}`);

    try {
      await new Promise((resolve, reject) => {
        exec(
          `python3 scripts/heic_to_gif.py "${inputFile}" "${outputFile}" --quality ${quality} --max-dimension ${maxDimension}`,
          (error, stdout, stderr) => {
            fs.unlinkSync(inputFile); // Cleanup input
            
            if (error) {
              results.push({
                originalName: file.originalname,
                success: false,
                error: stderr || 'Conversion failed'
              });
              reject(error);
            } else {
              results.push({
                originalName: file.originalname,
                outputFilename: path.basename(outputFile),
                size: fs.statSync(outputFile).size,
                success: true,
                downloadPath: outputFile
              });
              resolve();
            }
          }
        );
      });
    } catch (error) {
      // Error already handled in promise
    }
  }

  res.json({ results });
});
```

**Przykład dla Python/Flask:**

```python
import subprocess
import os
from flask import request, send_file, jsonify
from werkzeug.utils import secure_filename

@app.route('/convert/heic-to-gif/single', methods=['POST'])
def convert_heic_to_gif_single():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    quality = request.form.get('quality', '85')
    max_dimension = request.form.get('maxDimension', '4096')
    
    input_file = os.path.join('uploads', secure_filename(file.filename))
    output_file = os.path.join('outputs', f"{os.urandom(16).hex()}.gif")
    
    file.save(input_file)
    
    result = subprocess.run([
        'python3',
        'scripts/heic_to_gif.py',
        input_file,
        output_file,
        '--quality', quality,
        '--max-dimension', max_dimension
    ], capture_output=True, text=True)
    
    # Cleanup input file
    os.unlink(input_file)
    
    if result.returncode != 0:
        return jsonify({'error': result.stderr}), 500
    
    return send_file(output_file, mimetype='image/gif')
```

## Uwagi techniczne

- GIF format używa palety kolorów (maksymalnie 256 kolorów)
- Parametr `quality` wpływa na rozmiar palety kolorów
- GIF nie obsługuje dobrze przezroczystości (RGBA) - kanał alfa jest konwertowany na białe tło
- Skrypt automatycznie naprawia orientację EXIF
- Skrypt automatycznie zmniejsza obrazy, jeśli przekraczają `maxDimension`
