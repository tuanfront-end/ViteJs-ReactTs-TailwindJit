import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonSecondaryProps extends ButtonProps {}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = (props) => {
  return (
    <Button
      containerClassName="ttnc-ButtonSecondary border border-gray-300 hover:border-gray-500"
      colorClass="text-gray-900 dark:text-gray-100"
      {...props}
    />
  );
};

export default ButtonSecondary;
