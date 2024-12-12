"use client";
import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <html lang="en" className={theme}>
        <body className="flex flex-col min-h-screen bg-light text-dark dark:bg-dark dark:text-light">
          <Header />
          <main className="flex flex-1">
            <Sidebar />
            <div className="flex-1 p-4">{children}</div>
          </main>
          <footer className="text-center py-4 text-sm text-dark dark:text-light">
            © 2024 MusicLab. All Rights Reserved.
          </footer>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
