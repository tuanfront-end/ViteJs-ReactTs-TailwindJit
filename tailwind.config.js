const colors = require("tailwindcss/colors");

module.exports = {
  important: "body",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    options: {
      safelist: [
        /^grid-cols-/,
        /^sm:grid-cols-/,
        /^md:grid-cols-/,
        /^lg:grid-cols-/,
        /^xl:grid-cols-/,
        //
        /^gap-/,
        /^sm:gap-/,
        /^md:gap-/,
        /^lg:gap-/,
        /^xl:gap-/,
      ],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        xl: "32px",
        "2xl": "48px",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
      //
      "sub-title-540": "10px",
    },
    fontFamily: {
      display: ["Jost", "system-ui", "sans-serif"],
      LibreFranklin: ["LibreFranklin", "system-ui", "sans-serif"],
      LineAwesome: ["Line Awesome Free", "system-ui", "sans-serif"],
      Flaticon: ["Flaticon", "system-ui", "sans-serif"],
      icomoon: ["icomoon", "system-ui", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      //
      primary: "#1c1c1c",
      secondary: "#c62447",
      black: "#1c1c1c",
      white: "#fff",
      //
      status: {
        success: "#287D3C",
        warning: "#B95000",
        error: "#DA1414",
        info: "#2E5AAC",
      },
      statusBg: {
        successBg: "#EDF9F0",
        warningBg: "#FFF4EC",
        errorBg: "#FEEFEF",
        infoBg: "#EEF2FA",
      },
      facebook: "#325D94",
      googlePlus: "#DF2E1C",
      twitter: "#00AADB",
      accents: {
        900: "#99a8b2",
        800: "#aab9c2",
        600: "#d5dbdf",
      },
    },
    extend: {
      outline: {},
      animation: {
        "spin-fast": "spin 500ms linear infinite",
      },
      borderColor: {
        secondary: "#c62447",
        // --- not yet use
        primary: "#FFDCBE",
        tertiary: "#F57171",
        quateary: "#311695",
        //
        black: "#000",
        white: "#fff",
        accents: {
          900: "#99a8b2",
          800: "#aab9c2",
          600: "#d5dbdf",
        },
      },
      boxShadow: {},
      zIndex: {
        "-1": "-1",
        max: 2147483647,
      },
      spacing: {},
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
      },

      borderRadius: {},
      margin: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "-1px": "-1px",
        "-2px": "-2px",
        "-3px": "-3px",
      },
      padding: {
        //
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "90px": "5.625rem",
        //
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
      flexDirection: ["hover", "focus", "dark"],
      display: ["hover", "focus", "group-hover", "group-focus", "dark"],
      backgroundOpacity: ["hover", "group-hover", "dark"],
      fontWeight: ["hover", "group-hover", "focus"],
      backgroundColor: ["checked", "disabled"],
      textColor: ["disabled"],
      borderColor: ["checked"],
      translate: ["active", "group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
