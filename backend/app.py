from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from gemini_service import get_ai_advice
from predict import predict_image
from utils import load_image, allowed_file
from disease_info import disease_database

app = FastAPI(
    title="PlantCare AI API",
    version="1.0.0"
)

# Allow React frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "🌱 PlantCare AI API is running!"
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    if not allowed_file(file.filename):
        raise HTTPException(
            status_code=400,
            detail="Only JPG, JPEG and PNG images are allowed."
        )

    image = load_image(file.file)

    result = predict_image(image)

    disease = result["disease"]
    confidence = result["confidence"]

    info = get_ai_advice(
    disease,
    confidence
)

    return {
        "success": True,
        "prediction": {
            "disease": disease,
            "confidence": confidence,
            "description": info["description"],
            "treatment": info["treatment"],
            "prevention": info["prevention"]
        }
    }