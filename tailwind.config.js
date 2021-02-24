module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 3s ease-in forwards",
      },
      keyFrames: {
        fadeIn: {
          "0%": { transform: "translate-y-full", opacity: 0 },
          "100%": { transform: "translate-y-0", opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
