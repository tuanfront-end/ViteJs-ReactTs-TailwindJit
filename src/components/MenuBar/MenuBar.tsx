import React, { ReactNode, useState } from "react";
import { Transition } from "@headlessui/react";
import ReactDOM from "react-dom";
import NavMobile from "components/Navigation/NavMobile";

export interface MenuBarProps {
  renderButtonBar?: ReactNode;
}
const MenuBar: React.FC<MenuBarProps> = ({ renderButtonBar }) => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <div className="fixed left-0 top-0 bottom-0 z-max outline-none focus:outline-none">
        <Transition
          show={isVisable}
          enter="transition duration-100 transform"
          enterFrom="opacity-0 -translate-x-14"
          enterTo="opacity-100 translate-x-0"
          leave="transition duration-150 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-14"
        >
          <React.Fragment>
            <div className="z-10 relative">
              <NavMobile onClickClose={handleCloseMenu} />
            </div>
            <div
              onClick={handleCloseMenu}
              className="opacity-40 fixed inset-0 z-0 bg-black"
            ></div>
          </React.Fragment>
        </Transition>
      </div>
    );
  };

  return (
    <div>
      {/* <--- button open content ---> */}
      <div onClick={handleOpenMenu}>
        {renderButtonBar || (
          <button className="flex flex-col items-end space-y-2 py-1 px-2">
            <div className="w-6 border-b border-white"></div>
            <div className="w-6 border-b border-white"></div>
            <div className="w-9 border-b border-white"></div>
          </button>
        )}
      </div>

      {/* <--- Portals content ---> */}
      {/* {!isVisable
        ? ""
        : ReactDOM.createPortal(
            renderContent(),
            document.getElementById("modal-root") as HTMLDivElement
          )} */}
      {ReactDOM.createPortal(
        renderContent(),
        document.getElementById("modal-root") as HTMLDivElement
      )}
    </div>
  );
};

export default MenuBar;
