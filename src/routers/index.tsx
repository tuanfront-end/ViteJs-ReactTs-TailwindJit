import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "containers/HomePage/HomePage";
import { Page } from "./types";
import Footer from "components/Footer/Footer";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import HomePage2 from "containers/HomePage2/HomePage2";
import HomePage3 from "containers/HomePage3/HomePage3";
import ShopPage from "containers/ShopPage/ShopPage";
import ShopPage2 from "containers/ShopPage/ShopPage2";
import ShopSinglePage from "containers/ShopSinglePage/ShopSinglePage";
import ShopSinglePage2 from "containers/ShopSinglePage/ShopSinglePage2";
import CartPage from "containers/CartPage/CartPage";
import CheckoutPage from "containers/CheckoutPage/CheckoutPage";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogMasonryPage from "containers/BlogMasonryPage/BlogMasonryPage";
import BlogSinglePage from "containers/BlogSinglePage/BlogSinglePage";
import AboutPage from "containers/AboutPage/AboutPage";
import ContactPage from "containers/ContactPage/ContactPage";
import Page404 from "containers/404Page/404Page";
import ShopSearchPage from "containers/ShopPage/ShopSearchPage";

export const pages: Page[] = [
  { path: "/", exact: true, component: HomePage },
  { path: "/home2", exact: true, component: HomePage2 },
  { path: "/home3", exact: true, component: HomePage3 },
  { path: "/shop", exact: true, component: ShopPage },
  { path: "/shop2", exact: true, component: ShopPage2 },
  { path: "/shop-search", exact: true, component: ShopSearchPage },
  { path: "/shop-single", exact: true, component: ShopSinglePage },
  { path: "/shop-single-2", exact: true, component: ShopSinglePage2 },
  { path: "/cart", exact: true, component: CartPage },
  { path: "/checkout", exact: true, component: CheckoutPage },
  { path: "/the-blog", exact: true, component: BlogPage },
  { path: "/the-blog-masonry", exact: true, component: BlogMasonryPage },
  { path: "/blog-single", exact: true, component: BlogSinglePage },
  { path: "/about-us", exact: true, component: AboutPage },
  { path: "/contact", exact: true, component: ContactPage },
  { path: "/page404", exact: true, component: Page404 },
];

const Routes = () => {
  return (
    <BrowserRouter>
      {/* === HEADER... === */}
      {/* <Header /> */}

      {/* === PAGE CONTENT... === */}
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={() => <h1>404</h1>} />
      </Switch>

      {/* === FOOTER... === */}
      <Footer />

      {/* === MODAL... === */}
      <div className="hidden md:block fixed bottom-10 md:bottom-16 right-5 z-50">
        <SwithNightMode />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
