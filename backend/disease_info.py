import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DATA_PATH = BASE_DIR / "data" / "diseases.json"

try:
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        disease_database = json.load(f)
except (FileNotFoundError, json.JSONDecodeError):
    disease_database = {}