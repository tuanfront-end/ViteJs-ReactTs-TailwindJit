import React from "react";
import pDeal from "images/pDeal.png";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";
import ButtonPrimary from "components/ButtonPrimary/ButtonPrimary";

const SectionDeal = () => {
  const _renderDateCountDown = (
    className = "ttnc-countDownDateTime__days",
    text = "days"
  ) => {
    return (
      <span className="flex flex-col items-center justify-center w-20 h-20 border border-black dark:border-gray-200">
        <span className={`${className} text-lg md:text-xl 2xl:text-2xl`}>
          20
        </span>
        <span className="text-xs uppercase tracking-widest">{text}</span>
      </span>
    );
  };

  return (
    <div className="ttnc-SectionDeal py-8 md:py-14 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-8">
          <div className="col-start-1 md:col-span-5">
            <Heading>
              DEAL <br /> of the day
            </Heading>
            <div className="border-b-2 border-black dark:border-gray-200 w-5/12 mt-3 h-0"></div>
            <div className="mt-12">
              <h2 className="text-lg md:text-xl 2xl:text-3xl mb-4">
                Sneakers Skate Shoe Nike
              </h2>
              <span className="block text-lg md:text-xl 2xl:text-2xl mb-8">
                $255
                <span className="line-through px-6 text-gray-400 relative">
                  $355
                  <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 2xl:w-20 border border-gray-400"></span>
                </span>
              </span>
              <span className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-12 block">
                Ahowed a lady fitted out with a fur hat and fur boa who sat
                upright raising a heavy fur muff that covered the wholeShowed a
                lady fitted out with a fur hat and fur boa who sat upright
                raising a heavy fur muff
              </span>
              <div id="ttnc-countDownDateTime" className="mb-10 flex space-x-3">
                {_renderDateCountDown()}
                {_renderDateCountDown("ttnc-countDownDateTime__hours", "hours")}
                {_renderDateCountDown("ttnc-countDownDateTime__mins", "mins")}
                {_renderDateCountDown("ttnc-countDownDateTime__secs", "secs")}
              </div>
              <ButtonPrimary url="/shop">Shop now</ButtonPrimary>
            </div>
          </div>
          <div className="md:col-end-13 md:col-span-7 flex items-center justify-center">
            <img className="w-full h-auto object-cover" src={pDeal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDeal;
