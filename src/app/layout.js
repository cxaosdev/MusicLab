"use client";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en" className={theme}>
        <body className="flex flex-col min-h-screen bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText">
          <Header />
          <main className="flex flex-1">
            <Sidebar />
            <div className="flex-1 p-4">{children}</div>
          </main>
          <footer className="flex justify-center items-center absolute bottom-[0.5rem] w-full font-light text-[0.8rem] text-lightText dark:text-darkText gap-2">
            <span>© 2024 MusicLab. All Rights Reserved.</span>
            <a
              href="https://github.com/cxaosdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[0.2rem] text-lightText dark:text-darkText hover:underline"
            >
              <FaGithub />
              cxaosdev
            </a>
            <a
              href="https://github.com/Cirque-Du-Trash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap--[0.2rem] text-lightText dark:text-darkText hover:underline"
            >
              <FaGithub />
              Cirque-Du-Trash
            </a>
          </footer>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
