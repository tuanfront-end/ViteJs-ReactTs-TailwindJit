import React from "react";
export interface InputProps {
  containerClassName?: string;
  placeholder?: string;
  label?: string;
  type?: string;
}
const Input: React.FC<InputProps> = ({
  containerClassName = "block",
  placeholder = "",
  label = "",
  type = "text",
}) => {
  return (
    <label className={`space-y-2 ${containerClassName}`}>
      {label && (
        <span className="text-gray-700 dark:text-gray-300 text-sm font-LibreFranklin tracking-wide">
          {label}
        </span>
      )}
      <input
        type={type}
        className="block w-full border-gray-300 dark:border-gray-700 font-LibreFranklin py-3 placeholder-gray-500 tracking-wide text-sm font-normal"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
