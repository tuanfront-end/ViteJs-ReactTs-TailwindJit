import MyLink from "components/MyLink/MyLink";
import React from "react";

export interface BlogCard3Props {
  title: string;
  img: string;
}

const BlogCard3: React.FC<BlogCard3Props> = ({ title, img }) => {
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
    <div className="ttnc-BlogCard3 text-gray-900 dark:text-gray-100">
      <img src={img} className="w-full mb-6 md:mb-8 object-cover" alt="" />
      {_renderPostMeta()}
      <h2 className="mt-3 mb-4 text-2xl font-medium hover:text-secondary">
        <MyLink containerClassName="line-clamp-3" href="/blog-single">
          {title}
        </MyLink>
      </h2>
      <div className="hidden md:block mb-4">
        <span className="text-base font-LibreFranklin text-gray-700 dark:text-gray-300 line-clamp-2">
          Hardly able to cover it and seemed ready to slide off any moment. His
          many legs, pitifully thin compared with the size of the rest of him,
          waved about helplessly as he looked out the entire.
        </span>
      </div>
      <a
        href="#root"
        className="font-medium uppercase tracking-wider hover:text-secondary"
      >
        <span className="text-sm"> read more</span>
      </a>
    </div>
  );
};

export default BlogCard3;
