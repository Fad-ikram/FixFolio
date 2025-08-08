const Button = ({ onClick, text, Icon, isLoading, className }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-700 hover:opacity-80 flex items-center vt323-regular justify-center py-[8px] mt-6   px-4  gap-4 rounded-lg ${className}`}
    >
      {isLoading ? <span className="loader"></span> : Icon}{" "}
      {isLoading ? "Loading" : text}
    </button>
  );
};

export default Button;