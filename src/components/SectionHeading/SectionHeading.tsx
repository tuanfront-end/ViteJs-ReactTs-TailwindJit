import Heading from "components/Heading/Heading";
import MyLink from "components/MyLink/MyLink";
import NextPrev from "components/NextPrev/NextPrev";
import React from "react";

const SectionHeading = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-7 space-y-3 md:space-y-0 md:space-x-4 text-gray-900 dark:text-white">
      <Heading>TRENDS</Heading>
      <div className="flex-shrink-0 space-x-8 flex items-center justify-between md:justify-end">
        <MyLink>More Product</MyLink>
        <NextPrev
          btnClass="bg-white hover:bg-gray-900 rounded-none border border-gray-900 text-gray-900 hover:text-white"
          containerClassName="-space-x-px"
        />
      </div>
    </div>
  );
};

export default SectionHeading;
