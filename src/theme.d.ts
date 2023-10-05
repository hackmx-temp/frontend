import { PaletteColor, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // To create new object inside theme
  interface Theme {
    typography: {
      fontFamily: string;
    };
    color: {
      black: string;
      white: string;
      grays: {
        d4: string;
        d3: string;
        d2: string;
        d1: string;
        base: string;
        l1: string;
        l2: string;
        l3: string;
        l4: string;
        l5: string;
      };
      primary: string;
      accent: string;
      success: {
        d4: string;
        d3: string;
        d2: string;
        d1: string;
        base: string;
        l1: string;
        l2: string;
        l3: string;
        l4: string;
        l5: string;
      };
      alerts: {
        d4: string;
        d3: string;
        d2: string;
        d1: string;
        base: string;
        l1: string;
        l2: string;
        l3: string;
        l4: string;
        l5: string;
      };
      errors: {
        d4: string;
        d3: string;
        d2: string;
        d1: string;
        base: string;
        l1: string;
        l2: string;
        l3: string;
        l4: string;
        l5: string;
      };
      facebook: string;
      twitter: string;
      google: string;
      youtube: string;
      whatsapp: string;
      instagram: string;
    };
  }

  // To create new object inside theme
  interface ThemeOptions {
    color: {
      black: React.CSSProperties["color"];
      white: React.CSSProperties["color"];
      grays: {
        d4: React.CSSProperties["color"];
        d3: React.CSSProperties["color"];
        d2: React.CSSProperties["color"];
        d1: React.CSSProperties["color"];
        base: React.CSSProperties["color"];
        l1: React.CSSProperties["color"];
        l2: React.CSSProperties["color"];
        l3: React.CSSProperties["color"];
        l4: React.CSSProperties["color"];
        l5: React.CSSProperties["color"];
      };
      primary: React.CSSProperties["color"];
      accent: React.CSSProperties["color"];
      success: {
        d4: React.CSSProperties["color"];
        d3: React.CSSProperties["color"];
        d2: React.CSSProperties["color"];
        d1: React.CSSProperties["color"];
        base: React.CSSProperties["color"];
        l1: React.CSSProperties["color"];
        l2: React.CSSProperties["color"];
        l3: React.CSSProperties["color"];
        l4: React.CSSProperties["color"];
        l5: React.CSSProperties["color"];
      };
      alerts: {
        d4: React.CSSProperties["color"];
        d3: React.CSSProperties["color"];
        d2: React.CSSProperties["color"];
        d1: React.CSSProperties["color"];
        base: React.CSSProperties["color"];
        l1: React.CSSProperties["color"];
        l2: React.CSSProperties["color"];
        l3: React.CSSProperties["color"];
        l4: React.CSSProperties["color"];
        l5: React.CSSProperties["color"];
      };
      errors: {
        d4: React.CSSProperties["color"];
        d3: React.CSSProperties["color"];
        d2: React.CSSProperties["color"];
        d1: React.CSSProperties["color"];
        base: React.CSSProperties["color"];
        l1: React.CSSProperties["color"];
        l2: React.CSSProperties["color"];
        l3: React.CSSProperties["color"];
        l4: React.CSSProperties["color"];
        l5: React.CSSProperties["color"];
      };
      facebook: React.CSSProperties["color"];
      twitter: React.CSSProperties["color"];
      google: React.CSSProperties["color"];
      youtube: React.CSSProperties["color"];
      whatsapp: React.CSSProperties["color"];
      instagram: React.CSSProperties["color"];
    };
  }

  // To create new object inside palette
  interface Palette {
    neutral?: PaletteColor;
  }

  // To create new object inside palette
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  // To create new option inside a color in palette
  interface SimplePaletteColorOptions {
    darker?: string;
  }

  // To create new option inside a color in palette
  interface PaletteColor {
    darker?: string;
  }
}
