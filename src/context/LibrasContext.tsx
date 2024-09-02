"use client";

import { createContext, ReactNode, useState, useContext } from "react";

// Define the context type
interface VLibrasContextType {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
}

const VLibrasContext = createContext<VLibrasContextType | undefined>(undefined);

export const VLibrasProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  console.log("isActive:", isActive);
  return (
    <VLibrasContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </VLibrasContext.Provider>
  );
};

export const useVLibras = () => {
  const context = useContext(VLibrasContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useVLibras must be used within a VLibrasProvider");
  }
  return context;
};
