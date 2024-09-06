"use client";

import { useState, useEffect } from "react";

export function IFrame({ pageData }: any) {
  const [isMobile, setIsMobile] = useState(false);

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
          sandbox="allow-scripts allow-same-origin"
        />
      )}
    </>
  );
}