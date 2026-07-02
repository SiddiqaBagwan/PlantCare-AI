function ConfidenceBar({ confidence }) {

  return (

    <div>

      <div className="flex justify-between mb-2">

        <span className="font-medium">
          Confidence
        </span>

        <span className="font-bold text-green-700">
          {confidence}%
        </span>

      </div>

      <div className="w-full h-4 rounded-full bg-gray-200">

        <div
          className="bg-green-600 h-4 rounded-full transition-all duration-1000"
          style={{
            width: `${confidence}%`
          }}
        />

      </div>

    </div>

  );

}

export default ConfidenceBar;