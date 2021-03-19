import React, { FC } from "react";
import DropdownPanel from "./DropdownPanel";
import DropdownTrigger from "./DropdownTrigger";

export interface DropdownProps {
  containerClassName?: string;
}

interface DropdownPropsStatic {
  DropdownPanel: typeof DropdownPanel;
  DropdownTrigger: typeof DropdownTrigger;
}

const Dropdown: FC<DropdownProps> & DropdownPropsStatic = ({
  children,
  containerClassName = "",
}) => {
  return (
    <div className={`ttnc-dropdown relative inline-flex ${containerClassName}`}>
      {children}
    </div>
  );
};

Dropdown.DropdownPanel = DropdownPanel;
Dropdown.DropdownTrigger = DropdownTrigger;

export default Dropdown;
