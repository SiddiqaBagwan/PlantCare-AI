import Webcam from "react-webcam";
import { useRef } from "react";

function CameraCapture({ onCapture }) {

  const webcamRef = useRef(null);

  const capture = () => {

    const imageSrc = webcamRef.current.getScreenshot();

    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {

        const file = new File(
          [blob],
          "camera.jpg",
          {
            type: "image/jpeg"
          }
        );

        onCapture(file);

      });

  };

  return (

    <div className="text-center">

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="rounded-2xl mx-auto max-w-xl w-full shadow-md"
      />

      <button
        onClick={capture}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
      >

        📸 Capture Image

      </button>

    </div>

  );

}

export default CameraCapture;