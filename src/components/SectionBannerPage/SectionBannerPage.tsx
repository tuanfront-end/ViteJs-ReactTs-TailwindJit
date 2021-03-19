import React from "react";

export interface SectionBannerPageProps {
  pageName?: string;
}
const SectionBannerPage: React.FC<SectionBannerPageProps> = ({
  children,
  pageName = "Shop",
}) => {
  return (
    <div className="ttnc-SectionBannerPage bg-accents-900 dark:bg-gray-900 py-20 lg:py-28 2xl:py-32 text-white text-center">
      <div className="container">
        <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-5 uppercase">
          {pageName}
        </h2>
        <div className="flex items-center justify-center space-x-4 text-lg">
          <i className="las la-home"></i>
          <i className="las la-long-arrow-alt-right"></i>
          <h3 className="text-base">{pageName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionBannerPage;
