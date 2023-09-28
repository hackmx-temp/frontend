import { createTheme, colors } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  color: {
    danger: "#e53e3e",
    white: "#ffffff",
    darkWhite: "#f8f8f8",
    stone: "#d9d9d9",
    icy: "#e3eeff",
    skyline: "#05a8ff",
    cobalt: "#255ed1",
    navy: "#002569",
    space: "#011740",
    star: "#f5c142",
    scarlet: "#d10606",
    sheen: "#4bae4f",
    gray: "#7e7d7d",
    steel: "#57697d",
    midnight: "#0b0d17",
    black: "#000000",
  },
  palette: {
    primary: {
      main: "#0E5FAF",
      dark: "#114980",
    },
    secondary: {
      main: "#FA9507",
      dark: "#CB7D10",
    },
    error: {
      main: colors.red.A400,
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[800],
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
