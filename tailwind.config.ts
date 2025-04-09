import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a192f", // typical dark bg
        navy: "#112240", // deeper navy
        primary: "#64ffda", // bright teal accent
        accent: "#8892b0", // subtle text color
      },
    },
  },
  plugins: [],
};

export default config;
