/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#758976",
        "light-green": "#A2ABA1",
        "dark-green": "#4A5B4D",
        beige: "#EBE5D9",
        purple: "#9E83B8",
        "dark-purple": "#6F4C7A",
        cyan: "#e3ecffff",
        "dark-cyan": "#e2cee5ff",
      },
      keyframes: {
        'scroll-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-loop': 'scroll-loop 20s linear infinite',
      },
    },
  },

  plugins: [],
};
