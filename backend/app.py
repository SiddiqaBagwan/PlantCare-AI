from fastapi import FastAPI, UploadFile, File
from predict import predict_image
from utils import load_image
from disease_info import disease_database

app = FastAPI(title="PlantCare AI")

@app.get("/")
def home():
    return {"message":"PlantCare AI API Running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image = load_image(file.file)

    result = predict_image(image)

    disease = result["disease"]
    confidence = result["confidence"]
    info = disease_database.get(
        disease,
        {
            "description":"Information coming soon.",
            "treatment":[],
            "prevention":[]
        }
    )

    return {

        "disease": disease,

        "confidence": round(confidence*100,2),

        "description": info["description"],

        "treatment": info["treatment"],

        "prevention": info["prevention"]

    }