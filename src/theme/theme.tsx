import { createTheme, colors } from "@mui/material";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: "Popins, sans-serif",
  },
  color: {
    black: "#000000",
    white: "#ffffff",
    grays: {
      d4: "#484B4D",
      d3: "#5E6061",
      d2: "#797A7A",
      d1: "#89898A",
      base: "#999999",
      l1: "#B8B8B8",
      l2: "#CCCCCC",
      l3: "#E6E6E6",
      l4: "#F5F5F5",
      l5: "#FAFAFA",
    },
    primary: "#0E5FAF",
    accent: "#FA9507",
    success: {
      d4: "#224E3A",
      d3: "#196540",
      d2: "#0E8247",
      d1: "#07944C",
      base: "#00A550",
      l1: "#4DC085",
      l2: "#80D2A8",
      l3: "#BFE9D3",
      l4: "#E6F6EE",
      l5: "#F2FBF6",
    },
    alerts: {
      d4: "#5E562A",
      d3: "#857323",
      d2: "#B6981A",
      d1: "#D4AE14",
      base: "#F1C40F",
      l1: "#F5D657",
      l2: "#F8E287",
      l3: "#FCF0C3",
      l4: "#FEF9E7",
      l5: "#FEFCF3",
    },
    errors: {
      d4: "#3A1010",
      d3: "#691C1D",
      d2: "#A32B2D",
      d1: "#C63536",
      base: "#E93E40",
      l1: "#F07879",
      l2: "#F49FA0",
      l3: "#FACFCF",
      l4: "#FDECEC",
      l5: "#FFF6F6",
    },
    facebook: "#3B5998",
    twitter: "#55ACEE",
    google: "#D34836",
    youtube: "#BB0000",
    whatsapp: "#00A544",
    instagram: "#8A3AB9",
  },
  palette: {
    primary: {
      main: "#0E5FAF",
      light: "#99BCDE",
    },
    secondary: {
      main: "#fafafa",
      dark: "#7e7d7d",
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
