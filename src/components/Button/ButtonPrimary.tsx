import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props) => {
  return <Button containerClassName="ttnc-ButtonPrimary" {...props} />;
};

export default ButtonPrimary;
