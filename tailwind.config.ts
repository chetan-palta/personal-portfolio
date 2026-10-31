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
        cosmos: {
          void: "#050608",
          deep: "#090A0F",
          card: "#0F111A",
          elevated: "#151824",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(99, 102, 241, 0.35)",
        },
        indigo: {
          electric: "#4F46E5",
          bright: "#6366F1",
          glow: "rgba(99, 102, 241, 0.22)",
        },
        violet: {
          deep: "#7C3AED",
          soft: "#8B5CF6",
          glow: "rgba(139, 92, 246, 0.18)",
        },
        cyan: {
          laser: "#06B6D4",
          soft: "#22D3EE",
          glow: "rgba(34, 211, 238, 0.18)",
        },
        silver: {
          pure: "#F8FAFC",
          muted: "#94A3B8",
          dark: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "spin-very-slow": "spin 45s linear infinite",
        "spin-reverse-slow": "spin-reverse 35s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
