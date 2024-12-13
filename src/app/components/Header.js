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
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[1rem]  bg-lightBackground dark:bg-darkBackground h-[6rem]">
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
      <div className="flex space-x-[.5rem] items-start">
        <MusicSelector />
        <LanguageSelector />
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center h-[2.3rem] w-[2.3rem] button rounded-full cursor-pointer"
        >
          {theme === "light" ? (
            <MdWbSunny className="text-[1.3rem]" />
          ) : (
            <MdDarkMode className="text-[1.3rem]" />
          )}
        </button>
        <button className="flex items-center justify-center h-[2.3rem] w-[2.3rem] button rounded-full cursor-pointer">
          <MdAccountCircle className="text-[1.8rem]" />
        </button>
      </div>
    </header>
  );
}
