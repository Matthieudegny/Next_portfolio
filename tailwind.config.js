/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansGeorgian: "NotoSansGeorgian",
        Montserrat_thin: "Montserrat_thin",
        Montserrat_regular: "Montserrat_regular",
        Montserrat_semibold: "Montserrat_semibold",
        Playfair: "Playfair",
      },
      colors: {
        "primary-color": "var(--primary-color)",
      },
      height: {
        "1px": "1px",
        "5v": "5vh",
        "10v": "10vh",
        "15v": "15vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "45v": "45vh",
        "50v": "50vh",
        "60v": "60vh",
        "65v": "65vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "45%": "45%",
        "50%": "50%",
        "120%": "120%",
        "180v": "180vh",
      },
      width: {
        "50%": "50%",
      },
      left: {
        "15%": "15%",
        "50%": "50%",
      },
      top: {
        "50%": "50%",
      },
      padding: {
        "40vw": "40vw",
        "5rem": "5rem",
      },
      margin: {
        "5rem": "5rem",
        "15rem": "20rem",
      },

      minHeight: {
        "20v": "20vh",
        "40v": "40vh",
        "60v": "60vh",
      },
      lineHeight: {
        "50px": "50px",
      },
      backgroundImage: {
        dalleAssistant: "url('../public/dalleAssistant.png')",
        shareYourPrompt: "url('../public/shareYourPrompt.png')",
        myDashboard: "url('../public/myDashboard.png')",
      },
      animation: {
        slidein: "slidein 0.5s ease-out forwards",
        slideinNav: "0.25s slideinNav 0s ease-out forwards",
        slideinNav: "0.25s slideinNav 0.05s ease-out forwards",
        slideinNav: "0.25s slideinNav 0.1s ease-out forwards",
        rotateH3: "1s rotateH3 1s ease-in-out forwards",
      },
      zIndex: {
        n: "-1",
      },
      keyframes: {
        slideinProjectsItems: {
          from: {
            transform: "translateY(85%)",
          },
          to: {
            transform: "translateY(0%))",
          },
        },
        rotateH3: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1080deg)" },
        },

        slidein: {
          from: {
            transform: "translateY(85%) rotate(7deg)",
          },
          to: {
            transform: "translateY(0%) rotate(0deg)",
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

        slideOutNavMobile: {
          "0%": { transform: "translateX(0%)" },
          "95%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
      translateX: {
        "custom-translate-x": "10rem",
        "125%": "125%",
      },
      transitionProperty: {
        "background-color": "background-color 2s ease-in-out",
      },
      transitionDelay: {
        "400ms": "400ms",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"], // enable hover variant for background-color
    },
  },
  plugins: [],
};
