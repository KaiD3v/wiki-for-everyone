"use client";

import { FaMicrophone } from "react-icons/fa6";

export function Search() {
  return (
    <form className="flex flex-col items-center justify-center gap-5 h-screen p-4">
      <h1 className="font-extralight text-2xl sm:text-4xl mb-6">WikiForEveryone</h1>
      <div className="flex items-center bg-gray-100 text-white w-full max-w-screen rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Digite sua Pesquisa"
          className="flex-grow p-3 bg-gray-100 text-black text-lg outline-none rounded-l-lg"
        />
        <button className="p-3 transition-colors">
          <FaMicrophone color="#000" size={24} />
        </button>
      </div>
      <button
        className="bg-white rounded-md overflow-hidden shadow-lg w-full max-w-7xl py-2"
        type="submit"
      >
        Pesquisar
      </button>
    </form>
  );
}
