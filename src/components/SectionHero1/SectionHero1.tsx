import React, { useState, useEffect } from "react";
import hero1 from "images/hero1.png";

import hero2 from "images/hero2.png";
import hero3 from "images/hero3.png";
import NextPrev from "components/NextPrev/NextPrev";
import ButtonSecondary from "components/ButtonSecondary/ButtonSecondary";
import Glide from "@glidejs/glide";
interface ItemType {
  title: string;
  titleThin: string;
  subTitle: string;
  img: string;
}
const SectionHero1 = () => {
  const DATA: ItemType[] = [
    {
      title: "Collection",
      titleThin: "Winter",
      subTitle: "Stylish shop",
      img: hero1,
    },

    {
      title: "Collection",
      titleThin: "The Trending ",
      subTitle: "Trendy shop",
      img: hero2,
    },
    {
      title: "Lookbook",
      titleThin: "Great 2021",
      subTitle: "Winter shop",
      img: hero3,
    },
  ];

  useEffect(() => {
    new Glide(".glide-fade").mount();
  }, []);
  const _renderItem = (item: ItemType, index: number) => {
    return (
      <li className="glide__slide" key={String(index)}>
        <div className="relative flex flex-col justify-center bg-accents-900 h-[500px] md:h-[600px] lg:h-[90vh] lg:min-h-[800px] xl:min-h-[860px]">
          <div className="block md:hidden absolute inset-0 bg-gray-900 bg-opacity-20 z-10 duration-100"></div>
          <img
            className="ttnc-hero1-bg block absolute inset-0 w-full h-full object-cover transform transition duration-1000 translate-x-20 ttnc-glide-active-reset z-0"
            src={item.img}
            alt="Stylish shop"
          />
          <div className="container relative pt-12 lg:pt-20 pb-32 z-20">
            <div className="w-full lg:w-2/4 xl:pr-10 text-white uppercase">
              <span className="text-sm xl:text-lg 2xl:text-1.5xl block font-LibreFranklin tracking-sub-title-540 font-light mb-4 lg:mb-9 transform transition duration-1000 translate-y-20 opacity-0 ttnc-glide-active-reset">
                {item.subTitle}
              </span>
              <h1
                className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-90px font-medium mb-6 sm:mb-8 lg:mb-14 transform transition duration-1000 translate-y-20 opacity-0 ttnc-glide-active-reset delay-100 leading-tight"
                style={{ lineHeight: 1.15 }}
              >
                <span className="font-thin">{item.titleThin}</span> <br />
                {item.title}
              </h1>
              <div className="ml-1 transform transition duration-1000 translate-y-20 opacity-0 ttnc-glide-active-reset delay-200">
                <ButtonSecondary url="/shop">Shop now</ButtonSecondary>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="relative pb-8 md:pb-14">
      <div className="glide-fade relative">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">{DATA.map(_renderItem)}</ul>
        </div>
        <div className="absolute bottom-16 2xl:bottom-20 left-0 w-full">
          <div className="container">
            <NextPrev />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero1;
