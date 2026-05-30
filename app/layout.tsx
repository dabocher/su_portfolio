import type { Metadata } from "next";
import { Geist_Mono, Amatic_SC, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const amaticSC = Amatic_SC({
  variable: "--font-amatic-sc",
  subsets: ["latin"],
  weight: "400",
});

const yanone = Yanone_Kaffeesatz({
  variable: "--font-yanone",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Susanna Subirana - Portfolio",
  description: "Ilustraciones y diseño gráfico de Susanna Subirana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${amaticSC.variable} ${geistMono.variable} ${yanone.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center gap-16 sd:gap-8  bg-[#f5efe6aa] p-8 text-red-600">
        <Header />
        {children}
      </body>
    </html>
  );
}
