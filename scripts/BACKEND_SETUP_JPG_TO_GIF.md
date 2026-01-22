# Backend Setup - JPG to GIF

## Kopiowanie plików do backendu

Skopiuj następujący plik z projektu `formi-qwik` do backendu:

**Z:** `/home/slavko/cursor/formi-qwik/scripts/`  
**Do:** `C:\Users\admin_test\Desktop\backend\backend\scripts\` (lub odpowiedni katalog backendu)

Plik do skopiowania:
- `jpg_to_gif.py`

## Instalacja zależności Python

Upewnij się, że masz zainstalowane następujące pakiety:

```bash
pip install Pillow
```

Lub jeśli używasz `requirements.txt`:

```bash
pip install -r scripts/requirements.txt
```

Wymagane pakiety:
- `Pillow` (PIL) - obsługa obrazów

## Endpointy API do dodania w backendzie

Frontend wywołuje:
- `POST /convert/jpg-to-gif/single` - konwersja pojedynczego pliku
- `POST /convert/jpg-to-gif/batch` - konwersja wielu plików

### Parametry request:

**Single endpoint:**
- `file` (multipart/form-data) - plik JPG/JPEG
- `quality` (optional, default: "95") - jakość GIF (0-100, wpływa na paletę kolorów)
- `maxDimension` (optional, default: "4096") - maksymalna szerokość/wysokość

**Batch endpoint:**
- `files[]` (multipart/form-data) - tablica plików JPG/JPEG
- `quality` (optional, default: "95") - jakość GIF (0-100)
- `maxDimension` (optional, default: "4096") - maksymalna szerokość/wysokość

### Response format:

**Single endpoint:**
- Success: `200 OK` z plikiem GIF w body (Content-Type: image/gif)
- Error: `400/500` z JSON: `{"error": "error message"}`

**Batch endpoint:**
- Success: `200 OK` z JSON:
  ```json
  {
    "success": true,
    "results": [
      {
        "originalName": "file1.jpg",
        "outputFilename": "file1.gif",
        "size": 12345,
        "success": true,
        "downloadPath": "data:image/gif;base64,..."
      },
      ...
    ]
  }
  ```
- Error: `400/500` z JSON: `{"error": "error message"}`

## Implementacja endpointów (Node.js/Express z Sharp)

**Zalecane:** Użyj biblioteki `sharp` (Node.js) dla lepszej wydajności. Python script jest fallbackiem.

### Przykład implementacji z Sharp (zalecane):

```javascript
const sharp = require('sharp');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

// Route: JPG to GIF (Single) - OPTIONS for CORS preflight
app.options("/convert/jpg-to-gif/single", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    "Access-Control-Max-Age": "86400",
  });
  res.sendStatus(200);
});

// Route: JPG to GIF (Single) - Using Sharp
app.post(
  "/convert/jpg-to-gif/single",
  upload.single("file"),
  async (req, res) => {
    // Set CORS headers
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    });

    console.log("JPG->GIF single conversion request");

    try {
      const file = req.file;
      if (!file) {
        res.set({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
        });
        return res.status(400).json({ error: "No file uploaded" });
      }

      // GIF conversion parameters
      const maxDimension = parseInt(req.body.maxDimension) || 4096;
      const quality = parseInt(req.body.quality) || 95; // Quality affects palette quantization

      // Convert using Sharp
      let sharpInstance = sharp(file.buffer);

      // Get image metadata
      const metadata = await sharpInstance.metadata();
      const width = metadata.width || 0;
      const height = metadata.height || 0;

      // Resize if needed
      if (width > maxDimension || height > maxDimension) {
        sharpInstance = sharpInstance.resize(maxDimension, maxDimension, {
          fit: "inside",
          withoutEnlargement: true,
        });
      }

      // Convert to GIF
      // Sharp uses quality parameter for GIF palette quantization
      // Quality 0-100 maps to palette colors (higher quality = more colors)
      const paletteColors = Math.max(2, Math.min(256, Math.round((quality / 100) * 256)));
      
      const gifBuffer = await sharpInstance
        .gif({
          palette: true,
          colours: paletteColors,
          dither: quality < 80 ? 1.0 : 0.0, // Dithering for lower quality
        })
        .toBuffer();

      // Set response headers
      res.set({
        "Content-Type": "image/gif",
        "Content-Disposition": `attachment; filename="${file.originalname.replace(/\.(jpg|jpeg)$/i, ".gif")}"`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      });

      res.send(gifBuffer);
    } catch (error) {
      console.error("JPG to GIF conversion error:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Conversion failed. The file may be corrupted or not a valid JPG image.";
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      });
      res.status(500).json({ error: message });
    }
  }
);

