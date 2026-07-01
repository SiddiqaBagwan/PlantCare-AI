function ConfidenceBar({ confidence }) {

  return (

    <div className="mt-5">

      <div className="flex justify-between">

        <span>Confidence</span>

        <span>{confidence}%</span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

        <div
          className="bg-green-600 h-3 rounded-full transition-all duration-700"
          style={{
            width: `${confidence}%`
          }}
        />

      </div>

    </div>

  );

}

export default ConfidenceBar;