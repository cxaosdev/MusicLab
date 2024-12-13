import React, { createContext, useContext, useState } from "react";

// src/app/context/MusicContext.js

export const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [selectedChart, setSelectedChart] = useState("YouTube Music");
  const [selectedRegion, setSelectedRegion] = useState("USA");

  return (
    <MusicContext.Provider
      value={{
        selectedChart,
        setSelectedChart,
        selectedRegion,
        setSelectedRegion,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
