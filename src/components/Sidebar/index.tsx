"use client";

import Link from "next/link";
import {
  FaAudioDescription,
  FaEye,
  FaHandFist,
  FaMicrophone,
  FaBookAtlas
} from "react-icons/fa6";
import { useVLibras } from "../../context/LibrasContext";
import { useTextToSpeech } from "../../context/TextToSpeechIconContext";
import { useColorBlindnessFilterMenu } from "../../context/ColorBlindnessFilterIconMenuContext";

export function Sidebar() {
  const { isActive, setIsActive } = useVLibras();
  const {
    isActive: isActiveTextToSpeech,
    setIsActive: setIsActiveTextToSpeech
  } = useTextToSpeech();

  const {
    isActive: isActiveColorBlindnessMenu,
    setIsActive: setIsActiveColorBlindnessMenu
  } = useColorBlindnessFilterMenu();

  const handleColorBlindnessMenuToggle = () => {
    setIsActiveColorBlindnessMenu(!isActiveColorBlindnessMenu);
  };
  const handleTextToSpeechToggle = () => {
    setIsActiveTextToSpeech(!isActiveTextToSpeech);
  };

  const handleVLibrasToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className="sticky top-0 h-screen text-white bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg w-full max-w-[80px] sm:max-w-[250px]">
      <div className="flex flex-col h-full overflow-hidden">
        {/* lg screen header */}
        <header className="hidden sm:flex flex-col m-6 justify-center items-center gap-3">
          <Link href={"/"}>
            <h1 className="flex  gap-2 items-center font-extralight sm:text-xl text-center text-indigo-300 tracking-widest">
              <FaBookAtlas size={22} /> Wiki<span className="text-indigo-500">
                ForEveryone
              </span>
            </h1>
          </Link>
          <hr className="w-full border-t-2 border-gray-500" />
        </header>

        {/* Small screen header */}
        <section className="sm:hidden flex flex-col">
          <header className="flex flex-col text-center py-4">
            <Link href={"/"}>
              <h1 className="font-extralight justify-center items-center m-6 flex flex-col text-indigo-300 tracking-wide text-2xl">
                <FaBookAtlas size={32} />
              </h1>
            </Link>
            <hr className="w-full border-t-2 border-gray-500" />
          </header>

          {/* sm screen content */}
          <main className="flex-grow flex flex-col my-auto justify-center items-center text-center gap-6">
            <ul className="flex flex-col my-auto h-full justify-center items-center gap-5">
              <li className="cursor-pointer">
                <div className="p-4 bg-indigo-500 rounded-lg hover:bg-indigo-400 transition-all duration-300">
                  <FaHandFist
                    onClick={handleVLibrasToggle}
                    size={28}
                    className="text-white"
                  />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="p-4 bg-indigo-500 rounded-lg hover:bg-indigo-400 transition-all duration-300">
                  <FaMicrophone
                    size={28}
                    className="text-white"
                    onClick={handleTextToSpeechToggle}
                  />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="p-4 bg-indigo-500 rounded-lg hover:bg-indigo-400 transition-all duration-300">
                  <FaEye
                    size={28}
                    className="text-white"
                    onClick={handleColorBlindnessMenuToggle}
                  />
                </div>
              </li>
            </ul>
          </main>
        </section>

        {/* lg screen content */}
        <section className="hidden sm:flex flex-col my-10 justify-center items-center relative gap-6">
          <h1 className="font-light text-xl text-indigo-300 tracking-wide mb-6">
            Ferramentas
          </h1>
          <ul className="text-lg text-indigo-200 flex flex-col gap-4">
            <li className="flex flex-row items-center gap-4">
              <FaHandFist size={28} className="text-white" />
              <button
                onClick={handleVLibrasToggle}
                className="hover:text-indigo-400 transition-colors"
              >
                Libras
              </button>
            </li>
            <li className="flex flex-row items-center gap-4">
              <FaMicrophone size={28} className="text-white" />
              <button
                onClick={handleTextToSpeechToggle}
                className="hover:text-indigo-400 transition-colors"
              >
                Leitura em voz alta
              </button>
            </li>
            <li className="flex flex-row items-center gap-4">
              <FaEye size={28} className="text-white" />
              <button
                onClick={handleColorBlindnessMenuToggle}
                className="hover:text-indigo-400 transition-colors"
              >
                Modo Daltonismo
              </button>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
}
