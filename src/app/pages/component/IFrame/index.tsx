"use client";

import { useState, useEffect } from "react";
import { useColorBlindnessFilter } from "../../../../context/ColorBlindnessFilterContext";
import Head from "next/head";

export function IFrame({ pageData }: any) {
  const [isMobile, setIsMobile] = useState(false);
  const { mode } = useColorBlindnessFilter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const applyColorBlindnessFilter = (iframeDoc: Document) => {
      const images = iframeDoc.querySelectorAll("img");

      images.forEach((img) => {
        switch (mode) {
          case "protanopia":
            img.style.filter =
              "contrast(100%) sepia(100%) saturate(500%) hue-rotate(-20deg)";
            break;
          case "deuteranopia":
            img.style.filter =
              "contrast(100%) sepia(100%) saturate(500%) hue-rotate(0deg)";
            break;
          case "tritanopia":
            img.style.filter =
              "contrast(100%) sepia(100%) saturate(500%) hue-rotate(90deg)";
            break;
          case "normal":
          default:
            img.style.filter = "none";
            break;
        }
      });
    };

    const iframe = document.querySelector("iframe");
    if (iframe) {
      const onLoad = () => {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          applyColorBlindnessFilter(iframeDoc);
        }
      };

      iframe.addEventListener("load", onLoad);

      // Aplicar o filtro imediatamente se o iframe já estiver carregado
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        applyColorBlindnessFilter(iframeDoc);
      }

      return () => {
        iframe.removeEventListener("load", onLoad);
      };
    }
  }, [mode]);

  return (
    <>
      {!isMobile ? (
        <div className="w-full sm:max-w-6xl bg-white p-6 rounded-lg shadow-md">
          <iframe
            srcDoc={pageData.html}
            className="w-full min-h-[500px] rounded-lg"
            sandbox="allow-scripts allow-same-origin"
            style={{ height: "75vh" }}
          />
        </div>
      ) : (
        <iframe
          srcDoc={pageData.html}
          className="block sm:hidden w-screen h-full bg-white rounded-lg shadow-md"
        />
      )}
    </>
  );
}
