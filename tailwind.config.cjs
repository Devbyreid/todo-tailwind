/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        panel: "#0b1220"
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.03)"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};
