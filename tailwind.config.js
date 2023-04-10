/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSansGeorgian: "NotoSansGeorgian",
        Montserrat_thin: "Montserrat_thin",
        Montserrat_regular: "Montserrat_regular",
        Montserrat_semibold: "Montserrat_semibold",
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
        "75v": "75vh",
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
        slideinNav: "0.7s slideinNav 0.7s ease-out forwards",
        slideinNav: "0.7s slideinNav 0.9s ease-out forwards",
        slideinNav: "0.7s slideinNav 1.1s ease-out forwards",
      },
      zIndex: {
        n: "-1",
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
        slideinNav: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
      },
      translateX: {
        "custom-translate-x": "10rem",
      },
    },
  },
  plugins: [],
};
