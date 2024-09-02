"use client";

import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
import { useRouter } from "next/navigation";

let speechRecognition: SpeechRecognition | null = null;

export function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchInput.trim() === "") return;
    router.push(`/search/${encodeURIComponent(searchInput.trim())}`);
  }
  function stopVoiceSearch(e: any) {
    e.preventDefault();
    setIsRecording(false);

    if (speechRecognition) {
      speechRecognition.stop();
    }
  }

  function voiceSearch(e: any) {
    e.preventDefault();
    setIsRecording(true);

    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      alert("Infelizmente seu navegador não suporta a API de navegação");
      return;
    }

    const SpeechRecognitionAPI =
      window.SpeechRecognition || (window.webkitSpeechRecognition as any);

    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = e => {
      const transcription = Array.from(e.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setSearchInput(transcription);
    };

    speechRecognition.onerror = e => {
      console.error(e);
    };

    speechRecognition.start();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5 p-4 mt-16"
    >
      <h1 className="font-extralight text-2xl sm:text-4xl mb-6">
        WikiForEveryone
      </h1>
      <div className="flex items-center bg-gray-100 text-white w-full max-w-screen rounded-lg overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Digite sua Pesquisa"
          className="flex-grow p-3 bg-gray-100 text-black text-lg outline-none rounded-l-lg"
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button
          onClick={!isRecording ? voiceSearch : stopVoiceSearch}
          className={`p-3 transition-colors ${isRecording
            ? "bg-red-500"
            : "focus:bg-gray-500"}`}
        >
          <FaMicrophone color="#000" size={24} />
        </button>
      </div>
      <button
        className="bg-white text-center text-black font-semibold rounded-md overflow-hidden shadow-lg w-full max-w-7xl py-2 px-4 border border-gray-300 hover:shadow-amber-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
        type="submit"
      >
        Pesquisar
      </button>
    </form>
  );
}
