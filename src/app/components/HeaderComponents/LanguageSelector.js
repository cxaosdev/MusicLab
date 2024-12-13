import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  const languages = [
    { code: "En", label: "English" },
    { code: "Ko", label: "한국어" },
    { code: "Ja", label: "日本語" },
    // { code: "En", label: <RiEnglishInput /> },
    // { code: "Ko", label: <TbAlphabetKorean /> },
    // { code: "Ja", label: "お" },
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative w-max">
      {/* 버튼 */}
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between gap-1 px-4 py-2 bg-lightButton dark:bg-darkButton rounded-full cursor-pointer shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
      >
        <span className="font-medium text-sm text-lightText dark:text-darkText">
          {selectedLanguage}
        </span>
        <RiArrowDropDownLine
          className={`text-lg text-gray-700 dark:text-gray-300 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* 드롭다운 */}
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-32">
          <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedLanguage === lang.code
                    ? "font-bold bg-gray-100 dark:bg-gray-700"
                    : "font-normal"
                }`}
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
