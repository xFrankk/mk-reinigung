module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Outfit"]
      },
      backgroundImage: {
        woman: "url('/img/woman.jpg')",
        food: "url('/img/food.png')",
        marta1: "url('/img/marta1.jpg')",
        marta4: "url('/img/marta4.jpg')",
        marta3: "url('/img/marta3.jpg')",
        marta2: "url('/img/marta2.jpg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
