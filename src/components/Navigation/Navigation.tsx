import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import Logo from "components/Logo/Logo";
import React from "react";
import { LocationStates } from "routers/types";
import NavigationItem from "./NavigationItem";

export interface NavItemType {
  id: number;
  name: string;
  link: keyof LocationStates | "#";
  children?: NavItemType[];
  isActive?: boolean;
  isMegamenu?: boolean;
}
export const NAV_DATABASE: NavItemType[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    // isActive: true,
    children: [
      { id: 3, name: "Home 1", link: "/" },
      { id: 2, name: "Home 2", link: "/home2" },
      { id: 4, name: "Home 3", link: "/home3" },
    ],
  },
  {
    id: 16,
    name: "Shop",
    link: "/shop",
    children: [
      { id: 1, name: "Shop Style 1", link: "/shop" },
      { id: 16, name: "Shop Style 2", link: "/shop2" },
      { id: 2, name: "Shop Search", link: "/shop-search" },
      { id: 18, name: "Single Vertical", link: "/shop-single" },
      { id: 20, name: "Single Horizontal", link: "/shop-single-2" },
      { id: 17, name: "Cart", link: "/cart" },
      { id: 19, name: "Checkout", link: "/checkout" },
    ],
  },
  { id: 11, name: "About", link: "/about-us" },
  { id: 211, name: "Megamenu", link: "/", isMegamenu: true },
  {
    id: 21,
    name: "Blog",
    link: "/the-blog",
    children: [
      { id: 22, name: "Blog", link: "/the-blog" },
      { id: 222, name: "Blog Masonry", link: "/the-blog-masonry" },
      { id: 23, name: "Blog Single", link: "/blog-single" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    link: "/",
    children: [
      { id: 10, name: "Contact", link: "/contact" },
      { id: 9, name: "About Us", link: "/about-us" },
      { id: 7, name: "404 Page", link: "/page404" },
      {
        id: 8,
        name: "Shop",
        link: "/shop2",
        children: [
          { id: 1, name: "Shop ", link: "/shop" },
          { id: 16, name: "Shop 2", link: "/shop2" },
          { id: 18, name: "Shop Single", link: "/shop-single" },
          { id: 17, name: "Cart", link: "/cart" },
          { id: 19, name: "Checkout", link: "/checkout" },
        ],
      },
    ],
  },
];
const DATA: NavItemType[] = NAV_DATABASE;

function Navigation() {
  return (
    <div>
      <nav className="hidden lg:flex flex-wrap items-center text-xs xl:text-sm uppercase ">
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
