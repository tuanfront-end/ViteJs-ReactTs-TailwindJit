import React from "react";

export interface SectionProps {
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  containerClassName = "py-20",
}) => {
  return <div className={`ttnc-Section ${containerClassName}`}>{children}</div>;
};

export default Section;
