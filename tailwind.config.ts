import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nivx brand system
        ink: "#000000",
        paper: "#FFFFFF",
        brand: {
          DEFAULT: "#E6050D",
          50: "#FFE9EA",
          100: "#FFC9CB",
          500: "#E6050D",
          600: "#C40409",
          700: "#9E0307",
        },
        neutral: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#0F0F10",
          800: "#141416",
          700: "#1C1C1F",
          600: "#2A2A2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1.2s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
