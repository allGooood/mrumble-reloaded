import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Mrumbl - Freshly Baked Cookies & Desserts",
  description: "Crumbl reloaded by MK",
};

const font = Nunito({
  subsets: ["cyrillic-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
