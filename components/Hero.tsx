"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a192f]">
      {/* Animated SVG wave in the background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#64ffda">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,160L48,192C96,224,192,288,288,266.7C384,245,480,139,576,122.7C672,107,768,181,864,170.7C960,160,1056,64,1152,58.7C1248,53,1344,139,1392,181.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,
                288,320C192,320,96,320,48,320L0,320Z;
                
                M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,186.7C672,203,768,213,864,224C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,
                288,320C192,320,96,320,48,320L0,320Z;
                
                M0,160L48,192C96,224,192,288,288,266.7C384,245,480,139,576,122.7C672,107,768,181,864,170.7C960,160,1056,64,1152,58.7C1248,53,1344,139,1392,181.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,
                288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Optional overlay so text stands out more */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero content above the wave */}
      <motion.div
        className="relative z-10 px-4 max-w-2xl flex flex-col items-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Hello, I’m <span className="text-[#64ffda]">Seif Moustafa</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          A Full‑Stack Developer specializing in Flutter, React, and .NET Core.
        </p>

        {/* The “Let’s Talk” button is back here */}
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-md 
                     shadow hover:shadow-lg hover:bg-opacity-90 transition 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#64ffda]"
          style={{ cursor: "pointer" }}
        >
          Let’s Talk
        </a>
      </motion.div>
    </section>
  );
}
