import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppVanguard | Team Portfolio",
  description: "Innovative Software Solutions by AppVanguard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-background-gradientStart to-background-gradientEnd text-text`}
      >
        {children}
      </body>
    </html>
  );
}
