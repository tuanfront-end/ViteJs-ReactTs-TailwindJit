import React from "react";
import Logo from "components/Logo/Logo";
import { NAVDATABASE } from "data/navigation";
import NavigationItem from "./NavigationItem";

const DATA = NAVDATABASE;

function Navigation() {
  return (
    <div>
      <nav className="hidden lg:flex flex-wrap items-center text-xs xl:text-sm uppercase text-gray-900">
        {[DATA[0], DATA[1], DATA[2]].map((item, index) => (
          <NavigationItem key={String(index)} item={item} index={index} />
        ))}
        <div className="px-2 xl:px-3">
          <Logo />
        </div>
        {[DATA[3], DATA[4], DATA[5]].map((item, index) => (
          <NavigationItem key={String(index)} item={item} index={index} />
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
