import MyLink from "components/MyLink/MyLink";
import React from "react";

export interface BlogCard4Props {
  title: string;
  img: string;
}

const BlogCard4: React.FC<BlogCard4Props> = ({ title, img }) => {
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
    <div className="ttnc-BlogCard4 text-gray-900 dark:text-gray-100">
      <div className="aspect-h-12 aspect-w-16 mb-6 md:mb-8">
        <img src={img} className="w-full h-full  object-cover" alt="" />
      </div>
      {_renderPostMeta()}
      <h2 className="mt-3 mb-4 text-2xl font-medium hover:text-secondary">
        <MyLink containerClassName="line-clamp-3" href="/blog-single">
          {title}
        </MyLink>
      </h2>
      <a
        href="#root"
        className="font-medium uppercase tracking-wider hover:text-secondary"
      >
        <span className="text-sm"> read more</span>
      </a>
    </div>
  );
};

export default BlogCard4;
