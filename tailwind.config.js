/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Nuxt config'de eklediğimiz Outfit fontunu varsayılan yapalım
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        // Etheera Tech'e özel koyu tonları özelleştirebiliriz
        // Standart slate-900 kullanıyoruz ama buraya özel renk de ekleyebilirsiniz.
      },
    },
  },
  plugins: [],
};
