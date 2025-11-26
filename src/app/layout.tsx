import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Vascomm",
  description: "Technical Test Vascomm",
};

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-poppins" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
