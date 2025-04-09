import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seif Moustafa | Portfolio",
  description: "Full-stack Developer – Flutter, React, and .NET Core",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-text dark:bg-background-dark transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
