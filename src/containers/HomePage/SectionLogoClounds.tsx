import React from "react";
import logoC1 from "images/logoC1.png";
import logoC2 from "images/logoC2.png";
import logoC3 from "images/logoC3.png";
import logoC4 from "images/logoC4.png";
import logoC5 from "images/logoC5.png";

const SectionLogoClounds = () => {
  const _renderItem = (img: string, index: number) => {
    return (
      <div
        key={String(index)}
        className="py-14 px-8 flex items-center justify-center"
      >
        <img src={img} alt="" />
      </div>
    );
  };

  return (
    <div className="ttnc-SectionLogoClounds py-8 md:py-14 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 md:divide-x divide-y md:divide-y-0 divide-gray-300 dark:divide-gray-600 border border-gray-300 dark:border-gray-600 dark:bg-gray-500">
          {[logoC1, logoC2, logoC3, logoC4, logoC5].map(_renderItem)}
        </div>
      </div>
    </div>
  );
};

export default SectionLogoClounds;
