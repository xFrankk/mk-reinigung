module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Signika"]
      },
      backgroundImage: {
        woman: "url('/img/woman.jpg')",
        food: "url('/img/food.png')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
