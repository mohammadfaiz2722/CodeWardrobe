import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import { CartProvider } from "./cartContext";
export const metadata = {
  title: "CodeWardDrobe.com",
  description: "CodesWardDrobe.com - Where fashion meets function, byte by byte.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>

      </Head>
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
