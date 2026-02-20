import { ReactNode } from 'react';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import "./globals.css";
import { LanguageProvider } from "@/shared/lib/i18n/LanguageContext";

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/WEB/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WEB/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WEB/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WEB/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WEB/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
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
    <html lang="en" suppressHydrationWarning className={satoshi.variable}>
      <body className={`${satoshi.className} antialiased`}>
        <div className="min-h-screen">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}