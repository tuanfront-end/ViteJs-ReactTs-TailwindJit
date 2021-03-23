import React from "react";
export interface PanelProps {
  panelClassName?: string;
}
const Panel: React.FC<PanelProps> = ({
  children,
  panelClassName = "absolute right-0 origin-top-left w-56 mt-2 top-full bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none",
}) => {
  throw new Error("Panel must be in Dropdown Parent");
};

export default Panel;
