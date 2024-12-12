"use client";
import { useContext } from "react";
import { ThemeContext } from "../layout";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between h-[6rem] items-center px-4 py-2 bg-lightBackground dark:bg-darkBackground ">
      <h1 className=" text-[3rem] font-bold text-primary dark:text-secondary">
        MusicLab
      </h1>
      <nav className="flex items-center gap-4">
        <div></div>
        <button className="px-4 py-2 bg-gray rounded-lg">YouTube Music</button>
        <button className="px-4 py-2 bg-gray rounded-lg">Apple Music</button>
        <button className="px-4 py-2 bg-gray rounded-lg">Spotify</button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray  dark:bg-darkBackground"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? "light" : "dark"}
        </button>
      </nav>
      <input
        className="flex items-center justify-center w-40 h-8 rounded-full bg-gray  dark:bg-darkBackground"
        value="Search"
        readOnly
      />
    </header>
  );
}
