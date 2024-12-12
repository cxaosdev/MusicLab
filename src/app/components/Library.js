import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";

export default function Library() {
  return (
    <div className="h-[2.3rem] px-[1rem] w-[12rem] flex items-center rounded-[0.5rem] button">
      <div className="flex items-center text-[1rem] space-x-[.7rem] ">
        <MdOutlinePlaylistPlay className="text-[1.2rem]"></MdOutlinePlaylistPlay>
        <p>Library</p>
      </div>
    </div>
  );
}
