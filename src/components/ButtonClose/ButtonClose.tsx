import React from "react";
export interface ButtonClose {
  containerClassName?: string;
  onClick?: () => {};
}

const ButtonClose: React.FC<ButtonClose> = ({
  containerClassName = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`text-2xl flex items-center justify-center ${containerClassName}`}
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <i className="las la-times"></i>
    </button>
  );
};

export default ButtonClose;
