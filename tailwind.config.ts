import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#c3aa62",
          light: "#d4bf85",
          dark: "#a68f4e",
        },
        accent: {
          DEFAULT: "#c3aa62",
          light: "#d4bf85",
        },
        godrej: {
          green: "#c3aa62",
          "green-light": "#d4bf85",
          accent: "#c3aa62",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
