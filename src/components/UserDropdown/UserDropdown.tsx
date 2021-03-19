import Dropdown from "components/Dropdown/Dropdown";
import React from "react";

const UserDropdown = () => {
  const _renderUserDropdown = () => {
    return (
      <div className="py-1 w-48 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-100">
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
    <Dropdown popperPlacement="bottom-start">
      <Dropdown.Trigger>
        <div className="py-1 px-2.5 text-opacity-95 hover:text-opacity-100">
          <i className="las la-user-circle"></i>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Panel>{_renderUserDropdown()}</Dropdown.Panel>
    </Dropdown>
  );
};

export default UserDropdown;
