import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wiki For Everyone | A Knowledge Hub for All",
  description: "Bem-vindo ao Wiki para Todos - um projeto inovador que transforma a Wikipédia em uma plataforma acessível para todos, garantindo que o conhecimento esteja ao alcance de pessoas com diferentes habilidades e necessidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className='flex bg-gray-300'>
      <Sidebar />
        {children}
      </body>
    </html>
  );
}
