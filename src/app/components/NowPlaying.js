"use client";
import React, { useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="h-[18rem] w-[12rem] mb-[1rem]">
      <h2 className="text-[1.1rem] font-semibold mb-[1rem]">Now Playing...</h2>
      <div className="mb-[1rem] flex items-center justify-between">
        <div>
          <h3 className="text-[1rem] font-semibold">Title</h3>
          <p className="text-[1rem] font-light">Artist</p>
        </div>
        <div onClick={togglePlay} className="cursor-pointer">
          {isPlaying ? (
            <IoIosPlay className="text-[1.2rem]" />
          ) : (
            <IoIosPause className="text-[1.2rem]" />
          )}
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/300x300"
          alt="What’s Playing"
          className="w-[11rem] h-[11rem] background rounded-sm"
        />
      </div>
    </div>
  );
}