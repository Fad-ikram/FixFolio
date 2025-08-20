
export default function InputField({ label, value, onChange, type = "text", placeholder = "" }) {
  return (
    <div className="mx-8">
      <label className="block font-medium mb-1 mt-2 text-dark-purple">{label}</label>
      {type === "textarea" ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 w-full border rounded"
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded "
        />
      )}
    </div>
  );
}
