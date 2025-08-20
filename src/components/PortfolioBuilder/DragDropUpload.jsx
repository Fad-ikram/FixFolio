import { useState, useRef } from "react";

const DragDropUpload = ({ label, type, onUpload }) => {
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    onUpload(files);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed p-6 rounded-lg text-center cursor-pointer ${
        dragging ? "bg-cyan-100 border-blue-400" : "border-gray-300"
      }`}
    >
      <p className="font-medium">{label}</p>
      <p className="text-sm text-gray-500">
        {type === "cv" ? "Click or drag your CV (PDF)" : "Click or drag files here"}
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept={type === "cv" ? ".pdf,.doc,.docx" : type === "gallery" ? "image/*" : "*"}
        multiple={type !== "cv"} // CV = 1 seul fichier
        onChange={(e) => onUpload(Array.from(e.target.files))}
        className="hidden"
        id={`file-${type}`}
      />
    </div>
  );
};

export default DragDropUpload;
