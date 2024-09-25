"use client";

import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsX } from "react-icons/bs";

export function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full p-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 shadow-lg">
      {/* Desktop Menu */}
      <section className="hidden sm:block">
        <ul className="flex justify-center gap-8 text-lg font-semibold text-gray-200 tracking-wide">
          <li className="transition hover:text-gray-100 hover:scale-105">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="transition hover:text-gray-100 hover:scale-105">
            <a href="#funcionalidades">Funcionalidades</a>
          </li>
          <li className="transition hover:text-gray-100 hover:scale-105">
            <a href="#libras">Libras</a>
          </li>
          <li className="transition hover:text-gray-100 hover:scale-105">
            <a href="#leitura-em-voz-alta">Leitura em Voz Alta</a>
          </li>
          <li className="transition hover:text-gray-100 hover:scale-105">
            <a href="#modo-daltonismo">Modo Daltonismo</a>
          </li>
        </ul>
      </section>

      {/* Mobile Menu */}
      <section className="sm:hidden flex flex-col justify-center items-center">
        {!isOpen && (
          <BiMenu
            className="rounded-md text-gray-200 cursor-pointer transition-transform transform hover:scale-110"
            onClick={toggleMenu}
            size={34}
          />
        )}
        {isOpen && (
          <BsX
            className="rounded-md text-gray-200 cursor-pointer transition-transform transform hover:scale-110"
            onClick={toggleMenu}
            size={34}
          />
        )}
        {isOpen && (
          <ul className="mt-4 flex flex-col items-center  rounded-lg transition-all duration-500 ease-in-out text-gray-300">
            <li className="transition hover:text-gray-100 hover:scale-105">
              <a href="#sobre" onClick={toggleMenu}>
                Sobre
              </a>
            </li>
            <li className="transition hover:text-gray-100 hover:scale-105">
              <a href="#funcionalidades" onClick={toggleMenu}>
                Funcionalidades
              </a>
            </li>
            <li className="transition hover:text-gray-100 hover:scale-105">
              <a href="#libras" onClick={toggleMenu}>
                Libras
              </a>
            </li>
            <li className="transition hover:text-gray-100 hover:scale-105">
              <a href="#leitura-em-voz-alta" onClick={toggleMenu}>
                Leitura em Voz Alta
              </a>
            </li>
            <li className="transition hover:text-gray-100 hover:scale-105">
              <a href="#modo-daltonismo" onClick={toggleMenu}>
                Modo Daltonismo
              </a>
            </li>
          </ul>
        )}
      </section>
    </header>
  );
}
