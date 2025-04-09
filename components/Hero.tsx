"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiMail,
  // FiFacebook,
  // FiSend,
} from "react-icons/fi";

const socials = [
  {
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/seif-moustafa-60115f/",
  },
  { icon: FiGithub, url: "https://github.com/seifmoustafa/seifmoustafa" },
  { icon: FiFileText, url: "/Seif_Moustafa_CV.docx" }, // CV Link
  { icon: FiMail, url: "mailto:youremail@example.com" },
  // { icon: FiFacebook, url: "#" },
  // { icon: FiSend, url: "#" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center 
               bg-gradient-to-br from-[#0F172A] to-[#0D141F] text-center overflow-hidden px-4"
    >
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#ffffff20">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
              M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,186.7C672,192,768,128,864,128C960,128,1056,192,1152,229.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,186.7C96,149,192,75,288,96C384,117,480,235,576,245.3C672,256,768,160,864,160C960,160,1056,256,1152,250.7C1248,245,1344,139,1392,85.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,186.7C672,192,768,128,864,128C960,128,1056,192,1152,229.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
            />
          </path>
        </svg>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Hello, I’m <span className="text-teal-300">Seif Moustafa</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
          A Full‑Stack Developer specializing in Flutter, React, and .NET Core.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 items-center justify-center">
          {socials.map(({ icon: Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg rounded-full p-3"
            >
              <Icon className="text-blue-600" size={24} />
            </a>
          ))}
        </div>

        {/* Buttons (About & Projects) */}
        <div className="flex gap-6 mt-6">
          <a
            href="#about"
            className="px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:shadow-lg transition"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="px-5 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
