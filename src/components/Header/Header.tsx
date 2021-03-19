import Logo from "components/Logo/Logo";
import MenuBar from "components/MenuBar/MenuBar";
import Navigation from "components/Navigation/Navigation";
import SearchInput from "components/SearchInput/SearchInput";
import React from "react";
import MiniCartDropdown from "./MiniCartDropdown";
import UserDropdown from "./UserDropdown";

export default function Header() {
  return (
    <div className="ttnc-Header bg-accents-900 dark:bg-gray-900 border-b border-accents-800 dark:border-gray-800 px-4 md:px-10 2xl:px-16 py-6 lg:py-0 relative">
      <div className="relative flex justify-between items-center space-x-4 lg:space-x-8">
        <div className="flex justify-start items-center flex-shrink-0 lg:w-0 lg:flex-1 space-x-4 xl:space-x-6">
          <MenuBar />
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>
        <div className="text-white">
          <Navigation />
          <span className="block lg:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Logo />
          </span>
        </div>
        <div className="lg:w-0 lg:flex-1 flex-shrink-0 flex items-center justify-end text-white text-2xl">
          <UserDropdown />
          <MiniCartDropdown />
        </div>
      </div>
    </div>
  );
}
