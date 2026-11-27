import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tarian: {
          50: "#f1f8f2",
          100: "#ddeede",
          500: "#2f8f4e",
          600: "#237a40",
          700: "#1b5e32",
          900: "#0f3a1f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
