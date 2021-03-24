import { LocationStates } from "routers/types";

// <--- ProductType --->
export interface ProductType {
  id: string;
  img: string;
  gallery?: string[];
  name: string;
  price: string;
  oldPrice?: string;
  saleUp?: string;
}

// <--- NavItemType --->
export interface NavItemType {
  id: string;
  name: string;
  link: keyof LocationStates | string;
  targetBlank?: boolean;
  children?: NavItemType[];
  isActive?: boolean;
  isMegamenu?: boolean;
  megaMenu?: {
    menuCols: {
      title: string;
      items: NavItemType[];
    }[];
    lastCol: {
      title: string;
      text: string;
      button: {
        id: string;
        name: string;
        link: keyof LocationStates | string;
        targetBlank?: boolean;
      };
    };
  };
}
