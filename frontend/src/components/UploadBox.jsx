import { useRef } from "react";

function UploadBox({ onImageSelect }) {
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="border-2 border-dashed border-green-400 rounded-2xl p-12 cursor-pointer hover:bg-green-50 transition text-center"
    >
      <div className="text-7xl mb-4">🌿</div>

      <h2 className="text-3xl font-bold">
        Upload Leaf Image
      </h2>

      <p className="text-gray-500 mt-3">
        Drag & Drop your image
      </p>

      <p className="text-gray-500">
        or click to browse
      </p>

      <p className="text-sm text-gray-400 mt-6">
        Supported formats: PNG • JPG • JPEG
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleChange}
      />
    </div>
  );
}

export default UploadBox;