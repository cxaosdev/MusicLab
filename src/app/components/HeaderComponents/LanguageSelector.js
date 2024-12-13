import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  const languages = [
    { code: "En", label: "English" },
    { code: "Ko", label: "한국어" },
    { code: "Ja", label: "日本語" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <div className="relative w-max">
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-end button w-[5.5rem] h-[2.3rem] px-4 py-2 rounded-full cursor-pointer shadow-md transition-all"
      >
        <span className="font-medium text-[.75rem] ml-auto">
          {currentLanguage?.label}
        </span>
        <RiArrowDropDownLine
          className={`text-[1.5rem] translate-x-[.3rem] transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-[2.5rem] left-0 rounded-lg w-40">
          <ul className="flex flex-col space-y-[.2rem]  justify-center">
            {languages
              .filter((lang) => lang.code !== selectedLanguage)
              .map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center gap-2 text-center justify-center w-[6rem] font-medium text-[.75rem] h-[2.3rem] px-4 py-2 rounded-full button cursor-pointer"
                >
                  {lang.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
