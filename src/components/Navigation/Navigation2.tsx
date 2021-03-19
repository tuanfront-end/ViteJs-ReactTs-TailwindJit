import React from "react";
import { NavItemType, NAV_DATABASE } from "./Navigation";
import NavigationItem from "./NavigationItem";

const DATA: NavItemType[] = NAV_DATABASE;

function Navigation2() {
  return (
    <nav className="hidden lg:flex flex-wrap items-center text-xs xl:text-sm uppercase">
      {DATA.map((item, index) => (
        <NavigationItem item={item} index={index} />
      ))}
    </nav>
  );
}

export default Navigation2;
