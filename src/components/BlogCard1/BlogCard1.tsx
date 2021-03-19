import MyLink from "components/MyLink/MyLink";
import React from "react";

export interface BlogCard1Props {
  title: string;
  img: string;
}

const BlogCard1: React.FC<BlogCard1Props> = ({ title, img }) => {
  const _renderPostMeta = () => {
    return (
      <div className="flex flex-wrap items-center text-xs tracking-wider text-gray-600 dark:text-gray-300 uppercase font-medium space-x-3">
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
    <div className="ttnc-BlogCard1 text-gray-900 dark:text-gray-100">
      <div className="aspect-w-16 aspect-h-12 md:aspect-h-9 mb-5 md:mb-8">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>
      {_renderPostMeta()}
      <h2 className=" mt-5 md:mt-7 mb-5 text-2xl md:text-3xl xl:text-4xl hover:text-secondary">
        <MyLink containerClassName="line-clamp-3" href="/blog-single">
          {title}
        </MyLink>
      </h2>
      <span className="hidden md:block mb-7 text-base font-LibreFranklin text-gray-700 dark:text-gray-300">
        Hardly able to cover it and seemed ready to slide off any moment. His
        many legs, pitifully thin compared with the size of the rest of him,
        waved about helplessly as he looked out the entire.
      </span>
      <a
        href="#root"
        className="flex items-center font-medium text-2xl uppercase tracking-wider hover:text-secondary"
      >
        <span className="mr-2 text-sm"> read more</span>
        <i className=" las la-long-arrow-alt-right"></i>
      </a>
    </div>
  );
};

export default BlogCard1;
