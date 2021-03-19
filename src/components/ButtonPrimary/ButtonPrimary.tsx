import MyLink from "components/MyLink/MyLink";
import React, { FC } from "react";
import { LocationStates } from "routers/types";

export interface ButtonPrimaryProps {
  containerClassName?: string;
  padding?: string;
  disabled?: boolean;
  fontSize?: string;
  modalToggleId?: string;
  url?: keyof LocationStates | "#root" | "";
  textClass?: string;
  size?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  containerClassName = "",
  padding = "py-4 px-6 sm:px-8 2xl:px-12",
  fontSize = "text-xs 2xl:text-sm uppercase",
  textClass = "tracking-widest",
  disabled = false,
  url = "#root",
  children,
  modalToggleId,
}) => {
  let classes =
    `ttnc-ButtonPrimary inline-flex items-center justify-center text-center leading-none font-medium` +
    " " +
    "border border-black bg-black text-white dark:border-white hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white dark:hover:border-secondary" +
    " " +
    textClass +
    " " +
    padding +
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

export default ButtonPrimary;
