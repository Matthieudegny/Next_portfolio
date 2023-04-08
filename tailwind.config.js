/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "Playfair Display",
        abril: "Abril_Fatface",
        Montserrat: "Montserrat",
        MontserratLight: "Montserrat light",
      },
      colors: {
        "primary-color": "var(--primary-color)",
      },
      height: {
        "5v": "5vh",
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      minHeight: {
        "40v": "40vh",
      },
      lineHeight: {
        "78px": "78px",
      },
      animation: {
        slidein: "slidein 1s ease-out forwards",
      },
      keyframes: {
        slidein: {
          from: {
            transform: "translateY(85%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
