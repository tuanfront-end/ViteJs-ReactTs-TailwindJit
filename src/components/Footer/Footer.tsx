import React from "react";
import FooterWidgetNav from "components/FooterWidgetNav/FooterWidgetNav";
import Logo from "components/Logo/Logo";
import Button from "components/Button/Button";
import logoFooter from "images/logoFooter.png";
import payment from "images/payment.png";

export default function Footer() {
  const _renderListSocial = () => {
    const socials = [
      "las la-envelope",
      "lab la-facebook-f",
      "lab la-youtube",
      "lab la-instagram",
      "lab la-twitter",
    ];
    return (
      <ul className="flex items-center justify-start flex-wrap space-x-3">
        {socials.map((item, index) => (
          <li key={String(index)}>
            <a
              className="p-2px text-f5 text-gray-600 dark:text-gray-500 hover:text-primary"
              href="#root"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={item}></i>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="ttnc-footer bg-gray-800 text-white">
      <div className="container">
        <div className="py-14 lg:py-20 text-center">
          <h2 className="text-lg uppercase mb-3">join our list</h2>
          <span className="block text-sm text-gray-300 mb-10">
            Get timely updates from your favorite products
          </span>
          <div className="flex justify-center">
            <input
              type="text"
              name="ttnc-footer-email"
              placeholder="Email address"
              className="w-11/12 md:w-5/12 bg-transparent border border-gray-700"
            />

            <Button containerClassName="text-white bg-gray-700 border border-gray-700 uppercase">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="py-14 border-t border-gray-700 text-gray-400">
          <div className="grid grid-cols-1 sm:grid-cols-6 gap-8 2xl:gap-14">
            <div className="col-span-3 lg:col-span-2 grid grid-cols-1 md:grid-cols-7 gap-8 2xl:gap-14">
              <div className="col-span-4">
                <FooterWidgetNav />
              </div>
              <div className="col-span-3">
                <FooterWidgetNav dataIndex={1} />
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center col-span-2 border-l border-r border-gray-700 px-8">
              <Logo img={logoFooter} />
              <span className="mt-7 text-center font-LibreFranklin text-sm">
                Showed a lady fitted out with a fur hat and fur boa who sat
                upright, raising
              </span>
            </div>
            <div className="col-span-3 lg:col-span-2 grid grid-cols-1 md:grid-cols-7 gap-8 2xl:gap-14">
              <div className="col-span-4">
                <FooterWidgetNav dataIndex={2} />
              </div>
              <div className="col-span-3">
                <FooterWidgetNav dataIndex={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 border-t border-gray-700 text-gray-400">
        <div className="container flex-col md:flex-row flex items-center justify-between space-y-4 md:space-y-0">
          <span className="text-sm font-LibreFranklin">
            Copyright © zango clothing shop. All Rights Reserved
          </span>
          <img src={payment} alt="" />
        </div>
      </div>
    </footer>
  );
}
