import React from "react";
import { Transition } from "react-transition-group";

export interface TransitonProps {
  // enteringClass?: string;
  enteredClass?: string;
  // exitingClass?: string;
  exitedClass?: string;
  inProps: boolean;
}

const Transiton: React.FC<TransitonProps> = ({
  children,
  enteredClass = "",
  exitedClass = "",
  inProps,
}) => {
  return (
    <Transition in={inProps} timeout={0}>
      <div>{children}</div>
    </Transition>
  );
};

export default Transiton;
