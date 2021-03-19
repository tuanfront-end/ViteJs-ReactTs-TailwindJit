import React from "react";
import p4Img from "images/p4.png";
import ListIconOnCard from "components/ListIconOnCard/ListIconOnCard";
import QuickViewProduct from "components/QuickViewProduct/QuickViewProduct";
import MyLink from "components/MyLink/MyLink";

export interface Card2Props {
  img?: string;
  img2?: string;
  name?: string;
  price?: string;
  oldPrice?: string;
  saleUp?: string;
  id: string;
}
const Card2: React.FC<Card2Props> = ({
  img,
  img2,
  name,
  price,
  oldPrice,
  saleUp,
  id,
}) => {
  return (
    <React.Fragment>
      <QuickViewProduct
        id={id}
        images={[img || p4Img, img2 || p4Img]}
        name={name}
        price={price}
        oldPrice={oldPrice}
      />
      <div className="group relative">
        {saleUp && (
          <div className="absolute right-0 top-8 z-20">
            <span className="py-2 px-4 bg-secondary text-gray-200 text-sm">
              {saleUp}
            </span>
          </div>
        )}
        <div className="relative">
          <MyLink
            containerClassName="block aspect-w-3 aspect-h-4 bg-gray-300"
            href="/shop-single-2"
          >
            <img
              className={`block w-full h-full object-cover ${
                !!img2 ? "group-hover:hidden" : ""
              }`}
              src={img || p4Img}
              alt="Product some"
            />
            {img2 && (
              <img
                className="hidden group-hover:block w-full h-full object-cover"
                src={img2}
                alt="Product some"
              />
            )}
          </MyLink>
          <div className="transform opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 absolute flex items-end justify-center bottom-5 left-1/2 -translate-x-1/2 transition z-10 w-full">
            <ListIconOnCard quickViewModalId={id} />
          </div>
        </div>
        <div className="px-2 py-4 2xl:px-6 2xl:py-6 text-center text-gray-900 dark:text-gray-200 text-lg font-medium">
          <MyLink
            href="/shop-single"
            containerClassName="transition-all block mb-2.5 group-hover:text-secondary font-normal"
          >
            {name || `Running shoes`}
          </MyLink>

          <div className="flex justify-center text-base space-x-4">
            <span className="block">{price || `154$`}</span>
            {oldPrice && (
              <span className="block line-through text-gray-400">
                {oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card2;
