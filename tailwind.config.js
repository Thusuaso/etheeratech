/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#E9E7E2",
        panel: "#DFDCD5",
        ink: "#14171B",
        graphite: "#5B6169",
        rule: "#C6C2BA",
        cobalt: "#1B3FCB",
        oxide: "#A6431E",
      },
      fontFamily: {
        display: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Newsreader", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.12em",
      },
    },
  },
  plugins: [],
};
