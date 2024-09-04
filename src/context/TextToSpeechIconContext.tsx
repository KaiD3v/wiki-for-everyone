"use client";

import { createContext, ReactNode, useState, useContext } from "react";

// Define the context type
interface TextToSpeechContentType {
  isActive: boolean;
  setIsActive: (state: boolean) => void;
}

const TextToSpeechContext = createContext<TextToSpeechContentType | undefined>(
  undefined
);

export const TextToSpeechProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  console.log("isActive:", isActive);
  return (
    <TextToSpeechContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </TextToSpeechContext.Provider>
  );
};

export const useTextToSpeech= () => {
  const context = useContext(TextToSpeechContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useTextToSpeech must be used within a VLibrasProvider");
  }
  return context;
};
