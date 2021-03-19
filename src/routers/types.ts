import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/home2"?: {};
  "/home3"?: {};
  "/shop"?: {};
  "/shop2"?: {};
  "/shop-search"?: {};
  "/shop-single"?: {};
  "/shop-single-2"?: {};
  "/about-us"?: {};
  "/contact"?: {};
  "/cart"?: {};
  "/checkout"?: {};
  "/the-blog"?: {};
  "/the-blog-search"?: {};
  "/the-blog-masonry"?: {};
  "/blog-single"?: {};
  "/page404"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType;
}
