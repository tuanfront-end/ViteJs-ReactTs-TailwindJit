import React, { FC } from "react";
import ToolTipPanel from "./ToolTipPanel";
import ToolTipTrigger from "./ToolTipTrigger";

export interface ToolTipProps {
  containerClassName?: string;
}

interface ToolTipPropsStatic {
  ToolTipPanel: typeof ToolTipPanel;
  ToolTipTrigger: typeof ToolTipTrigger;
}

const ToolTip: FC<ToolTipProps> & ToolTipPropsStatic = ({
  children,
  containerClassName = "",
}) => {
  return (
    <div className={`ttnc-ToolTip relative inline-flex ${containerClassName}`}>
      {children}
    </div>
  );
};

ToolTip.ToolTipPanel = ToolTipPanel;
ToolTip.ToolTipTrigger = ToolTipTrigger;

export default ToolTip;
