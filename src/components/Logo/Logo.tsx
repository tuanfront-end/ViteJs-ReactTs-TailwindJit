import React from "react";
import LogoImg from "images/logo.png";
import { Link } from "react-router-dom";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo: React.FC<LogoProps> = ({ img, imgLight }) => {
  return (
    <Link to="/" className="ttnc-logo block">
      <img
        className={`block ${imgLight ? "dark:hidden" : ""}`}
        src={img || LogoImg}
        alt="Logo"
      />
      {imgLight && (
        <img className="hidden dark:block" src={imgLight} alt="Logo-Light" />
      )}
    </Link>
  );
};

export default Logo;
