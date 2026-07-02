import formatDisease from "../utils/formatDisease";

function History({ history }) {

  if (history.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-20">

      <h2 className="text-3xl font-bold text-green-700 mb-6">
        🕒 Recent Predictions
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {history.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5"
          >

            <h3 className="font-bold text-lg">

              {formatDisease(item.disease)}

            </h3>

            <p className="text-green-700 mt-2">

              {item.confidence}%

            </p>

          </div>

        ))}

      </div>

    </div>
  );

}

export default History;