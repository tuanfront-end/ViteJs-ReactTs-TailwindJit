import MyLink from "components/MyLink/MyLink";
import React from "react";

export interface BlogCard2Props {
  title: string;
  img: string;
}

const BlogCard2: React.FC<BlogCard2Props> = ({ title, img }) => {
  return (
    <MyLink
      href="/blog-single"
      containerClassName="flex items-center pb-4 border-b border-gray-300 dark:border-gray-600 group"
    >
      <img src={img} className="w-16 h-16 object-cover " alt="" />
      <div className="ml-4 font-medium font-LibreFranklin">
        <h2 className="text-sm mb-2 text-gray-900 dark:text-gray-100 group-hover:text-secondary line-clamp-2">
          {title}
        </h2>
        <span className="text-xs text-gray-500 dark:text-gray-400 underline">
          27 Nov 2021
        </span>
      </div>
    </MyLink>
  );
};

export default BlogCard2;
