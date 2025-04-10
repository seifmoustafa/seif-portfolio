"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AppVanguard is a team of forward-thinking software professionals
          dedicated to building innovative and scalable solutions. Our expertise
          spans mobile, web, and backend development, allowing us to transform
          complex challenges into elegant, high-performance software.
        </motion.p>
      </div>
    </section>
  );
}
