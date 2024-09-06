"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type ColorBlindMode = "normal" | "protanopia" | "deuteranopia" | "tritanopia";

interface ColorBlindnessFilterContextType {
  mode: ColorBlindMode;
  switchMode: (newMode: ColorBlindMode) => void;
}

const ColorBlindnessFilterContext = createContext<
  ColorBlindnessFilterContextType
>({
  mode: "normal",
  switchMode: () => {}
});

// Provider
export function ColorBlindnessFilterProvider({
  children
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<ColorBlindMode>("normal");

  // Switch Mode
  const switchMode = (newMode: ColorBlindMode) => {
    setMode(newMode);
  };

  return (
    <ColorBlindnessFilterContext.Provider value={{ mode, switchMode }}>
      {children}
    </ColorBlindnessFilterContext.Provider>
  );
}

// Hook
export function useColorBlindnessFilter() {
  return useContext(ColorBlindnessFilterContext);
}
