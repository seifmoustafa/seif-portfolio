"use client";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Mobile Development",
    years: "Expertise",
    text: "Building cross-platform mobile apps with Flutter.",
  },
  {
    title: "Web Development",
    years: "Expertise",
    text: "Crafting responsive and dynamic web applications with React.",
  },
  {
    title: "Backend Engineering",
    years: "Expertise",
    text: "Designing secure and scalable RESTful APIs with .NET Core.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Expertise
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              className="rounded-xl bg-black/40 p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-primary mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-gray-300">{s.years}</p>
              <p className="mt-2 text-gray-200">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
