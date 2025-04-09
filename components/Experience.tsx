"use client";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Flutter",
    years: "2 yrs",
    text: "Cross-platform mobile apps with Dart",
  },
  {
    title: "React.js",
    years: "1 yr",
    text: "Dynamic, responsive SPAs",
  },
  {
    title: ".NET Core",
    years: "1 yr",
    text: "Secure, scalable RESTful backends",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#1e293b]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              className="p-6 bg-white dark:bg-[#0f172a] rounded-xl shadow-lg hover:shadow-xl transition flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-primary mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {s.years}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
