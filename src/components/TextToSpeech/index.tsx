"use client";

import { AiFillSound } from "react-icons/ai";
import { FaPlay, FaStop, FaX, FaPause, FaImage } from "react-icons/fa6";
import { useTextToSpeech } from "../../context/TextToSpeechIconContext";
import { useEffect, useState } from "react";

export function SpeechIcon() {
  const { isActive, setIsActive } = useTextToSpeech();
  const [play, setPlay] = useState(false);
  const [paused, setPaused] = useState(false);

  const handleCloseTextToSpeechIcon = () => {
    setIsActive(false);
    handleStop(); // Para a fala ao fechar o ícone
  };

  const handlePlay = () => {
    let selectedText: string = "";

    // Verifica se o conteúdo está dentro de um iframe
    const iframe = document.querySelector("iframe");
    if (iframe) {
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        // @ts-ignore
        selectedText = iframeDoc.getSelection()?.toString();
      }
    }

    // Se não houver seleção no iframe, pega a seleção na página principal
    if (!selectedText) {
      // @ts-ignore
      selectedText = window.getSelection()?.toString();
    }

    // Se ainda não houver seleção, pega todo o texto da página principal
    if (!selectedText) {
      selectedText = document.body.innerText;
    }

    console.log(selectedText);

    const utterance = new SpeechSynthesisUtterance(selectedText);

    setPlay(true);
    setPaused(false);
    speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    speechSynthesis.pause();
    setPaused(true);
  };

  const handleResume = () => {
    speechSynthesis.resume();
    setPaused(false);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setPlay(false);
    setPaused(false);
  };

  return (
    <main
      className={`fixed border border-gray-700 rounded-xl bg-gray-900 shadow-xl right-5 top-1/2 transform -translate-y-1/2 ${
        isActive ? "flex" : "hidden"
      } flex-col items-center justify-between p-4 max-w-[80px]`}
    >
      <header className="flex flex-col items-center w-full">
        <FaX
          size={20}
          color="white"
          className="cursor-pointer hover:text-red-500 hover:scale-110 transition-transform duration-200 mb-2"
          onClick={handleCloseTextToSpeechIcon}
        />
        <AiFillSound size={30} color="white" className="mb-2" />
        <hr className="w-full border-gray-600" />
      </header>
      <section className="flex flex-col items-center gap-4 mt-4">
        {!play && (
          <FaPlay
            size={30}
            color="white"
            className="cursor-pointer hover:text-green-500 transition-colors"
            onClick={handlePlay}
          />
        )}
        {play && !paused && (
          <>
            <FaPause
              size={30}
              color="red"
              className="cursor-pointer hover:text-red-500 transition-colors"
              onClick={handlePause}
            />
            <FaStop
              size={30}
              color="white"
              className="cursor-pointer hover:text-red-500 transition-colors"
              onClick={handleStop}
            />
          </>
        )}
        {paused && (
          <>
            <FaPlay
              size={30}
              color="red"
              className="cursor-pointer hover:text-green-500 transition-colors"
              onClick={handleResume}
            />
            <FaStop
              size={30}
              color="white"
              className="cursor-pointer hover:text-red-500 transition-colors"
              onClick={handleStop}
            />
          </>
        )}
      </section>
    </main>
  );
}
