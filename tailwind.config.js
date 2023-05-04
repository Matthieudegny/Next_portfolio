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
        "second-color": "var(--second-color)",
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
        "55v": "55vh",
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
        "300px": "300px",
      },
      width: {
        "50%": "50%",
        "600px": "600px",
        "98%": "98%",
      },
      left: {
        "15%": "15%",
        "50%": "50%",
      },
      top: {
        "50%": "50%",
      },
      padding: {
        "30vw": "30vw",
        "4rem": "4rem",
        "5rem": "5rem",
      },
      margin: {
        "5rem": "5rem",
        "15rem": "20rem",
        "35rem": "35rem",
        "25%": "25%",
        "50%": "50%",
        "75%": "75%",
      },
      minHeight: {
        "20v": "20vh",
        "40v": "40vh",
        "60v": "60vh",
      },
      lineHeight: {
        "65px": "65px",
      },
      backgroundImage: {
        dalleAssistant: "url('../public/dalleAssistant.png')",
        shareYourPrompt: "url('../public/shareYourPrompt.png')",
        myDashboard: "url('../public/myDashboard.png')",
      },
      animation: {
        gradient: "gradient 7s ease infinite",
        slidein: "slidein 0.5s ease-out forwards",
        slideinNav: "0.25s slideinNav 1s ease-out forwards",
        slideinNav: "0.25s slideinNav 1.05s ease-out forwards",
        slideinNav: "0.25s slideinNav 1.1s ease-out forwards",
        rotateH3: "1s rotateH3 1s ease-in-out forwards",
      },
      zIndex: {
        n: "-1",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },

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
      transform: ["hover"],
      backgroundClipText: ["responsive"],
    },
  },
  plugins: [],
};
