import Button from "components/Button/Button";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Logo from "components/Logo/Logo";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import { NAVDATABASE, NavItemType } from "data/navigation";
import React from "react";
import { NavLink } from "react-router-dom";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVDATABASE,
  onClickClose,
}) => {
  const _renderMenuChild = (item: NavItemType) => {
    return (
      <div
        className="nav-mobile-sub-menu hidden px-3 z-50 w-60 text-base"
        id={"ttnc-" + item.link + item.id}
      >
        {item.children?.map((i, index) => (
          <div
            key={i.link + index}
            className="capitalize text-gray-800 dark:text-gray-200"
          >
            <NavLink
              exact
              strict
              to={i.link}
              className="block px-4 py-2 font-medium capitalize"
              data-ttnc-hidden-toggle={
                i.children ? "ttnc-" + i.link + i.id : undefined
              }
              activeClassName="text-secondary"
            >
              {i.name}
              {i.children && <i className="ml-1 las la-angle-down"></i>}
            </NavLink>
            {i.children && _renderMenuChild(i)}
          </div>
        ))}
      </div>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <div key={item.link + index} className="text-gray-900 dark:text-white">
        <NavLink
          exact
          strict
          className={`inline-flex items-center py-2 px-4 font-medium uppercase text-sm`}
          to={item.link}
          data-ttnc-hidden-toggle={
            item.children ? "ttnc-" + item.link + item.id : undefined
          }
          activeClassName="text-secondary"
        >
          {item.name}
          {item.children && <i className="ml-1 mb-1 las la-angle-down"></i>}
        </NavLink>
        {item.children && _renderMenuChild(item)}
      </div>
    );
  };

  return (
    <div className="overflow-y-auto w-full md:w-80 h-screen p-2 transition transform shadow-lg ring-1 ring-black ring-opacity-20 bg-white dark:bg-gray-800 divide-y-2 divide-gray-100 dark:divide-gray-700">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-gray-700 dark:text-gray-300 text-sm">
          <span>Contact us: ++8801682530219</span>
          <span>Mail us: eoard@gmail.com</span>

          <div className="flex space-x-3 text-gray-900 dark:text-gray-100 text-xl mt-4">
            <a href="#root">
              <i className="lab la-facebook-f"></i>
            </a>
            <a href="#root">
              <i className="lab la-twitter"></i>
            </a>
            <a href="#root">
              <i className="lab la-pinterest-p"></i>
            </a>
            <a href="#root">
              <i className="lab la-github"></i>
            </a>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose
            onClick={onClickClose}
            containerClassName="text-black dark:text-white"
          />
        </span>
      </div>
      <nav className="flex flex-col items-start py-6 px-5 space-y-2">
        {data.map(_renderItem)}
      </nav>
      <div className="flex items-center justify-between py-6 px-5 space-x-4">
        <Button containerClassName="text-white bg-gray-700 uppercase">
          Get Template
        </Button>
        <span className="block md:hidden">
          <SwithNightMode />
        </span>
      </div>
    </div>
  );
};

export default NavMobile;
