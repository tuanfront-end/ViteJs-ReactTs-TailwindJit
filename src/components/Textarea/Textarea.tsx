import React from "react";
export interface TextareaProps {
  label?: string;
  desc?: string;
  placeholder?: string;
}
const Textarea: React.FC<TextareaProps> = ({ label, desc, placeholder }) => {
  return (
    <label className={`space-y-2 block`}>
      {label && (
        <span className="text-gray-700 dark:text-gray-300 text-sm font-LibreFranklin tracking-wide">
          {label}
        </span>
      )}
      <textarea
        placeholder={placeholder}
        className="block w-full border-gray-300 dark:border-gray-700 font-LibreFranklin text-sm placeholder-gray-500 tracking-wide font-normal py-3"
        rows={6}
      ></textarea>
    </label>
  );
};

export default Textarea;
