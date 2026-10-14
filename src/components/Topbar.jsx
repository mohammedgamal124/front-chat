import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="hidden h-[64px] w-full items-center justify-between border-b border-gray-300 bg-white px-6 md:flex">
      <div>
        <h3 className="text-xl font-semibold">Chat flow</h3>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-lg bg-gray-200 px-2 py-1">
          <FiSearch className="mr-2 text-lg text-gray-500" />
          <input
            type="text"
            placeholder="Search messages, people..."
            className="w-45 border-none bg-transparent text-sm outline-none"
          />
        </div>
        <button className="relative rounded-full p-2 hover:bg-gray-100" type="button">
          <IoNotificationsOutline className="text-2xl text-gray-700" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100" type="button">
          <FiHelpCircle className="text-2xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;