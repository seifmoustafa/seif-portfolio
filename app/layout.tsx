import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seif Moustafa | Portfolio",
  description: "Full-stack dev: Flutter · React · .NET Core",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-gray-200 dark:bg-[#0f172a]`}
      >
        {children}
      </body>
    </html>
  );
}
