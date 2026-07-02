import ConfidenceBar from "./ConfidenceBar";
import formatDisease from "../utils/formatDisease";

function PredictionCard({ prediction }) {

  if (!prediction) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 h-full">

<h2 className="text-3xl font-bold text-green-700">

🌿 AI Analysis

</h2>

<div className="mt-8 space-y-7">

<div>

<p className="uppercase text-gray-500 text-sm">

Disease

</p>

<h1 className="text-3xl font-bold mt-1">

{formatDisease(prediction.disease)}

</h1>

</div>

<ConfidenceBar confidence={prediction.confidence}/>

<div>

<p className="uppercase text-gray-500 text-sm">

Description

</p>

<p className="mt-2 text-gray-700">

{prediction.description}

</p>

</div>

</div>

</div>
  );
}

export default PredictionCard;