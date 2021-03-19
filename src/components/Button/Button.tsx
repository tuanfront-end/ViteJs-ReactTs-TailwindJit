import React, { FC } from "react";

export interface ButtonProps {
  containerClassName?: string;
  padding?: string;
  disabled?: boolean;
  fontSize?: string;
  modalToggleId?: string;
  url?: string;
  size?: string;
}

const Button: FC<ButtonProps> = ({
  containerClassName = "",
  padding = "py-4 px-6 sm:px-8 2xl:px-12",
  fontSize = "text-xs 2xl:text-sm ",
  disabled = false,
  url = "#root",
  children,
  modalToggleId,
}) => {
  let classes =
    `ttnc-button inline-flex items-center justify-center text-center leading-none tracking-widest` +
    " " +
    "hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white dark:hover:border-secondary" +
    " " +
    padding +
    " " +
    fontSize +
    " " +
    containerClassName;

  if (!!url) {
    return (
      <a
        href={url}
        className={`${classes}`}
        data-ttnc-modal-toggle={modalToggleId}
      >
        {children || `This Button`}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={classes}
      data-ttnc-modal-toggle={modalToggleId}
    >
      {children || `This Button`}
    </button>
  );
};

export default Button;
