import { useRef } from "react";

const DragDropUpload = ({ label, type, onUpload }) => {
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    if (!files || files.length === 0) return;
    onUpload(Array.from(files));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <div
      className="border-2 border-dashed border-purple rounded-lg p-6 text-center cursor-pointer hover:bg-purple/10"
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <p className="text-dark-purple font-semibold">{label}</p>
      <p className="text-gray-500 text-sm">Drag & Drop or Click to Upload</p>

      <input
        ref={fileInputRef}
        type="file"
        multiple={type !== "profilePic"} // profile pic = 1 file
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default DragDropUpload;
