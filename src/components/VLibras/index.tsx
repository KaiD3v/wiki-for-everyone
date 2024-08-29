"use client";

import { createContext, useContext, useEffect } from "react";
import { useVLibras } from "../../context/LibrasContext";

export function VLibrasComponent() {
  const vLibras = useVLibras();
  useEffect(() => {
    // Carregar o script VLibras

    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.defer = true;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      // @ts-ignore
      new window.VLibras.Widget("https://vlibras.gov.br/app");

      // @ts-ignore
      return window.onload();
    };
    document.head.appendChild(script);
  }, []);

  return (
    // @ts-ignore
    <div vw="true" className="enabled">
      <div
        vw-access-button="true"
        className={`${vLibras.isActive ? "active" : "inactive"}`}
      />
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper" />
      </div>
    </div>
  );
}
