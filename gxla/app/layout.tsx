import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gente por los Animales",
  description: "Sitio Web oficial de Gente por los Animales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} scroll-smooth scroll-pt-20 lg:scroll-pt-27`}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
