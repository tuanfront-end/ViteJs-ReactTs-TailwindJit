import React from "react";
import placeholder from "images/placeholder.jpg";
import Dropdown from "components/Dropdown/Dropdown";
import MyLink from "components/MyLink/MyLink";
import ButtonPrimary from "components/Button/ButtonPrimary";

const MiniCartDropdown = () => {
  const _renderItem = (index: number) => {
    return (
      <div className="px-8 mini-cart-item flex space-x-3 font-normal text-base relative ">
        <div className="mini-cart-item-image w-3/12 flex-shrink-0">
          <img src={index ? placeholder : placeholder} alt="placeholder" />
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
      <div className="w-80 shadow-lg bg-white dark:bg-gray-800 py-8 divide-y divide-gray-200 dark:divide-gray-800">
        <div className="pb-5 space-y-5">
          {_renderItem(0)}
          {_renderItem(1)}
        </div>
        <div className="px-8 flex flex-col space-y-3 text-center pt-4">
          <MyLink
            containerClassName="font-medium text-gray-600 dark:text-gray-300 text-base block py-2 hover:underline"
            href="/checkout"
          >
            Subtotal: $215.14
          </MyLink>
          <ButtonPrimary href="/cart">View Cart</ButtonPrimary>

          <ButtonPrimary href="/checkout">Checkout</ButtonPrimary>
        </div>
      </div>
    );
  };

  return (
    <Dropdown popperPlacement="bottom-start">
      <Dropdown.Trigger>
        <div className="py-1 px-2.5 text-opacity-95 hover:text-opacity-100">
          <span className="relative inline-flex rounded-md shadow-sm">
            <i className="las la-shopping-bag"></i>
            <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-secondary text-white text-xs font-medium text-[9]">
                2
              </span>
            </span>
          </span>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Panel>{_renderContent()}</Dropdown.Panel>
    </Dropdown>
  );
};

export default MiniCartDropdown;
