import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        bone: "#EDE8E1",
        brand: {
          DEFAULT: "#E6050D",
          400: "#FF3B40",
          500: "#E6050D",
          600: "#C40409",
          700: "#9E0307",
        },
        neutral: {
          950: "#050505",
          900: "#0B0B0C",
          850: "#101011",
          800: "#151517",
          700: "#1D1D20",
          600: "#2A2A2E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-ar)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { container: "1240px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-rtl": { from: { transform: "translateX(0)" }, to: { transform: "translateX(50%)" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulse2: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".35" } },
        draw: { from: { strokeDashoffset: "24" }, to: { strokeDashoffset: "0" } },
        grow: { from: { transform: "scaleY(0)" }, to: { transform: "scaleY(1)" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-rtl": "marquee-rtl 45s linear infinite",
        "fade-up": "fade-up .9s cubic-bezier(.16,1,.3,1) both",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
