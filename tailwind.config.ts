import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#08090D",
          secondary: "#10121A",
          card: "#141722",
          "card-hover": "#1A1E2D",
        },
        foreground: {
          DEFAULT: "#F5F5F7",
          secondary: "#9A9EAA",
          muted: "#5E6375",
        },
        accent: {
          blue: "#6C8CFF",
          cyan: "#58D8F0",
          glow: "rgba(108, 140, 255, 0.18)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(108, 140, 255, 0.4)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "star-movement-bottom": "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0.2" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
