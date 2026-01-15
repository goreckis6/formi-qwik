#!/usr/bin/env python3
"""
HEIC → WebP converter (backend-ready)

- HEIC/HEIF via pillow-heif
- WebP via Pillow
- EXIF orientation fix
- Optional max-dimension downscale
- Stateless, safe for workers / API
"""

import os
import sys
import argparse
import traceback

try:
    from PIL import Image, ImageOps
    HAS_PIL = True
except ImportError:
    HAS_PIL = False

try:
    from pillow_heif import register_heif_opener
    HAS_PILLOW_HEIF = True
except ImportError:
    HAS_PILLOW_HEIF = False


_HEIF_REGISTERED = False


def _ensure_heif():
    """Register HEIF opener once per process"""
    global _HEIF_REGISTERED
    if HAS_PILLOW_HEIF and not _HEIF_REGISTERED:
        register_heif_opener()
        _HEIF_REGISTERED = True
    elif not HAS_PILLOW_HEIF:
        raise ImportError("pillow-heif is not installed. Please install it with: pip install pillow-heif")


def convert_heic_to_webp(
    input_file: str,
    output_file: str,
    quality: int = 85,
    max_dimension: int = 4096,
    lossless: bool = False,
    method: int = 6
) -> bool:
    """
    Convert HEIC/HEIF image to WebP format.
    
    Args:
        input_file: Path to input HEIC/HEIF file
        output_file: Path to output WebP file
        quality: WebP quality (0-100), ignored if lossless=True
        max_dimension: Maximum width or height (will downscale if exceeded)
        lossless: Use lossless WebP compression
        method: WebP encoding method (0-6, higher = better compression but slower)
    
    Returns:
        True if conversion successful, False otherwise
    """
    if not HAS_PIL:
        print("ERROR: Pillow not available. Please install with: pip install Pillow", file=sys.stderr)
        return False

    if not os.path.isfile(input_file):
        print(f"ERROR: File not found: {input_file}", file=sys.stderr)
        return False

    try:
        _ensure_heif()

        # Validate quality range
        quality = max(0, min(100, quality))
        
        # Validate method range
        method = max(0, min(6, method))

        img = Image.open(input_file)
        
        # Fix EXIF orientation
        img = ImageOps.exif_transpose(img)

        # Downscale if needed
        w, h = img.size
        if max(w, h) > max_dimension:
            scale = max_dimension / max(w, h)
            new_w = int(w * scale)
            new_h = int(h * scale)
            img = img.resize(
                (new_w, new_h),
                Image.Resampling.LANCZOS if scale < 0.5 else Image.Resampling.BILINEAR
            )

        # Ensure output directory exists
        out_dir = os.path.dirname(output_file)
        if out_dir and not os.path.exists(out_dir):
            os.makedirs(out_dir, exist_ok=True)

        # Save as WebP
        img.save(
            output_file,
            format="WEBP",
            quality=quality,
            lossless=lossless,
            method=method
        )

        # Verify output file was created and has content
        if not os.path.exists(output_file):
            print(f"ERROR: Output file was not created: {output_file}", file=sys.stderr)
            return False
        
        if os.path.getsize(output_file) == 0:
            print(f"ERROR: Output file is empty: {output_file}", file=sys.stderr)
            return False

        return True

    except ImportError as e:
        print(f"ERROR: Missing dependency: {e}", file=sys.stderr)
        return False
    except Exception as e:
        print(f"ERROR: HEIC → WebP conversion failed: {e}", file=sys.stderr)
        traceback.print_exc()
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Convert HEIC/HEIF images to WebP format",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s input.heic output.webp
  %(prog)s input.heic output.webp --quality 90
  %(prog)s input.heic output.webp --max-dimension 2048 --lossless
        """
    )
    parser.add_argument("input_file", help="Input HEIC/HEIF file path")
    parser.add_argument("output_file", help="Output WebP file path")
    parser.add_argument(
        "--quality",
        type=int,
        default=85,
        help="WebP quality (0-100, default: 85). Ignored if --lossless is used."
    )
    parser.add_argument(
        "--max-dimension",
        type=int,
        default=4096,
        help="Maximum width or height in pixels (default: 4096). Images larger than this will be downscaled."
    )
    parser.add_argument(
        "--lossless",
        action="store_true",
        help="Use lossless WebP compression (quality parameter will be ignored)"
    )
    parser.add_argument(
        "--method",
        type=int,
        default=6,
        choices=range(0, 7),
        metavar="[0-6]",
        help="WebP encoding method (0-6, default: 6). Higher values provide better compression but are slower."
    )
    args = parser.parse_args()

    ok = convert_heic_to_webp(
        args.input_file,
        args.output_file,
        args.quality,
        args.max_dimension,
        args.lossless,
        args.method
    )

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
