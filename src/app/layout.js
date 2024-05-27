import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "./cartContext";
import Head from "next/head";

export const metadata = {

  title: "CodeWardDrobe.com",
  description: "CodesWardDrobe.com - Where fashion meets function, byte by byte.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   

      <body className={inter.className}>
        <CartProvider>
        <Navbar/>
        
        {children}
        <Footer/>
        </CartProvider>
        </body>
    </html>
  );
}
