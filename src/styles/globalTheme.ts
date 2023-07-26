import { createTheme } from "@mui/material";
import { Data } from "../data/global";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // xxs:true;
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // mobile: true; // adds the `mobile` breakpoint
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      // xxs:0,
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  },
  palette: {
    primary: {
      main: '#6772e5',
      light: '#838deb',
      dark: '#3e42c6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2c3161',
      light: '#3f4c86',
      dark: '#1d224f',
      contrastText: "#fff",
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: Data.HEADING_FONT_SIZE,
      lineHeight: Data.HEADING_LINE_HEIGHT,
      fontWeight: Data.HEADING_FONT_WEIGHT,
      color: Data.HEADING_COLOR,
    },
    h2: {
      fontSize: Data.HEADING_FONT_SIZE,
      lineHeight: Data.HEADING_LINE_HEIGHT,
      fontWeight: Data.HEADING_FONT_WEIGHT,
      color: Data.HEADING_COLOR,
    },
    h3: {
      fontSize: Data.SUB_HEADING_FONT_SIZE,
      lineHeight: Data.SUB_HEADING_LINE_HEIGHT,
      fontWeight: Data.SUB_HEADING_FONT_WEIGHT,
      color: Data.SUB_HEADING_COLOR,
    },
    h4: {
      fontSize: Data.SUB_HEADING_FONT_SIZE,
      lineHeight: Data.SUB_HEADING_LINE_HEIGHT,
      fontWeight: Data.SUB_HEADING_FONT_WEIGHT,
      color: Data.SUB_HEADING_COLOR,
    },
    h5: {
      fontSize: Data.SUB_HEADING_FONT_SIZE,
      lineHeight: Data.SUB_HEADING_LINE_HEIGHT,
      fontWeight: Data.SUB_HEADING_FONT_WEIGHT,
      color: Data.SUB_HEADING_COLOR,
    },
    h6: {
      fontSize: Data.SUB_HEADING_FONT_SIZE,
      lineHeight: Data.SUB_HEADING_LINE_HEIGHT,
      fontWeight: Data.SUB_HEADING_FONT_WEIGHT,
      color: Data.SUB_HEADING_COLOR,
    },
    body1: {
      fontWeight: Data.PARAGRAPH_FONT_WEIGHT,
      fontSize: Data.PARAGRAPH_FONT_SIZE,
      lineHeight: Data.PARAGRAPH_LINE_HEIGHT,
      color: Data.PARAGRAPH_COLOR,
    },
    body2: {
      fontWeight: Data.PARAGRAPH_FONT_WEIGHT,
      fontSize: Data.PARAGRAPH_FONT_SIZE,
      lineHeight: Data.PARAGRAPH_LINE_HEIGHT,
      color: Data.PARAGRAPH_COLOR,
    }
  }
});

export default theme;