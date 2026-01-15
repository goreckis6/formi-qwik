# Backend API Endpoints for HEIC to WebP

## Overview

Frontend wywołuje następujące endpointy:
- `POST /convert/heic-to-webp/single` - konwersja pojedynczego pliku
- `POST /convert/heic-to-webp/batch` - konwersja wielu plików

## Single File Conversion

### Endpoint
```
POST /convert/heic-to-webp/single
```

### Request
- **Content-Type:** `multipart/form-data`
- **Body:**
  - `file` (File): Plik HEIC/HEIF do konwersji
  - `quality` (optional, string): Jakość WebP (0-100, default: "90")

### Response (Success)
- **Status:** `200 OK`
- **Content-Type:** `image/webp`
- **Body:** Binary WebP image data

### Response (Error)
- **Status:** `400/500`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

### Example Implementation (Flask/FastAPI)
```python
@app.post("/convert/heic-to-webp/single")
async def convert_single(request: Request):
    form = await request.form()
    file = form.get("file")
    quality = int(form.get("quality", "90"))
    
    # Save uploaded file temporarily
    input_path = f"/tmp/{file.filename}"
    output_path = f"/tmp/{file.filename}.webp"
    
    with open(input_path, "wb") as f:
        f.write(await file.read())
    
    # Convert using script
    import subprocess
    result = subprocess.run([
        "python3",
        "/path/to/scripts/heic_to_webp.py",
        input_path,
        output_path,
        "--quality", str(quality)
    ], capture_output=True, text=True)
    
    if result.returncode != 0:
        return JSONResponse(
            {"error": result.stderr},
            status_code=500
        )
    
    # Return WebP file
    with open(output_path, "rb") as f:
        webp_data = f.read()
    
    # Cleanup
    os.remove(input_path)
    os.remove(output_path)
    
    return Response(
        content=webp_data,
        media_type="image/webp",
        headers={
            "Content-Disposition": f'attachment; filename="{file.filename}.webp"'
        }
    )
```

## Batch File Conversion

### Endpoint
```
POST /convert/heic-to-webp/batch
```

### Request
- **Content-Type:** `multipart/form-data`
- **Body:**
  - `files` (File[]): Array of HEIC/HEIF files
  - `quality` (optional, string): Jakość WebP (0-100, default: "90")

### Response (Success)
- **Status:** `200 OK`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "results": [
      {
        "originalName": "image1.heic",
        "outputFilename": "image1.webp",
        "size": 123456,
        "success": true,
        "downloadPath": "/downloads/image1.webp"
      },
      {
        "originalName": "image2.heic",
        "outputFilename": "image2.webp",
        "size": 234567,
        "success": true,
        "downloadPath": "/downloads/image2.webp"
      }
    ]
  }
  ```

### Response (Error)
- **Status:** `400/500`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

### Example Implementation (Flask/FastAPI)
```python
@app.post("/convert/heic-to-webp/batch")
async def convert_batch(request: Request):
    form = await request.form()
    files = form.getlist("files")
    quality = int(form.get("quality", "90"))
    
    results = []
    temp_dir = f"/tmp/batch_{uuid.uuid4()}"
    os.makedirs(temp_dir, exist_ok=True)
    
    try:
        for file in files:
            input_path = os.path.join(temp_dir, file.filename)
            output_path = os.path.join(temp_dir, f"{file.filename}.webp")
            
            # Save uploaded file
            with open(input_path, "wb") as f:
                f.write(await file.read())
            
            # Convert
            result = subprocess.run([
                "python3",
                "/path/to/scripts/heic_to_webp.py",
                input_path,
                output_path,
                "--quality", str(quality)
            ], capture_output=True, text=True)
            
            if result.returncode == 0:
                size = os.path.getsize(output_path)
                # Move to downloads directory or return as base64
                results.append({
                    "originalName": file.filename,
                    "outputFilename": f"{file.filename}.webp",
                    "size": size,
                    "success": True,
                    "downloadPath": output_path  # or generate download URL
                })
            else:
                results.append({
                    "originalName": file.filename,
                    "success": False,
                    "error": result.stderr
                })
            
            # Cleanup input file
            os.remove(input_path)
        
        return JSONResponse({"results": results})
    
    finally:
        # Cleanup temp directory (or schedule cleanup)
        shutil.rmtree(temp_dir, ignore_errors=True)
```

## Python Script Usage

### Command Line
```bash
python3 scripts/heic_to_webp.py input.heic output.webp
python3 scripts/heic_to_webp.py input.heic output.webp --quality 90
python3 scripts/heic_to_webp.py input.heic output.webp --max-dimension 2048
python3 scripts/heic_to_webp.py input.heic output.webp --lossless
```

### Programmatic Usage
```python
from scripts.heic_to_webp import convert_heic_to_webp

success = convert_heic_to_webp(
    input_file="input.heic",
    output_file="output.webp",
    quality=90,
    max_dimension=4096,
    lossless=False,
    method=6
)

if success:
    print("Conversion successful!")
else:
    print("Conversion failed!")
```

## Requirements

- Python 3.7+
- Pillow: `pip install Pillow`
- pillow-heif: `pip install pillow-heif`

## Notes

- Script handles EXIF orientation automatically
- Images larger than `max_dimension` are automatically downscaled
- Output directory is created if it doesn't exist
- Script returns exit code 0 on success, 1 on failure
- All errors are printed to stderr
