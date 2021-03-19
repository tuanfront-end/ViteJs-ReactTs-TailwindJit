import React from "react";

export interface ToolTip2PanelProps {
  containerClassName?: string;
  minWidth?: string;
  popperPlacement?:
    | "left-start"
    | "left"
    | "left-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-start"
    | "bottom"
    | "bottom-end";
}

const ToolTip2Panel: React.FC<ToolTip2PanelProps> = ({
  children,
  containerClassName = "",
  popperPlacement = "top",
}) => {
  return (
    <div
      className={`ttnc-toolTip2__panel min-w-max hidden bg-gray-900 ring-1 ring-gray-900 text-white px-2 py-1 text-sm ring-opacity-5 mb-2 ${containerClassName}`}
      data-popper-placement={popperPlacement}
    >
      {children}
    </div>
  );
};

export default ToolTip2Panel;
