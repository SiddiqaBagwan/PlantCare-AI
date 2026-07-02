function ImagePreview({ image }) {

  if (!image) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Uploaded Image
      </h2>

      <img
    src={URL.createObjectURL(image)}
    alt="Leaf Preview"
    className="
        w-full
        h-[420px]
        object-cover
        rounded-2xl
        shadow-lg
    "
/>

    </div>
  );
}

export default ImagePreview;