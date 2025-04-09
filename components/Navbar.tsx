"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

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
    { label: "Skills", section: "experience" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed w-full backdrop-blur bg-[#0f172a]/70 dark:bg-[#0f172a]/70 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span
          className="text-xl font-bold text-primary cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Seif Moustafa
        </span>

        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map(({ label, section }) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle Theme"
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-navy transition-colors text-gray-400 dark:text-gray-300"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>

          <button
            className="md:hidden p-1 hover:cursor-pointer text-gray-400 dark:text-gray-300"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-navy px-4 pb-4 space-y-2">
          {links.map(({ label, section }) => (
            <li key={section}>
              <button
                onClick={() => handleScroll(section)}
                className="block w-full text-left py-2 border-b border-gray-700
                           hover:bg-[#1e293b] transition-colors cursor-pointer"
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
