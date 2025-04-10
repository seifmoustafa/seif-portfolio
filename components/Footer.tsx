"use client";

export default function Footer() {
  return (
    <footer className="bg-black/40 text-center text-sm text-gray-400 py-4 transition-colors">
      © {new Date().getFullYear()} AppVanguard. All rights reserved.
    </footer>
  );
}
