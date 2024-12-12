"use client";
import { useContext } from "react";
import { ThemeContext } from "../layout";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 shadow">
      <h1 className=" text-xl font-bold text-primary dark:text-secondary">
        MusicLab
      </h1>
      <nav className="flex items-center gap-4">
        <div></div>
        <button className="px-4 py-2 bg-gray text-white rounded-lg">
          YouTube Music
        </button>
        <button className="px-4 py-2 bg-gray text-white rounded-lg">
          Apple Music
        </button>
        <button className="px-4 py-2 bg-gray text-white rounded-lg">
          Spotify
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray text-white dark:bg-gray-700"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? "light" : "dark"}
        </button>
      </nav>
      <input
        className="flex items-center justify-center w-40 h-8 rounded-full bg-gray text-white dark:bg-gray-700"
        value="Search"
        readOnly
      />
    </header>
  );
}
