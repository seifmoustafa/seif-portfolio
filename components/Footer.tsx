"use client";

export default function Footer() {
  return (
    <footer
      className="bg-white dark:bg-[#0f172a] py-4 text-center text-sm
                       text-gray-600 dark:text-gray-400 transition-colors"
    >
      © {new Date().getFullYear()} Seif Moustafa. All rights reserved.
    </footer>
  );
}
