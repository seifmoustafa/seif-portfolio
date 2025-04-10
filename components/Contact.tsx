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
    url: "https://www.linkedin.com/in/appvanguard/",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    url: "https://github.com/appvanguard",
  },
  {
    icon: <FiCoffee />,
    label: "Buy Us a Coffee",
    url: "https://buymeacoffee.com/appvanguard",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent transition-colors">
      <motion.div
        className="max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Contact Us
        </h2>
        <p className="mb-12 text-gray-200 leading-relaxed">
          Have a project idea or want to collaborate? Get in touch with us!
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {socials.map(({ icon, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 bg-black/40 p-4 rounded-lg shadow hover:shadow-2xl transition-colors"
            >
              {icon}
              <span className="mt-2 block text-sm text-gray-300">{label}</span>
            </a>
          ))}
        </div>
        <a
          href="mailto:appvanguard@gmail.com"
          className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
        >
          <FiMail size={20} /> appvanguard@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
