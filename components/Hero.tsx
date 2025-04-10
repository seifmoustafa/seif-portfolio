"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated SVG Wave Background */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#4F46E5">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,186.7C672,192,768,128,864,128C960,128,1056,192,1152,229.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,192L48,186.7C96,181,192,139,288,138.7C384,139,480,181,576,192C672,203,768,181,864,154.7C960,128,1056,64,1152,48C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,186.7C672,192,768,128,864,128C960,128,1056,192,1152,229.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center mt-16 max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4 text-white">
          Welcome to <span className="text-accent">AppVanguard</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          A dynamic team delivering innovative software solutions.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-accent text-background font-semibold rounded-md shadow-lg hover:shadow-2xl hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent cursor-pointer"
        >
          Let’s Talk
        </a>
      </motion.div>
    </section>
  );
}
