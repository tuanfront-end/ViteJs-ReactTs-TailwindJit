import MyLink from "components/MyLink/MyLink";
import React from "react";
import { Link } from "react-router-dom";
import blogQuoteBG from "images/blogQuoteBG.png";

export interface BlogCardQuoteProps {}

const BlogCardQuote: React.FC<BlogCardQuoteProps> = ({}) => {
  const _renderPostMeta = () => {
    return (
      <div className="flex flex-wrap items-center text-xs tracking-wider text-gray-600 dark:text-gray-300 uppercase font-medium space-x-3 relative">
        {/* <img className="absolute inset-0 z-0" src={blogQuoteBG} alt=""/> */}
        <span>27 nov 2021</span>
        <span className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-400 flex-shrink-0"></span>
        <div className="border-b border-gray-400 space-x-1">
          <a className="" href="#root">
            fashion,
          </a>
          <a href="#root" className="">
            Tren
          </a>
        </div>
      </div>
    );
  };
  return (
    <div
      className="ttnc-BlogCardQuote text-gray-900 dark:text-gray-100 p-8 md:px-10 md:py-12 border border-gray-300 bg-no-repeat"
      style={{
        backgroundImage: `url(${blogQuoteBG})`,
        backgroundPosition: "70% 50%",
      }}
    >
      {_renderPostMeta()}
      <h2 className="mt-5  text-2xl  hover:text-secondary">
        <MyLink href="/blog-single">
          Clothing stores and looking for clothing store slogans that could
          perfectly describe your outfits to customers then
        </MyLink>
      </h2>
    </div>
  );
};

export default BlogCardQuote;
