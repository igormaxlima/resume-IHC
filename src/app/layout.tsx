import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Name — Portfólio",
  description: "Portfólio de desenvolvimento — projeto IHC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${montserrat.variable} antialiased`}
    >
      <body className="bg-dark text-white font-montserrat">{children}</body>
    </html>
  );
}
