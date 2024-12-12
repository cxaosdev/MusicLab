"use client";
import { useState } from "react";
import { FaApple, FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export default function MusicSelector() {
  const [selected, setSelected] = useState("YouTube Music");
  console.log(selected);
  return (
    <nav className="flex items-center m-[.2rem] px-[.4rem] py-[.3rem] justify-center bg-lightButton dark:bg-darkButton rounded-full">
      <button
        onClick={() => setSelected("YouTube Music")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer text-[.75rem] transition-all duration-300 ease-in-out transform ${
          selected === "YouTube Music"
            ? "bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText "
            : "bg-transparent text-lightText dark:text-darkText "
        }`}
      >
        <SiYoutubemusic className="text-red-600 text-[1rem] bg-lightBackground rounded-full" />
        YouTube Music
      </button>
      <button
        onClick={() => setSelected("Apple Music")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer text-[.75rem] transition-all duration-300 ease-in-out transform ${
          selected === "Apple Music"
            ? "bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText "
            : "bg-transparent text-lightText dark:text-darkText "
        }`}
      >
        <FaApple className="text-lg dark:text-darkText text-lightText" />
        Apple Music
      </button>
      <button
        onClick={() => setSelected("Spotify")}
        className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer text-[.75rem] transition-all duration-300 ease-in-out transform ${
          selected === "Spotify"
            ? "bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText "
            : "bg-transparent text-lightText dark:text-darkText "
        }`}
      >
        <FaSpotify className="text-green-500 text-[1rem]" />
        Spotify
      </button>
    </nav>
  );
}
