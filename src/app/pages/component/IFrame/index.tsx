"use client";

import { useEffect } from "react";
import { useColorBlindnessFilter } from "../../../../context/ColorBlindnessFilterContext";

export function IFrame({ pageData }: any) {
  const { mode } = useColorBlindnessFilter();

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
    <div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-8 bg-gray-50">
      <div className="w-full sm:max-w-6xl bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <iframe
          srcDoc={pageData.html}
          className="w-full h-[75vh] min-h-[500px] rounded-lg"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}
