import React, { ReactNode } from "react";
import card3_p1 from "images/card3_p1.png";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";

export interface Card3Props {
  img?: string;
  name?: ReactNode;
}

const Card3: React.FC<Card3Props> = ({ img, name }) => {
  return (
    <div className="aspect-w-4 aspect-h-3 bg-gray-400 relative">
      <img
        src={img || card3_p1}
        className="w-full h-full object-cover"
        alt=""
      />
      <div>
        <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
          <div className="space-y-8 text-white">
            <h3 className="text-3xl lg:text-4xl font-medium">
              {name || (
                <span>
                  Women’s <br /> fashion
                </span>
              )}
            </h3>

            <ButtonSecondary url="/shop">Shop now</ButtonSecondary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
