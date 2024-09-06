"use client";

import { FaX } from "react-icons/fa6";
import { useColorBlindnessFilter } from "../../context/ColorBlindnessFilterContext";
import { useColorBlindnessFilterMenu } from "../../context/ColorBlindnessFilterIconMenuContext";

export function ColorBlindnessFilterMenu() {
  const { isActive, setIsActive } = useColorBlindnessFilterMenu();
  const { mode, switchMode } = useColorBlindnessFilter();

  const handleCloseColorBlindnessMenu = () => {
    setIsActive(false);
  };

  return (
    <main
      className={`fixed border border-gray-600 rounded-lg bg-gray-800 shadow-lg right-5 top-1/2 transform -translate-y-1/2 ${isActive
        ? "flex"
        : "hidden"} flex-col items-center justify-between p-6 max-w-[140px] transition-all duration-300 ease-in-out`}
    >
      <header className="flex flex-col items-center w-full">
        <FaX
          size={20}
          color="white"
          className="cursor-pointer hover:text-red-500 hover:rotate-90 transition-transform duration-300 ease-in-out mb-4"
          onClick={handleCloseColorBlindnessMenu}
        />
        <hr className="w-full border-gray-500 mb-4" />
      </header>
      <section className="flex flex-col items-center gap-6 mt-4">
        <button
          onClick={() => switchMode("protanopia")}
          className={`text-white bg-blue-500 p-2 rounded-md w-full hover:bg-blue-600 transition-colors duration-300 ease-in-out ${mode ===
          "protanopia"
            ? "border-2 border-red-500"
            : ""} shadow hover:shadow-lg`}
        >
          Protanopia
        </button>
        <button
          onClick={() => switchMode("deuteranopia")}
          className={`text-white bg-green-500 p-2 rounded-md w-full hover:bg-green-600 transition-colors duration-300 ease-in-out ${mode ===
          "deuteranopia"
            ? "border-2 border-red-500"
            : ""} shadow hover:shadow-lg`}
        >
          Deuteranopia
        </button>
        <button
          onClick={() => switchMode("tritanopia")}
          className={`text-white bg-yellow-500 p-2 rounded-md w-full hover:bg-yellow-600 transition-colors duration-300 ease-in-out ${mode ===
          "tritanopia"
            ? "border-2 border-red-500"
            : ""} shadow hover:shadow-lg`}
        >
          Tritanopia
        </button>
        <button
          onClick={() => switchMode("normal")}
          className={`text-white bg-gray-500 p-2 rounded-md w-full hover:bg-gray-600 transition-colors duration-300 ease-in-out ${mode ===
          "normal"
            ? "border-2 border-red-500"
            : ""} shadow hover:shadow-lg`}
        >
          Normal
        </button>
      </section>
    </main>
  );
}
