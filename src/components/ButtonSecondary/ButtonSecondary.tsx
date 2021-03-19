import MyLink from "components/MyLink/MyLink";
import React, { FC } from "react";
import { LocationStates } from "routers/types";

export interface ButtonSecondaryProps {
  containerClassName?: string;
  padding?: string;
  disabled?: boolean;
  fontSize?: string;
  border?: string;
  modalToggleId?: string;
  url?: keyof LocationStates | "#root" | "";
  size?: string;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = ({
  containerClassName = "",
  padding = "py-4 px-6 sm:px-8 2xl:px-12",
  fontSize = "text-xs 2xl:text-sm uppercase text-white",
  border = "border-white dark:border-white",
  disabled = false,
  url = "#root",
  children,
  modalToggleId,
}) => {
  let classes =
    `ttnc-ButtonSecondary inline-flex items-center justify-center text-center leading-none tracking-widest font-medium` +
    " " +
    "border hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white dark:hover:border-secondary" +
    " " +
    padding +
    " " +
    border +
    " " +
    fontSize +
    " " +
    containerClassName;

  if (!!url) {
    return (
      <MyLink
        data-ttnc-modal-toggle={modalToggleId}
        href={url}
        containerClassName={classes}
      >
        {children || `This Button`}
      </MyLink>
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

export default ButtonSecondary;
