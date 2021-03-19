import React, { FC } from "react";
import ToolTip2Panel from "./ToolTip2Panel";
import ToolTip2Trigger from "./ToolTip2Trigger";

export interface ToolTip2Props {
  containerClassName?: string;
}

interface ToolTip2PropsStatic {
  ToolTip2Panel: typeof ToolTip2Panel;
  ToolTip2Trigger: typeof ToolTip2Trigger;
}

const ToolTip2: FC<ToolTip2Props> & ToolTip2PropsStatic = ({
  children,
  containerClassName = "",
}) => {
  return (
    <div className={`ttnc-ToolTip2 relative inline-flex ${containerClassName}`}>
      {children}
    </div>
  );
};

ToolTip2.ToolTip2Panel = ToolTip2Panel;
ToolTip2.ToolTip2Trigger = ToolTip2Trigger;

export default ToolTip2;
