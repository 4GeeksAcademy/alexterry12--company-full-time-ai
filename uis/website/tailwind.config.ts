import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#dff1ff",
          500: "#0e7490",
          700: "#155e75",
          900: "#0c2f3d",
        },
        accent: "#d97706",
      },
    },
  },
  plugins: [],
};

export default config;
