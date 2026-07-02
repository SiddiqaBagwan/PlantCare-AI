import json
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def get_ai_advice(disease, confidence):

    prompt = f"""
You are an expert agricultural scientist.

A TensorFlow model predicted:

Disease: {disease}
Confidence: {confidence:.2f}%

Generate accurate agricultural guidance.

Return ONLY valid JSON.

Schema:

{{
    "description": "",
    "symptoms": [],
    "treatment": [],
    "prevention": [],
    "severity": "Low|Medium|High",
    "farmer_tip": ""
}}

Do not use markdown.
Do not write anything except JSON.
"""

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        # Remove markdown if Gemini adds it
        if text.startswith("```"):
            text = text.replace("```json", "")
            text = text.replace("```", "")
            text = text.strip()

        return json.loads(text)

    except Exception as e:

        print("Gemini Error:", e)

        return {
            "description": "AI advisory is currently unavailable.",
            "symptoms": [],
            "treatment": [],
            "prevention": [],
            "severity": "Unknown",
            "farmer_tip": "Please consult your local agricultural expert."
        }