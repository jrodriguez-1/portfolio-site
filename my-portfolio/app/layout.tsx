import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Jose Rodriguez",
  description: "Fullstack Developer | Marine Corps Veteran | Results-Driven Professional",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className}`}>
      <div className="fixed inset-0 z-0">
      <Image
          src="/images/smoke.jpg"
          alt="background"
          fill
          quality={100}
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <main className="relative z-10 min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-20" />
          <div className="relative z-20 max-w-8xl mx-auto">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}