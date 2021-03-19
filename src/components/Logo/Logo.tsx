import React from "react";
import { Link } from "react-router-dom";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo: React.FC<LogoProps> = ({ img, imgLight }) => {
  return (
    <Link to="/" className="ttnc-logo block">
      {img ? (
        <img
          className={`block ${imgLight ? "dark:hidden" : ""}`}
          src={img}
          alt="Logo"
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <img className="hidden dark:block" src={imgLight} alt="Logo-Light" />
      )}
    </Link>
  );
};

export default Logo;
