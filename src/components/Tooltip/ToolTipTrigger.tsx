import React from "react";
export interface ToolTip2TriggerProps {
  containerClassName?: string;
}

const ToolTip2Trigger: React.FC<ToolTip2TriggerProps> = ({
  children,
  containerClassName = "",
}) => {
  return (
    <button type="button" className={`ttnc-toolTip__btn ${containerClassName}`}>
      {children}
    </button>
  );
};

export default ToolTip2Trigger;
