"use client";

import Link from "next/link";
import {
  FaAudioDescription,
  FaEye,
  FaHandFist,
  FaMicrophone
} from "react-icons/fa6";
import { useVLibras } from "../../context/LibrasContext";

export function Sidebar() {
  const { isActive, setIsActive } = useVLibras();

  const handleVLibrasToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className="sticky top-0 h-screen text-white bg-black w-full max-w-20 sm:max-w-60 md:max-w-96">
      <div className="flex flex-col h-full overflow-hidden">
        <header className="hidden sm:flex flex-col m-6 justify-center items-center gap-3">
          <Link href={"/"}>
            <h1 className="font-extralight sm:text-2xl">WikiForEveryone</h1>
          </Link>
          <hr className="w-full border-t-2 border-gray-500" />
        </header>

        <section className="sm:hidden flex flex-col">
          <header className="flex flex-col text-center py-4">
            <h1 className="font-extralight text-start flex flex-col">
              Wiki <span>For</span> <span>Everyone</span>
            </h1>
            <hr className="w-full border-t-2 border-gray-500" />
          </header>

          <main className="flex-grow flex flex-col justify-center items-center text-center">
            <ul className="flex flex-col text-center justify-center items-center gap-5">
              <li className="cursor-pointer">
                <div className="p-2 bg-gray-700 rounded-sm hover:bg-gray-600 transition-colors">
                  <FaHandFist onClick={handleVLibrasToggle} size={32} />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="p-2 bg-gray-700 rounded-sm hover:bg-gray-600 transition-colors">
                  <FaMicrophone size={32} />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="p-2 bg-gray-700 rounded-sm hover:bg-gray-600 transition-colors">
                  <FaEye size={32} />
                </div>
              </li>
              <li className="cursor-pointer">
                <div className="p-2 bg-gray-700 rounded-sm hover:bg-gray-600 transition-colors">
                  <FaAudioDescription size={32} />
                </div>
              </li>
            </ul>
          </main>
        </section>

        <section className="hidden sm:flex flex-col m-6 justify-center items-center gap-3">
          <h1 className="font-extralight sm:text-2xl mr-10">Ferramentas</h1>
          <ul className="text-lg font-extralight">
            <li>
              <button onClick={handleVLibrasToggle}>Libras</button>
            </li>
            <li>
              <button>Leitura em voz alta</button>
            </li>
            <li>
              <button>Modo Daltonismo</button>
            </li>
            <li>
              <button>Descrição de Imagem</button>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
}
