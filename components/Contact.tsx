"use client";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail, FiCoffee } from "react-icons/fi";

interface Social {
  icon: ReactElement;
  label: string;
  url: string;
}

const socials: Social[] = [
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/seif-moustafa-60115f/",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    url: "https://github.com/seifmoustafa/seifmoustafa",
  },
  {
    icon: <FiCoffee />,
    label: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/seifmoustafa",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#1e293b]">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-100">
          Contact
        </h2>
        <p className="mb-12 text-gray-700 dark:text-gray-300 leading-7">
          Have a project in mind, a question, or just want to say hi?
          <br className="hidden md:block" />
          Let’s connect and build something amazing together!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {socials.map(({ icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="w-40 bg-white dark:bg-[#0f172a] p-4 rounded-lg shadow
                         hover:shadow-lg flex flex-col items-center
                         transition-colors"
            >
              {icon}
              <span className="mt-2 text-sm">{label}</span>
            </a>
          ))}
        </div>

        <a
          href="mailto:youremail@example.com"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <FiMail /> seif.moustafa516@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
