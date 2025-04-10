import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class", // We allow a theme toggle if desired
  theme: {
    extend: {
      colors: {
        // Unified dark theme
        background: {
          DEFAULT: "#0F172A", // Main dark tone
          gradientStart: "#0F172A", // Start of gradient
          gradientEnd: "#1E293B", // End of gradient
        },
        primary: "#4F46E5", // Indigo (used for headings/branding)
        accent: "#10B981", // Emerald (used as a highlight)
        card: "#1E293B", // For cards and container backgrounds
        text: "#F8FAFC", // Light text (nearly white)
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
