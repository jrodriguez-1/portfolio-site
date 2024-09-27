import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.8)',
        primary: {
          500: '#2563eb', // your primary color
          600: '#1e40af', // darker shade for hover
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },

  animation: {
    fade: 'fadeIn 1.5s ease-in-out',
    },
    keyframes: {
    fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    },
    },

  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'html, body': { padding: 0, margin: 0, width: '100%', height: '100%', overflowX: 'hidden' },
        'body': { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
        '#__next': { flex: 1, display: 'flex', flexDirection: 'column' },
      })
    },
  ],
};
export default config;