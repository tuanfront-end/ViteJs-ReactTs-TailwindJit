import { NavItemType } from "./types";
import { nanoid as uuidv4 } from "@reduxjs/toolkit";

export const MEGAMENU: NavItemType["megaMenu"] = {
  menuCols: [
    {
      title: "Clothing",
      items: [
        { id: uuidv4(), name: "Blouses", link: "ttnc.com", targetBlank: true },
        { id: uuidv4(), name: "Dresses", link: "ttnc.com", targetBlank: true },
        { id: uuidv4(), name: "Footwear", link: "ttnc.com", targetBlank: true },
        { id: uuidv4(), name: "Hats", link: "ttnc.com", targetBlank: true },
        { id: uuidv4(), name: "Hoodies", link: "ttnc.com", targetBlank: true },
        { id: uuidv4(), name: "T-shirts", link: "ttnc.com", targetBlank: true },
        { id: uuidv4(), name: "Trousers", link: "ttnc.com", targetBlank: true },
      ],
    },
    {
      title: "Kitchen",
      items: [
        { id: uuidv4(), name: "Blenders", link: "/" },
        { id: uuidv4(), name: "Colanders", link: "/" },
        { id: uuidv4(), name: "Kettles", link: "/" },
        { id: uuidv4(), name: "Knives", link: "/" },
        { id: uuidv4(), name: "Pots & Pans", link: "/" },
        { id: uuidv4(), name: "T-shirts", link: "/" },
        { id: uuidv4(), name: "Toasters", link: "/" },
      ],
    },
    {
      title: "Electronics",
      items: [
        { id: uuidv4(), name: "Cameras", link: "/" },
        { id: uuidv4(), name: "DVD Players", link: "/" },
        { id: uuidv4(), name: "Headphones", link: "/" },
        { id: uuidv4(), name: "MP3 Players", link: "/" },
        { id: uuidv4(), name: "Radios", link: "/" },
        { id: uuidv4(), name: "Televisions", link: "/" },
        { id: uuidv4(), name: "Toasters", link: "/" },
      ],
    },
    {
      title: "Music",
      items: [
        { id: uuidv4(), name: "Albums", link: "/" },
        { id: uuidv4(), name: "DVD Players", link: "/" },
        { id: uuidv4(), name: "Singles", link: "/" },
        { id: uuidv4(), name: "MP3 Players", link: "/" },
        { id: uuidv4(), name: "Radios", link: "/" },
        { id: uuidv4(), name: "Posters", link: "/" },
        { id: uuidv4(), name: "Toasters", link: "/" },
      ],
    },
  ],
  lastCol: {
    title: "Mega Menus Extension",
    text:
      "If you would like to display a full width menu like you see here this can be achieved by using our Mega Menus extension for Storefront.",
    button: {
      id: uuidv4(),
      name: "Shop now",
      link: "abc.com",
      targetBlank: true,
    },
  },
};

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
  {
    id: uuidv4(),
    name: "Megamenu",
    link: "/",
    isMegamenu: true,
    megaMenu: MEGAMENU,
  },
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
