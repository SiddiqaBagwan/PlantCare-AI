import ConfidenceBar from "./ConfidenceBar";
import formatDisease from "../utils/formatDisease";

function PredictionCard({ prediction }) {

  if (!prediction) return null;

  const severityColor = {
    Low: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    High: "bg-red-100 text-red-700",
    Unknown: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold text-green-700 mb-8">
        🌿 AI Analysis
      </h2>

      <div className="space-y-6">

        <div>
          <p className="uppercase text-gray-500 text-sm">Disease</p>

          <h1 className="text-3xl font-bold">
            {formatDisease(prediction.disease)}
          </h1>
        </div>

        <ConfidenceBar confidence={prediction.confidence} />

        <div>
          <p className="uppercase text-gray-500 text-sm">Description</p>

          <p className="mt-2 text-gray-700">
            {prediction.description}
          </p>
        </div>

        <div>
          <p className="uppercase text-gray-500 text-sm mb-2">
            Severity
          </p>

          <span
            className={`px-4 py-2 rounded-full font-semibold ${severityColor[prediction.severity]}`}
          >
            {prediction.severity}
          </span>
        </div>

        <div>
          <p className="uppercase text-gray-500 text-sm">
            Farmer Tip
          </p>

          <p className="mt-2 italic text-green-700">
            💡 {prediction.farmer_tip}
          </p>
        </div>

      </div>

    </div>
  );
}

export default PredictionCard;