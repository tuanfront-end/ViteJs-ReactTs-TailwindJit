import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";
import Header from "components/Header/Header";
import img404 from "images/404.png";
import React from "react";

export default function Page404() {
  return (
    <div className="ttnc-Page404 bg-accents-900 text-gray-100  dark:bg-gray-800 relative">
      <img
        className="hidden md:block absolute z-0 right-10 xl:right-14 2xl:right-24 top-0 max-w-xs 2xl:max-w-md"
        src={img404}
        alt=""
      />
      <Header />

      <div className="py-20 lg:py-24 relative z-10">
        <div className="max-w-lg px-4 mx-auto flex flex-col text-center items-center justify-center">
          <h2 className="ttnc-404 mb-10">404</h2>
          <h3 className="text-gray-100 text-2xl mb-8 uppercase">
            Sorry! We Can't Find That Page!
          </h3>
          <span className="text-base block mb-14 font-LibreFranklin">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </span>
          <ButtonPrimary>back to home</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
