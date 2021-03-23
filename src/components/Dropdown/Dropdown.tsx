import { Menu, Transition } from "@headlessui/react";
import React, { FC, Children } from "react";
import Panel, { PanelProps } from "./Panel";
import Trigger, { TriggerProps } from "./Trigger";

interface TriggerStatic {
  Trigger: typeof Trigger;
}
interface PanelStatic {
  Panel: typeof Panel;
}

export interface DropdownProps {
  containerClassName?: string;
  triggerText?: string;
  onChange?: () => void;
  panelClass?: string;
  triggerClass?: string;
}

const Dropdown: FC<DropdownProps> & TriggerStatic & PanelStatic = ({
  children,
  onChange = () => {},
  containerClassName = "",
}) => {
  const renderTrigger = (
    triggerProps: React.PropsWithChildren<TriggerProps>
  ) => {
    return (
      <div>
        <Menu.Button
          className={
            triggerProps.triggerClassName ||
            "inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          }
        >
          {triggerProps.children || (
            <React.Fragment>
              <span>{triggerProps.triggerText || `Options`}</span>
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </React.Fragment>
          )}
        </Menu.Button>
      </div>
    );
  };

  const renderPanel = (
    panelProps: React.PropsWithChildren<PanelProps>,
    open: boolean
  ) => {
    return (
      <Transition
        show={open}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className={
          panelProps.panelClassName ||
          "absolute left-0 origin-top-left w-56 mt-2 top-full bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
        }
      >
        <Menu.Items static>
          {panelProps.children || (
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#account-settings"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#support"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item
                as="span"
                disabled
                className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
              >
                New feature (soon)
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#license"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    );
  };

  const renderChildren = (
    child:
      | string
      | number
      | boolean
      | {}
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactNodeArray
      | React.ReactPortal
      | null
      | undefined,
    open: boolean
  ) => {
    if (
      !child ||
      typeof child === "number" ||
      typeof child === "string" ||
      !(child as any).type
    ) {
      return "The Children must Dropdown.Trigger or Dropdown.Panel";
    }
    const { type, props } = child as React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    >;
    if (type === Panel) {
      return renderPanel(props, open);
    }
    if (type === Trigger) {
      return renderTrigger(props);
    }
    return "The Children must Dropdown.Trigger or Dropdown.Panel";
  };

  return (
    <div className={`ttnc-dropdown relative inline-flex ${containerClassName}`}>
      <Menu>
        {({ open }) =>
          Children.map(children, (child) => {
            return renderChildren(child, open);
          })
        }
      </Menu>
    </div>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Panel = Panel;

export default Dropdown;
