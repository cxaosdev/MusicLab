/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#3994FF",
        secondary: "#77ABFD",

        lightBackground: "#F0F0F0",
        lightButton: "#CCCCCC",
        lightText: "#121212",

        darkBackground: "#121212",
        darkButton: "#333333",
        darkText: "#F0F0F0",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".button": {
          "@apply bg-lightButton text-lightText": {},

          ".dark &": {
            "@apply bg-darkButton text-darkText": {},
          },
          "&:hover": {
            filter: "brightness(1.1)",
          },
        },
      });
    },
  ],
};
