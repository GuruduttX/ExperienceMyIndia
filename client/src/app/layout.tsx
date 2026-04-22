import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/NavBar";
import Footer from "@/utils/Footer";
import MobileNavWrapper from "@/utils/Mobile/MobileNavWrapper";


const poppins = Poppins({
  variable: "--font-geist-mono",
  weight : ["100", "200" ,"300", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Experience My india",
  description: "Exprience the real India with best travel experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <MobileNavWrapper />
        {children}
        <Footer />
        </body>
    </html>
  );
}
