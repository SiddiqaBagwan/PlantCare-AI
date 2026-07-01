import ConfidenceBar from "./ConfidenceBar";

function PredictionCard({ prediction }) {

  if (!prediction) return null;

  return (

    <div className="bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-green-700">

        🌿 Prediction

      </h2>

      <div className="mt-6">

        <p className="text-gray-500">

          Disease

        </p>

        <h1 className="text-2xl font-bold">

          {prediction.disease}

        </h1>

      </div>

      <ConfidenceBar confidence={prediction.confidence} />

    </div>

  );

}

export default PredictionCard;