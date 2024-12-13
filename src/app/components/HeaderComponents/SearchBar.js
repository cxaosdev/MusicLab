import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center button px-3 py-2 rounded-full cursor-pointer">
      <FaSearch className="text-lightText dark:text-darkText text-lg" />
      <input
        className="bg-transparent border-none outline-none text-white dark:text-darkText ml-2"
        placeholder="Search"
      />
    </div>
  );
}
