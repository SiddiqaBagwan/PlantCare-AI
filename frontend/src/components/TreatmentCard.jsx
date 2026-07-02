function Treatment({ treatment }) {

  if (!treatment || treatment.length === 0) return null;

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-4">

        💊 Treatment

      </h2>

      <ul className="list-disc ml-6 space-y-2">

        {treatment.map((item, index) => (

          <li key={index}>{item}</li>

        ))}

      </ul>

    </div>

  );

}

export default Treatment;