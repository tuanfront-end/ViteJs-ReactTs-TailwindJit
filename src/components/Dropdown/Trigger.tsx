import React from "react";
export interface TriggerProps {
  triggerClassName?: string;
  triggerText?: string;
}
const Trigger: React.FC<TriggerProps> = ({
  children,
  triggerClassName = "inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800",
  triggerText = "Options",
}) => {
  throw new Error("Trigger must be in Dropdown Parent");
};

export default Trigger;
