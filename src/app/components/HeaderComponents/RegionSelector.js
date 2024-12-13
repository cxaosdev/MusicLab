import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useMusic } from "@/app/context/MusicContext";

export default function RegionSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedRegion, setSelectedRegion } = useMusic();

  const languages = [
    { code: "USA", label: "USA" },
    { code: "KOR", label: "Korea" },
    { code: "JPN", label: "Japan" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleRegionChange = (code) => {
    setSelectedRegion(code);
    setIsOpen(false);
  };

  const currentRegion = languages.find((lang) => lang.code === selectedRegion);

  return (
    <div className="relative w-max">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-end button w-[5.5rem] h-[2.3rem] px-4 py-2 rounded-full cursor-pointer shadow-md transition-all"
      >
        <span className="font-medium text-[.75rem] ml-auto">
          {currentRegion?.label}
        </span>
        <RiArrowDropDownLine
          className={`text-[1.5rem] translate-x-[.3rem] transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-[2.5rem] left-0 bg-lightButton dark:bg-darkBackground shadow-lg rounded-lg w-40">
          <ul className="flex flex-col space-y-[.2rem]  justify-center">
            {languages
              .filter((reg) => reg.code !== selectedRegion)
              .map((reg) => (
                <li
                  key={reg.code}
                  onClick={() => handleRegionChange(reg.code)}
                  className="flex items-center gap-2 text-center justify-center w-[5.5rem] font-medium text-[.75rem] h-[2.3rem] px-4 py-2 rounded-full button cursor-pointer"
                >
                  {reg.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
