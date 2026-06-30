from PIL import Image

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png"}

def load_image(file):
    image = Image.open(file)
    return image.convert("RGB")

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS