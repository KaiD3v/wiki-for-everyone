"use client";

import { createContext, ReactNode, useState, useContext } from "react";

// Define the context type
interface ColorBlindnessMenuType {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
}

const ColorBlindnessFilterMenuContext = createContext<
  ColorBlindnessMenuType | undefined
>(undefined);

export const ColorBlindnessMenuProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [isActive, setIsActive] = useState(false);
  console.log("isActive:", isActive);
  return (
    <ColorBlindnessFilterMenuContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ColorBlindnessFilterMenuContext.Provider>
  );
};

export const useColorBlindnessFilterMenu = () => {
  const context = useContext(ColorBlindnessFilterMenuContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useTextToSpeech must be used within a VLibrasProvider");
  }
  return context;
};
