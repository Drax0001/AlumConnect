import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"]
      },
      colors: {
        primary: '#007058',
        primaryLight: '#c9daa6',
        tertiary: '#663634',
        textGray: '#777777',
        backgroundGray: '#DDDDDD'
      }
    },
  },
  plugins: [],
};
export default config;
