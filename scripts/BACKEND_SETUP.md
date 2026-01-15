# Backend Setup - HEIC to AVIF

## Kopiowanie plików do backendu

Skopiuj następujące pliki z projektu `formi-qwik` do backendu:

**Z:** `/home/slavko/cursor/formi-qwik/scripts/`  
**Do:** `C:\Users\admin_test\Desktop\backend\backend\scripts\`

Pliki do skopiowania:
- `heic-to-avif.py`
- `requirements.txt`

## Instalacja zależności Python

W katalogu backendu wykonaj:

```bash
cd C:\Users\admin_test\Desktop\backend\backend
pip install -r scripts/requirements.txt
```

Lub ręcznie:
```bash
pip install Pillow pillow-heif pillow-avif-plugin
```

## Endpointy API do dodania w backendzie

Frontend wywołuje:
- `POST /convert/heic-to-avif/single` - konwersja pojedynczego pliku
- `POST /convert/heic-to-avif/batch` - konwersja wielu plików

### Parametry request:
- `file` (single) / `files[]` (batch) - pliki HEIC/HEIF
- `quality` (optional, default: "45") - jakość AVIF (30-60 recommended)
- `maxDimension` (optional, default: "4096") - maksymalna szerokość/wysokość

### Użycie skryptu w backendzie:

```python
import subprocess

result = subprocess.run([
    "python3",  # lub "python" w zależności od systemu
    "scripts/heic-to-avif.py",
    input_path,
    output_path,
    "--quality", "45"
], capture_output=True, text=True)

if result.returncode == 0:
    # sukces
    pass
else:
    # błąd w result.stderr
    pass
```
