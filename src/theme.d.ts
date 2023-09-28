import { PaletteColor, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  // To create new object inside theme
  interface Theme {
    color: {
      danger: string;
      white: string;
      darkWhite: string;
      stone: string;
      icy: string;
      skyline: string;
      cobalt: string;
      navy: string;
      space: string;
      star: string;
      scarlet: string;
      sheen: string;
      gray: string;
      steel: string;
      midnight: string;
      black: string;
    };
  }

  // To create new object inside theme
  interface ThemeOptions {
    color: {
      danger: React.CSSProperties["color"];
      white: React.CSSProperties["color"];
      darkWhite: React.CSSProperties["color"];
      stone: React.CSSProperties["color"];
      icy: React.CSSProperties["color"];
      skyline: React.CSSProperties["color"];
      cobalt: React.CSSProperties["color"];
      navy: React.CSSProperties["color"];
      space: React.CSSProperties["color"];
      star: React.CSSProperties["color"];
      scarlet: React.CSSProperties["color"];
      sheen: React.CSSProperties["color"];
      gray: React.CSSProperties["color"];
      steel: React.CSSProperties["color"];
      midnight: React.CSSProperties["color"];
      black: React.CSSProperties["color"];
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
