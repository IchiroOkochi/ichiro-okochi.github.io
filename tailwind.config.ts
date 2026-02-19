import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "hsl(var(--surface))",
        border: "hsl(var(--border))",
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))"
      },
      boxShadow: {
        glow: "0 10px 30px -12px rgba(59,130,246,.45)"
      },
      animation: {
        pulseSoft: "pulseSoft 6s ease-in-out infinite"
      },
      keyframes: {
        pulseSoft: {
          "0%,100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.08)", opacity: "0.8" }
        }
      }
    }
  },
  plugins: []
};

export default config;
