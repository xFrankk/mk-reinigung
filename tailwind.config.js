module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"]
      },
      backgroundImage: {
        hmarta1: "url('/img/hmarta1.jpg')",
        hmarta2: "url('/img/hmarta2.jpg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
