import React from "react";
import NavMobile from "components/Navigation/NavMobile";

export interface MenuBarProps {
  containerClassName?: string;
  itemClass?: string;
}
const MenuBar: React.FC<MenuBarProps> = ({
  containerClassName = "py-1 px-2",
  itemClass = "border-white",
}) => {
  return (
    <div>
      <button
        className={`flex flex-col items-end space-y-2 ${containerClassName}`}
      >
        <div className={`w-6 border-b ${itemClass}`}></div>
        <div className={`w-6 border-b ${itemClass}`}></div>
        <div className={`w-9 border-b ${itemClass}`}></div>
      </button>

      <div
        className="hidden fixed left-0 top-0 bottom-0 z-max outline-none focus:outline-none transition ease-out duration-200 transform -translate-x-full"
        data-ttnc-modal-toggle-class-in-from="-translate-x-full"
        data-ttnc-modal-toggle-class-in-to="opacity-100 translate-x-0"
      >
        <NavMobile />
      </div>
      <div className="hidden opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default MenuBar;
