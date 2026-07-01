import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <Hero />
      <UploadBox onImageSelect={setImage} />
    </div>
  );
}

export default App;