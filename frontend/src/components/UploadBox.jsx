import { useRef } from "react";

function UploadBox({ onImageSelect }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div
        onClick={handleClick}
        className="w-[650px] h-64 bg-white border-2 border-dashed border-green-400 rounded-2xl flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition"
      >
        <div className="text-6xl">🌿</div>

        <h2 className="text-2xl font-semibold mt-4">
          Upload Leaf Image
        </h2>

        <p className="text-gray-500 mt-2">
          Drag & Drop or Click to Browse
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default UploadBox;