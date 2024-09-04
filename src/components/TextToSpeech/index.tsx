import { AiFillSound } from "react-icons/ai";
import { FaPlay, FaStop, FaX } from "react-icons/fa6";

export function SpeechIcon() {
  return (
    <main className="fixed border border-gray-700 rounded-xl bg-gray-900 shadow-xl right-5 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-between p-4 max-w-[80px]">
      <header className="flex flex-col items-center w-full">
        <FaX
          size={20}
          color="white"
          className="cursor-pointer hover:text-red-500 hover:scale-110 transition-transform duration-200 mb-2"
        />
        <AiFillSound size={30} color="white" className="mb-2" />
        <hr className="w-full border-gray-600" />
      </header>
      <section className="flex flex-col items-center gap-4 mt-4">
        <FaPlay
          size={30}
          color="white"
          className="cursor-pointer hover:text-green-500 transition-colors"
        />
        <FaStop
          size={30}
          color="white"
          className="cursor-pointer hover:text-red-500 transition-colors"
        />
      </section>
    </main>
  );
}
