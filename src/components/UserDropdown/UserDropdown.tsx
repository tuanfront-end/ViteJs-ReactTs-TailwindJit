import Dropdown from "components/Dropdown/Dropdown";
import React from "react";

const UserDropdown = () => {
  const _renderUserDropdown = () => {
    return (
      <div className="py-1 w-full bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-100">
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="las la-user mr-2"></i>
          Your Profile
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="las la-cog mr-2"></i>
          Settings
        </a>
        <a
          href="#root"
          className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="las la-sign-out-alt mr-2"></i>
          Sign out
        </a>
      </div>
    );
  };

  return (
    <Dropdown>
      <Dropdown.Trigger triggerClassName="py-1 px-2.5 text-opacity-95 hover:text-opacity-100">
        <i className="las la-user-circle"></i>
      </Dropdown.Trigger>
      <Dropdown.Panel panelClassName="absolute right-0 origin-top-left w-52 mt-2 top-full bg-teal-500 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        {_renderUserDropdown()}
      </Dropdown.Panel>
    </Dropdown>
  );
};

export default UserDropdown;
