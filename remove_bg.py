import sys
from PIL import Image

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if r > 240 and g > 240 and b > 240:
                pixels[x, y] = (r, g, b, 0)
            elif r > 200 and g > 200 and b > 200:
                # Anti-aliasing edge softening
                avg = (r + g + b) / 3
                alpha = int(255 - (avg - 200) * (255 / 55))
                pixels[x, y] = (r, g, b, max(0, min(255, alpha)))
                
    img.save(output_path, "PNG")

if __name__ == "__main__":
    make_transparent("public/projects/ntGoLogo.png", "public/projects/ntGoLogo_transparent.png")
