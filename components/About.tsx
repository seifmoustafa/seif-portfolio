"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      
      id="about"
      className="py-24 bg-white dark:bg-[#0f172a]"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg leading-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I have <strong>2&nbsp;years</strong> of building cross-platform mobile
          apps with <strong>Flutter</strong>, a <strong>year</strong> of
          creating interactive UIs in <strong>React</strong>, and another
          <strong> year</strong> implementing robust, RESTful backends with
          <strong> .NET&nbsp;Core</strong>. My passion is to transform complex
          ideas into practical, high-performance applications that users love.
        </motion.p>
      </div>
    </section>
  );
}
