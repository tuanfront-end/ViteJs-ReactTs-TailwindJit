import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import Footer from "components/Footer/Footer";
import SwithNightMode from "components/SwithNightMode/SwithNightMode";
import Page404 from "containers/404Page/404Page";
import Header from "components/Header/Header";
import StyleGuildePage from "containers/StyleGuildePage/StyleGuildePage";

export const pages: Page[] = [
  { path: "/", exact: true, component: StyleGuildePage },
  { path: "/page404", exact: true, component: Page404 },
];

const Routes = () => {
  return (
    <BrowserRouter>
      {/* === HEADER... === */}
      <Header />

      {/* === PAGE CONTENT... === */}
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={Page404} />
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
