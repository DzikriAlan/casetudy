import { ReactNode } from 'react';
import { Poppins, Playfair_Display, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Casetudy - Platform Case Study Product & Design Berkualitas",
  description: "Platform yang mengkurasi dan mempublikasikan case study berkualitas tinggi di bidang Product & Design agar siapa pun bisa belajar dari pengalaman nyata dengan mudah, cepat, dan relevan.",
  keywords: "case study product, case study design, product management, ux design, ui design, pembelajaran product",
  authors: [{ name: "Product & Design Case Study Platform" }],
  viewport: "width=device-width, initial-scale=1",
};


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} ${inter.variable} font-poppins antialiased`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}