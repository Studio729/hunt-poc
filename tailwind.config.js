const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        sans: ["Hknova Webfont", "Kanit"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          50: "#e0fef3",
          100: "#b3fce1",
          200: "#80face",
          300: "#4df7ba",
          400: "#26f6ab",
          500: "#00f49c",
          600: "#00f394",
          700: "#00f18a",
          800: "#00ef80",
          900: "#00ec6e",
          foreground: "rgb(var(--background))",
          DEFAULT: "#00f49c",
        },
        secondary: {
          50: "#e1edfe",
          100: "#b4d2fd",
          200: "#82b5fc",
          300: "#5097fb",
          400: "#2b80fa",
          500: "#056af9",
          600: "#0462f8",
          700: "#0457f7",
          800: "#034df6",
          900: "#013cf5",
          foreground: "rgb(var(--foreground))",
          DEFAULT: "#056af9",
        },
        huntressblue: {
          50: "#e1f8f9",
          100: "#b3eef1",
          200: "#80e2e8",
          300: "#4dd6df",
          400: "#27ced8",
          500: "#01c5d1",
          600: "#01bfcc",
          700: "#01b8c6",
          800: "#01b0c0",
          900: "#00a3b5",
          foreground: "rgb(var(--background))",
          DEFAULT: "#01c5d1",
        },
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
    animation: {
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      fadeIn: "fadeIn 200ms ease",
      fadeOut: "fadeOut 200ms ease",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },
  plugins: [],
}
