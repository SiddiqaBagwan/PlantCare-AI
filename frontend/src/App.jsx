import { useState, useEffect } from "react";

import api from "./services/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import ImagePreview from "./components/ImagePreview";
import SymptomsCard from "./components/SymptomsCard";
import Treatment from "./components/TreatmentCard";
import Prevention from "./components/PreventionCard";
import PredictionCard from "./components/PredictionCard";


import LoadingSpinner from "./components/LoadingSpinner";
import History from "./components/History";

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  // Load saved prediction history
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

      // Save latest 6 predictions
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

      <UploadBox onImageSelect={handleImage} />

      {loading && <LoadingSpinner />}

      {image && !loading && (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">

          <ImagePreview image={image} />

          <PredictionCard prediction={prediction} />

        </div>
      )}

      {prediction && !loading && (
  <div className="max-w-6xl mx-auto space-y-6 px-6 pb-20">

    <SymptomsCard symptoms={prediction.symptoms} />

    <Treatment treatment={prediction.treatment} />

    <Prevention prevention={prediction.prevention} />

  </div>
)}

      <History history={history} />

    </div>
  );
}

export default App;