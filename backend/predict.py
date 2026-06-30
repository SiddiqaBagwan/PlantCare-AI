import json
from pathlib import Path

import numpy as np
import tensorflow as tf
from PIL import Image

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Paths
MODEL_PATH = BASE_DIR / "model" / "plantcare_ai_model.keras"
CLASS_PATH = BASE_DIR / "model" / "class_names.json"

# Load model once when the server starts
model = tf.keras.models.load_model(MODEL_PATH)

# Load class names
with open(CLASS_PATH, "r") as f:
    CLASS_NAMES = json.load(f)


def predict_image(image: Image.Image):
    """
    Predict plant disease from a PIL image.
    """

    # Resize image
    image = image.resize((224, 224))

    # Convert to numpy
    image = np.array(image).astype(np.float32)

    # IMPORTANT:
    # Do NOT divide by 255 because the model already contains
    # a Rescaling(1./255) layer.
    image = np.expand_dims(image, axis=0)

    # Predict
    predictions = model.predict(image, verbose=0)[0]

    # Best class
    index = np.argmax(predictions)

    return {
        "disease": CLASS_NAMES[index],
        "confidence": round(float(predictions[index]) * 100, 2)
    }