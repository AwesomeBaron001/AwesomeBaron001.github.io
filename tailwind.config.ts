import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF8",
        "text-primary": "#1A1A1A",
        "text-secondary": "#6B6B6B",
        accent: "#C8A97E",
      },
      fontFamily: {
        serif: [
          "var(--font-noto-serif-sc)",
          "var(--font-lora)",
          "serif",
        ],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "672px",
      },
    },
  },
  plugins: [],
};

export default config;
