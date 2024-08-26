"use client";

import { EventHandler, useState } from "react";
import { FaMicrophone } from "react-icons/fa6";

let speechRecognition: SpeechRecognition | null = null;

export function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  async function voiceSearch(e: any) {
    e.preventDefault();
    setIsRecording(true);

    // Verificação de disponibilidade da API com e sem prefixo
    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      alert("Infelizmente seu navegador não suporta a API de navegação");
      return;
    }

    // Uso da API disponível (com ou sem prefixo)
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
    <form className="flex flex-col items-center justify-center gap-5 h-screen p-4">
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
        <button onClick={voiceSearch} className="p-3 transition-colors">
          <FaMicrophone color="#000" size={24} />
        </button>
      </div>
      <button
        className="bg-white rounded-md overflow-hidden shadow-lg w-full max-w-7xl py-2 hover:shadow-amber-200 transition-all duration-300"
        type="submit"
      >
        Pesquisar
      </button>
    </form>
  );
}
