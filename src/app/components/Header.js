"use client";
import MusicSelector from "./MusicSelector";
import { useContext } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ThemeContext } from "../layout";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center px-6 py-2 bg-lightBackground dark:bg-darkBackground h-[6rem]">
      {theme === "dark" ? (
        <img
          className="ml-[1rem] h-[2rem]"
          src="dark_logo.png"
          alt="MusicLab"
        />
      ) : (
        <img
          className="ml-[1rem] h-[2rem]"
          src="light_logo.png"
          alt="MusibLab"
        />
      )}
      <div className="flex space-x-[.5rem]">
        <MusicSelector />

        {/* 언어 */}
        <div className="flex items-center button px-3 py-2  rounded-full cursor-pointer">
          <RiArrowDropDownLine className="text-[1.4rem]" />
          <span className="font-semibold">En</span>
        </div>

        {/* 다크모드 */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 button rounded-full cursor-pointer"
        >
          {theme === "light" ? (
            <MdWbSunny className="text-2xl" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </button>
      </div>
    </header>
  );
}
