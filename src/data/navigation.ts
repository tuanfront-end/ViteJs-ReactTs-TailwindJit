import { v4 as uuidv4 } from "uuid";

import { LocationStates } from "routers/types";

export interface NavItemType {
  id: string;
  name: string;
  link: keyof LocationStates | "#";
  children?: NavItemType[];
  isActive?: boolean;
  isMegamenu?: boolean;
}
export const NAVDATABASE: NavItemType[] = [
  {
    id: uuidv4(),
    name: "Home",
    link: "/",
    children: [
      { id: uuidv4(), name: "Home 1", link: "/" },
      { id: uuidv4(), name: "Home 2", link: "/home2" },
      { id: uuidv4(), name: "Home 3", link: "/home3" },
    ],
  },
  {
    id: uuidv4(),
    name: "Shop",
    link: "/shop",
    children: [
      { id: uuidv4(), name: "Shop Style 1", link: "/shop" },
      { id: uuidv4(), name: "Shop Style 2", link: "/shop2" },
      { id: uuidv4(), name: "Shop Search", link: "/shop-search" },
      { id: uuidv4(), name: "Single Vertical", link: "/shop-single" },
      { id: uuidv4(), name: "Single Horizontal", link: "/shop-single-2" },
      { id: uuidv4(), name: "Cart", link: "/cart" },
      { id: uuidv4(), name: "Checkout", link: "/checkout" },
    ],
  },
  { id: uuidv4(), name: "About", link: "/about-us" },
  { id: uuidv4(), name: "Megamenu", link: "/", isMegamenu: true },
  {
    id: uuidv4(),
    name: "Blog",
    link: "/the-blog",
    children: [
      { id: uuidv4(), name: "Blog", link: "/the-blog" },
      { id: uuidv4(), name: "Blog Masonry", link: "/the-blog-masonry" },
      { id: uuidv4(), name: "Blog Single", link: "/blog-single" },
    ],
  },
  {
    id: uuidv4(),
    name: "Pages",
    link: "/",
    children: [
      { id: uuidv4(), name: "Contact", link: "/contact" },
      { id: uuidv4(), name: "About Us", link: "/about-us" },
      { id: uuidv4(), name: "404 Page", link: "/page404" },
      {
        id: uuidv4(),
        name: "Shop",
        link: "/shop2",
        children: [
          { id: uuidv4(), name: "Shop ", link: "/shop" },
          { id: uuidv4(), name: "Shop 2", link: "/shop2" },
          { id: uuidv4(), name: "Shop Single", link: "/shop-single" },
          { id: uuidv4(), name: "Cart", link: "/cart" },
          { id: uuidv4(), name: "Checkout", link: "/checkout" },
        ],
      },
    ],
  },
];

export const MEGAMENU = [
  {
    title: "Clothing",
    items: [
      "Blouses",
      "Dresses",
      "Footwear",
      "Hats",
      "Hoodies",
      "T-shirts",
      "Trousers",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Blenders",
      "Colanders",
      "Kettles",
      "Knives",
      "Pots & Pans",
      "T-shirts",
      "Toasters",
    ],
  },
  {
    title: "Electronics",
    items: [
      "Cameras",
      "DVD Players",
      "Headphones",
      "MP3 Players",
      "Radios  ",
      "Televisions",
      "Trousers",
    ],
  },
  {
    title: "Music",
    items: [
      "Albums",
      "Singles",
      "MP3",
      "Posters",
      "Radios  ",
      "Hoodies",
      "Dresses",
    ],
  },
];
