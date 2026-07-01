import { useState } from "react";

import api from "./services/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import ImagePreview from "./components/ImagePreview";
import PredictionCard from "./components/PredictionCard";

function App() {

  const [image, setImage] = useState(null);

  const [prediction, setPrediction] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleImage = async (file) => {

    setImage(file);

    setPrediction(null);

    setLoading(true);

    const formData = new FormData();

    formData.append("file", file);

    try {

      const response = await api.post("/predict", formData);

      setPrediction(response.data.prediction);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-green-50">

      <Navbar />

      <Hero />

      <UploadBox onImageSelect={handleImage} />

      {loading && (

        <div className="text-center text-2xl py-10">

          🌿 Predicting...

        </div>

      )}

      {image && !loading && (

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">

          <ImagePreview image={image} />

          <PredictionCard prediction={prediction} />

        </div>

      )}

    </div>

  );

}

export default App;