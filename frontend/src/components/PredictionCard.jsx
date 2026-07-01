function PredictionCard({ prediction }) {

  if (!prediction) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700">
        Prediction
      </h2>

      <div className="mt-6 space-y-4">

        <div>
          <p className="text-gray-500">Disease</p>
          <h3 className="text-xl font-semibold">
            {prediction.disease}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">Confidence</p>
          <h3 className="text-xl font-semibold">
            {prediction.confidence}%
          </h3>
        </div>

      </div>

    </div>
  );
}

export default PredictionCard;