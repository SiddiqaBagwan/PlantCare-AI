from PIL import Image

def load_image(file):

    image = Image.open(file)

    image = image.convert("RGB")

    return image