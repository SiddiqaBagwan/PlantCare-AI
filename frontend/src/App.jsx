import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import ImagePreview from "./components/ImagePreview";
import PredictionCard from "./components/PredictionCard";

function App() {

  const [image, setImage] = useState(null);

  const dummyPrediction = {
    disease: "Tomato Late Blight",
    confidence: 96.4
  };

  return (
    <div className="min-h-screen bg-green-50">

      <Navbar />

      <Hero />

      <UploadBox onImageSelect={setImage} />

      {image && (

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">

          <ImagePreview image={image} />

          <PredictionCard prediction={dummyPrediction} />

        </div>

      )}

    </div>
  );
}

export default App;