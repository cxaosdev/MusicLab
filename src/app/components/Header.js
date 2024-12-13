"use client";
import LanguageSelector from "./HeaderComponents/LanguageSelector";
import MusicSelector from "./HeaderComponents/MusicSelector";
import { useContext } from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { ThemeContext } from "../layout";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center px-[1rem] py-[1rem] bg-lightBackground dark:bg-darkBackground h-[6rem]">
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
        <LanguageSelector />

        {/* 다크모드 */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center px-3 py-2 button rounded-full cursor-pointer"
        >
          {theme === "light" ? (
            <MdWbSunny className="text-[1.4rem]" />
          ) : (
            <MdDarkMode className="text-[1.4rem]" />
          )}
        </button>
        <button className="flex items-center justify-center px-3 py-2 button rounded-full cursor-pointer">
          {theme === "light" ? (
            <MdAccountCircle className="text-[1.8rem]" />
          ) : (
            <MdAccountCircle className="text-[1.8rem]" />
          )}
        </button>
      </div>
    </header>
  );
}
