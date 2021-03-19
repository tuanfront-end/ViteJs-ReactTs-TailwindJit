import Avatar from "components/Avatar/Avatar";
import Dropdown from "components/Dropdown/Dropdown";
import { _getPersonNameRd } from "contains/fakeData";
import React, { FC } from "react";

export interface CommentProps {}

const Comment: FC<CommentProps> = ({}) => {
  return (
    <div className="ttnc-Comment relative pb-8 border-b border-gray-300 dark:border-gray-700">
      <div className="flex space-x-8">
        <Avatar sizeClass="w-12 h-12 lg:w-20 lg:h-20" radius="rounded-none" />
        <div>
          <div className="flex items-center mb-3 font-medium leading-tight">
            <a
              className="block text-gray-900 dark:text-gray-100 mr-3"
              href="@@"
            >
              {_getPersonNameRd()}
            </a>
            <span className="block text-xs text-gray-600 dark:text-gray-300 uppercase font-normal underline border-gray-400">
              nov 22, 2021
            </span>
          </div>
          <div className="mb-3 text-sm font-LibreFranklin text-gray-700 dark:text-gray-300">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, id totam ipsa mollitia maiores repellendus, saepe eius
              modi deserunt unde culpa? Cupiditate, dolorem reiciendis minima
              ullam placeat fugiat neque sapiente?
            </span>
          </div>
          <a
            href="#root"
            className="text-xl text-gray-800 dark:text-gray-200 flex items-center font-medium uppercase"
          >
            <i className="las la-reply"></i>
            <span className="ml-2 leading-none tracking-wider text-sm">
              Reply
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