// Route: JPG to GIF (Batch) - OPTIONS for CORS preflight
app.options("/convert/jpg-to-gif/batch", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    "Access-Control-Max-Age": "86400",
  });
  res.sendStatus(200);
});

// Route: JPG to GIF (Batch) - Using Sharp
app.post(
  "/convert/jpg-to-gif/batch",
  upload.array("files", 20), // Max 20 files
  async (req, res) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
    });

    console.log("JPG->GIF batch conversion request");

    try {
      const files = req.files;
      if (!files || files.length === 0) {
        res.set({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
        });
        return res.status(400).json({ error: "No files uploaded" });
      }

      const results = [];

      // GIF conversion parameters
      const maxDimension = parseInt(req.body.maxDimension) || 4096;
      const quality = parseInt(req.body.quality) || 95;
      const paletteColors = Math.max(2, Math.min(256, Math.round((quality / 100) * 256)));

      for (const file of files) {
        try {
          let sharpInstance = sharp(file.buffer);

          // Get image metadata
          const metadata = await sharpInstance.metadata();
          const width = metadata.width || 0;
          const height = metadata.height || 0;

          // Resize if needed
          if (width > maxDimension || height > maxDimension) {
            sharpInstance = sharpInstance.resize(maxDimension, maxDimension, {
              fit: "inside",
              withoutEnlargement: true,
            });
          }

          // Convert to GIF
          const gifBuffer = await sharpInstance
            .gif({
              palette: true,
              colours: paletteColors,
              dither: quality < 80 ? 1.0 : 0.0,
            })
            .toBuffer();

          results.push({
            originalName: file.originalname,
            outputFilename: file.originalname.replace(/\.(jpg|jpeg)$/i, ".gif"),
            size: gifBuffer.length,
            success: true,
            downloadPath: `data:image/gif;base64,${gifBuffer.toString("base64")}`,
          });
        } catch (error) {
          console.error(
            `JPG to GIF batch conversion error for ${file.originalname}:`,
            error
          );
          results.push({
            originalName: file.originalname,
            outputFilename: "",
            size: 0,
            success: false,
            error:
              error instanceof Error
                ? error.message
                : "The file is corrupted or not a valid JPG image",
          });
        }
      }

      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      });
      res.json({ success: true, results });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      });
      res.status(500).json({ error: message });
    }
  }
);
```

### Fallback: Użycie skryptu Python (jeśli Sharp nie jest dostępny):

```javascript
const multer = require('multer');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const execAsync = promisify(exec);
const upload = multer({ 
  dest: path.join(__dirname, 'tmp'),
  limits: { fileSize: 100 * 1024 * 1024 } // 100MB
});

app.post("/convert/jpg-to-gif/single", upload.single("file"), async (req, res) => {
  const inputPath = req.file.path;
  const outputPath = path.join(__dirname, 'tmp', `${Date.now()}.gif`);
  const quality = req.body.quality || "95";
  const maxDimension = req.body.maxDimension || "4096";

  try {
    const { stdout, stderr } = await execAsync(
      `python3 scripts/jpg_to_gif.py "${inputPath}" "${outputPath}" --quality ${quality} --max-dimension ${maxDimension}`
    );

    if (fs.existsSync(outputPath)) {
      res.setHeader('Content-Type', 'image/gif');
      res.setHeader('Content-Disposition', `attachment; filename="${req.file.originalname.replace(/\.(jpg|jpeg)$/i, '.gif')}"`);
      res.sendFile(outputPath, () => {
        // Cleanup
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
      });
    } else {
      throw new Error(stderr || 'Conversion failed');
    }
  } catch (error) {
    // Cleanup on error
    if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
    if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    
    res.status(500).json({ error: error.message });
  }
});
```

## Uwagi

1. **Sharp (zalecane):** Biblioteka `sharp` jest szybsza i bardziej wydajna niż Python script. Użyj jej jako głównej metody konwersji.

2. **Python fallback:** Skrypt Python `jpg_to_gif.py` może być używany jako fallback, jeśli `sharp` nie jest dostępny.

3. **CORS:** Pamiętaj o ustawieniu odpowiednich nagłówków CORS dla wszystkich endpointów.

4. **Timeout:** Ustaw odpowiednie timeouty dla batch conversion (np. 15-20 minut).

5. **File limits:** 
   - Single: max 100MB per file
   - Batch: max 20 files, 100MB total

6. **Quality parameter:** 
   - Dla GIF, quality (0-100) wpływa na liczbę kolorów w palecie
   - Wyższa jakość = więcej kolorów (max 256)
   - Dla quality < 80, włącz dithering dla lepszych wyników
