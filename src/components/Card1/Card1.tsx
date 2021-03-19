import React, { ReactNode } from "react";
import p1Img from "images/p1.png";
import MyLink from "components/MyLink/MyLink";

export interface Card1Props {
  img?: string;
  name?: ReactNode;
  textColor?: string;
  containerClassName?: string;
}
const Card1: React.FC<Card1Props> = ({
  img,
  name,
  containerClassName = "aspect-w-1 aspect-h-1",
  textColor = "text-gray-900",
}) => {
  return (
    <div className={`bg-gray-400 relative group ${containerClassName}`}>
      <img
        className="w-full h-full object-cover"
        src={img || p1Img}
        alt="Product some"
      />
      <div
        className={`absolute inset-0 pl-10 pb-14 flex flex-col justify-end ${textColor}`}
      >
        <span className="transition-all block text-2xl font-medium mb-3 group-hover:text-secondary">
          {name || `Running shoes`}
        </span>
        <span className="group-hover:text-secondary text-xs uppercase underline tracking-widest">
          Shop now
        </span>
      </div>
      <MyLink href="/shop" containerClassName="absolute inset-0 z-10"></MyLink>
    </div>
  );
};

export default Card1;
