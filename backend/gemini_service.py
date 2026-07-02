import json
import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def get_ai_advice(disease, confidence):

    prompt = f"""
You are an expert agricultural scientist.

A TensorFlow AI model predicted:

Disease: {disease}
Confidence: {confidence:.2f}%

Return ONLY valid JSON.

Schema:

{{
  "description": "",
  "symptoms": [],
  "treatment": [],
  "prevention": [],
  "severity": "Low/Medium/High",
  "farmer_tip": ""
}}

Do not include markdown.
Do not explain.
Return only JSON.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return json.loads(response.text)