import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { Rubik } from "next/font/google";
import Menubar from "@/components/menubar/Menubar";
import CartBar from "@/components/cart/CartBar";
import toast, { Toaster } from "react-hot-toast";
import Button from "@/components/Button";
import AuthProvider from "./provider/AuthProvider";
import ToasterProvider from "./libs/ToasterProvider";


export const metadata: Metadata = {
  title: "Mrumbl - Freshly Baked Cookies & Desserts",
  description: "Crumbl reloaded by MK",
};

const font = Rubik({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${font.className} 
                      flex 
                      flex-col
                      items-center
                      `}>
        <AuthProvider>
          <ToasterProvider />
          <Navbar />
          <CartBar />
          <Menubar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
