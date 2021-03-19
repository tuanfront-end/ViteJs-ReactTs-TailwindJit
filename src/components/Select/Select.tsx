import React, { FC } from "react";

export interface SelectProps {
  containerClassName?: string;
  label?: string;
}

const Select: FC<SelectProps> = ({
  containerClassName = "block",
  label = "",
  children,
}) => {
  return (
    <label className={`space-y-2 ${containerClassName}`}>
      {label && (
        <span className="text-gray-700 dark:text-gray-300 text-sm font-LibreFranklin tracking-wide">
          {label}
        </span>
      )}
      <select className="block w-full border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 font-LibreFranklin text-sm placeholder-gray-400 tracking-wide font-normal">
        {children}
      </select>
    </label>
  );
};

export default Select;
