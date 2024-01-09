import { createTheme } from "@mui/material/styles";

import { themeHeaders } from "theme/typography";
import { globalOverrides } from "theme/styleOverrides";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 468,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },

  palette: {
    primary: {
      main: "#4285F4",
      light: "#ffffff",
    },
    secondary: {
      main: "#f5f5f5",
      light: "#ababab",
    },
    info: {
      main: "#1B3969",
    },
    error: {
      main: "#D60A0A",
    },
  },

  typography: {
    fontFamily: ["OpenSans, Roboto, sans-serif"].join(","),
    ...themeHeaders,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: globalOverrides,
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width:468px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          "@media (min-width:1280px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "5px 5px 0 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeMedium: {
          padding: "10px 40px",
        },
        sizeLarge: {
          padding: "20px 40px",
        },
        root: {
          borderRadius: "5px",
          textTransform: "capitalize",
          fontSize: "1.25rem",
          boxShadow: "none",
          ":hover": { boxShadow: "none" },
        },
        containedPrimary: {
          color: "#f5f5f5",
        },
      },
    },
  },
});
