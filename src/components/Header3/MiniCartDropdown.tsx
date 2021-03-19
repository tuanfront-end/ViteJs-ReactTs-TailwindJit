import React from "react";
import p4 from "images/p4.png";
import p6 from "images/p6.png";
import Button from "components/Button/Button";
import DropdownPanel from "components/Dropdown/DropdownPanel";
import DropdownTrigger from "components/Dropdown/DropdownTrigger";
import Dropdown from "components/Dropdown/Dropdown";

const MiniCartDropdown = () => {
  const _renderItem = (index: number) => {
    return (
      <div className="px-8 mini-cart-item flex space-x-3 font-normal text-base relative ">
        <div className="mini-cart-item-image w-3/12 flex-shrink-0">
          <img src={index ? p4 : p6} alt="" />
          <a
            className="absolute inset-0 z-10"
            href="#root"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
        <div className="mini-cart-item-des flex-grow flex flex-col space-y-1 text-sm">
          <span className="text-black font-medium capitalize dark:text-white text-base hover:text-secondary">
            {index ? "Elegant skirt" : "Running shoes"}
          </span>
          <span className="mini-cart-item-quantity text-gray-600 dark:text-gray-400">
            Qty: 1
          </span>
          <span className="mini-cart-item-price font-medium text-gray-600 dark:text-gray-400">
            {index ? "$20.15" : "$10.35"}
          </span>
        </div>
      </div>
    );
  };

  const _renderContent = () => {
    return (
      <div className="w-80 shadow-lg bg-white dark:bg-gray-900 py-8 divide-y divide-gray-200 dark:divide-gray-800">
        <div className="pb-5 space-y-5">
          {_renderItem(0)}
          {_renderItem(1)}
        </div>
        <div className="px-8 flex flex-col space-y-3 text-center pt-4">
          <a
            className="font-medium text-gray-600 dark:text-gray-300 text-base block py-2 hover:underline"
            href="#root"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subtotal: $215.14
          </a>
          <Button containerClassName="bg-gray-900 dark:bg-gray-600 text-white uppercase">
            View Cart
          </Button>
          <Button containerClassName="bg-gray-700 text-white uppercase">
            Checkout
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Dropdown>
      <DropdownTrigger containerClassName="py-1 px-2.5 text-opacity-95 hover:text-opacity-100">
        <span className="relative inline-flex rounded-md shadow-sm">
          <i className="las la-shopping-bag"></i>
          <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span
              className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-secondary text-white text-xs font-medium"
              style={{ fontSize: 9 }}
            >
              2
            </span>
          </span>
        </span>
      </DropdownTrigger>
      <DropdownPanel popperPlacement="bottom-end">
        {_renderContent()}
      </DropdownPanel>
    </Dropdown>
  );
};

export default MiniCartDropdown;
