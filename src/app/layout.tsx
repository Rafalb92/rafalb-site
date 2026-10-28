import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import { MotionProvider } from "@/providers/MotionProvider";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Rafał — Fullstack Developer",
  description:
    "Fullstack TypeScript developer — Node.js, NestJS, React, Next.js, React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${geistMono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
