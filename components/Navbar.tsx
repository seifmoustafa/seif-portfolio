"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun, FiFileText } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleScroll = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Home", section: "hero" },
    { label: "About", section: "about" },
    { label: "Expertise", section: "experience" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 shadow transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span
          className="text-xl font-bold text-primary cursor-pointer hover:text-accent transition-colors"
          onClick={() => handleScroll("hero")}
        >
          AppVanguard
        </span>

        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map(({ label, section }) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className="hover:text-accent transition-colors cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/Team_CV.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            title="View Team CV"
          >
            <FiFileText size={20} className="text-primary" />
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            className="md:hidden p-2 text-gray-200 hover:cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-black/50 px-4 pb-4 space-y-2">
          {links.map(({ label, section }) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className="block w-full text-left py-2 border-b border-gray-600 hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
