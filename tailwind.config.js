/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bai Jamjuree, Graphik", "Inter", "sans-serif,"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://i.pinimg.com/564x/67/6a/77/676a77e2614f48ff5a3befca984d5bd2.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
