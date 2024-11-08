import $ from "jquery";

const white: string = "white";
const lightGray: string = "#f0f0f0";
const darkGray: string = "#6c6c6c";
const black: string = "#1e1e1e";
const neonBlack: string = "#1a1a1a";
const yellow: string = "#f99c14";
const lightNum: string = "#ffffff";
const lightOp: string = "#ff9f0a";
const lightFunc: string = "#d4d4d2";
const neonCalc: string = "#1a1a1a";
const neonNum: string = "#2d2d2d";
const neonOp: string = "#cc00ff";
const neonFunc: string = "#005fff";
const neonText: string = "#4ade80";

interface ThemeColors {
  calculator: string;
  display: {
    background: string;
    text: string;
  };
  numbers: {
    background: string;
    text: string;
  };
  operators: {
    background: string;
    text: string;
  };
  function: {
    background: string;
    text: string;
  };
}

interface Themes {
  [key: string]: ThemeColors;
}

const themes: Themes = {
  dark: {
    //iOS default theme
    calculator: neonBlack,
    display: {
      background: black,
      text: white,
    },
    numbers: {
      background: darkGray,
      text: white,
    },
    operators: {
      background: yellow,
      text: white,
    },
    function: {
      background: lightGray,
      text: black,
    },
  },
  light: {
    calculator: lightGray,
    display: {
      background: darkGray,
      text: white,
    },
    numbers: {
      background: lightNum,
      text: black,
    },
    operators: {
      background: lightOp,
      text: white,
    },
    function: {
      background: lightFunc,
      text: black,
    },
  },
  neon: {
    calculator: neonCalc,
    display: {
      background: black,
      text: neonText,
    },
    numbers: {
      background: neonNum,
      text: neonText,
    },
    operators: {
      background: neonOp,
      text: white,
    },
    function: {
      background: neonFunc,
      text: white,
    },
  },
};

export const createThemeSwitcher = (): void => {
  const themeNames = ["light", "neon", "dark"];
  let currentThemeIndex = 0;
  const capitalizeTheme = (themeName: string): string => {
    return themeName.charAt(0).toUpperCase() + themeName.slice(1);
  };

  const $themeButton = $("<button>")
    .text(
      `Switch to ${capitalizeTheme(
        themeNames[(currentThemeIndex) % themeNames.length]
      )} mode`
    )
    .addClass("theme-button")
    .css({
      padding: "8px 16px",
      height: "40px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s",
      fontSize: "14px",
      position: "absolute",
      top: "10px",
      right: "20px",
      display: "flex",
      alignItems: "center",
      zIndex: "1000",
    })
    .on("click", () => {
      
      applyTheme(themeNames[currentThemeIndex]);
      console.log(`Applying theme: ${themeNames[currentThemeIndex]}`);
      currentThemeIndex = (currentThemeIndex + 1) % themeNames.length;

      const nextLabel = `Switch to ${capitalizeTheme(
        themeNames[(currentThemeIndex) % themeNames.length]
      )} mode`;
      $themeButton.text(nextLabel);
    })
    .appendTo(".container");
};

export const applyTheme = (themeName: string): void => {
  const theme = themes[themeName];
  $("#calculator").css({
    backgroundColor: theme.calculator,
    transition: "background-color 0.3s ease",
  });

  $("#display").css({
    backgroundColor: theme.display.background,
    color: theme.display.text,
  });

  $("button:not(.operators):not(.function)").css({
    backgroundColor: theme.numbers.background,
    color: theme.numbers.text,
    transition: "background-color 0.3s ease, transform 0.3s ease",
  });

  $("button.operators").css({
    backgroundColor: theme.operators.background,
    color: theme.operators.text,
  });

  $("button.function").css({
    backgroundColor: theme.function.background,
    color: theme.function.text,
  });

  $(
    ".theme-button:contains(${themeName.charAt(0).toUpperCase() + themeName.slice(1)})"
  ).css({
    backgroundColor: theme.operators.background,
    color: theme.operators.text,
  });
};

createThemeSwitcher();
applyTheme("dark");
