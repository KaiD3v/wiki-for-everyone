import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components/Sidebar";
import { VLibrasComponent } from "../components/VLibras";
import { VLibrasProvider } from "../context/LibrasContext";
import { SpeechIcon } from "../components/TextToSpeech";
import { TextToSpeechProvider } from "../context/TextToSpeechIconContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wiki For Everyone | A Knowledge Hub for All",
  description:
    "Bem-vindo ao Wiki para Todos - um projeto inovador que transforma a Wikipédia em uma plataforma acessível para todos, garantindo que o conhecimento esteja ao alcance de pessoas com diferentes habilidades e necessidades."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <VLibrasProvider>
        <TextToSpeechProvider>
        <body className={`flex h-screen bg-gray-300 ${inter.className}`}>
          <Sidebar />
          <main className="flex-grow overflow-y-auto p-2 sm:p-8">
            {children}
            <VLibrasComponent />
            <SpeechIcon />
          </main>
        </body>
        </TextToSpeechProvider>
      </VLibrasProvider>
    </html>
  );
}
