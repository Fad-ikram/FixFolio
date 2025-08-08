import { Mail, User, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const labelIconMap = {
  Email: Mail,
  Username: User,
};

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  defaultValue,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const IconComponent = labelIconMap[label];
  const isPassword = type === "password";
  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="flex flex-col">
      <label htmlFor={label} className="text-sm vt323-regular pt-2 pb-1">
        {label}
      </label>
      <div className="relative">
        <input
          id={label}
          name={label}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          value={value}
          className={`border-[1.5px] border-gray-400 rounded-md w-full py-2 px-4 ${
            (IconComponent || isPassword) ? "pr-10" : "pr-4"
          }`}
        />
        {(IconComponent || isPassword) && (
          <div
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
            onClick={() =>
              isPassword
                ? setShowPassword((prev) => !prev)
                : undefined
            }
          >
            {isPassword ? (
              showPassword ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )
            ) : (
              <IconComponent size={20} className="pointer-events-none" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;

