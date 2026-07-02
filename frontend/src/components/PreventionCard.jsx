function Prevention({ prevention }) {

  if (!prevention || prevention.length === 0) return null;

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">

        🛡 Prevention

      </h2>

      <ul className="list-disc ml-6 space-y-2">

        {prevention.map((item, index) => (

          <li key={index}>{item}</li>

        ))}

      </ul>

    </div>

  );

}

export default Prevention;