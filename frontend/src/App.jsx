import { useState, useEffect } from "react";

import api from "./services/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import CameraCapture from "./components/CameraCapture";
import ImagePreview from "./components/ImagePreview";
import PredictionCard from "./components/PredictionCard";
import SymptomsCard from "./components/SymptomsCard";
import TreatmentCard from "./components/TreatmentCard";
import PreventionCard from "./components/PreventionCard";
import LoadingSpinner from "./components/LoadingSpinner";
import History from "./components/History";

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [cameraMode, setCameraMode] = useState(false);

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    setHistory(savedHistory);
  }, []);

  const handleImage = async (file) => {
    setImage(file);
    setPrediction(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/predict", formData);

      const result = response.data.prediction;

      setPrediction(result);

      const updatedHistory = [result, ...history].slice(0, 6);

      setHistory(updatedHistory);

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">

      <Navbar />

      <Hero />

      {/* Upload / Camera Section */}

      {!prediction && (
        <div className="max-w-5xl mx-auto mt-10 mb-16 px-6">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="flex justify-center gap-5 mb-8">

              <button
                onClick={() => setCameraMode(false)}
                className={`px-8 py-3 rounded-xl font-semibold transition ${
                  !cameraMode
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                📁 Upload Image
              </button>

              <button
                onClick={() => setCameraMode(true)}
                className={`px-8 py-3 rounded-xl font-semibold transition ${
                  cameraMode
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                📷 Use Camera
              </button>

            </div>

            {cameraMode ? (
              <CameraCapture onCapture={handleImage} />
            ) : (
              <UploadBox onImageSelect={handleImage} />
            )}

          </div>

        </div>
      )}

      {loading && <LoadingSpinner />}

      {prediction && !loading && (

        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-center mb-8">

            <button
              onClick={() => {
                setPrediction(null);
                setImage(null);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              📷 Analyze Another Leaf
            </button>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">

            <ImagePreview image={image} />

            <PredictionCard prediction={prediction} />

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">

            <SymptomsCard symptoms={prediction.symptoms} />

            <TreatmentCard treatment={prediction.treatment} />

            <PreventionCard prevention={prediction.prevention} />

          </div>

        </div>

      )}

      <History history={history} />

    </div>
  );
}

export default App;