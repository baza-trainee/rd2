import { createTheme } from "@mui/material/styles";

import { themeHeaders } from "./typography";
import { globalOverrides } from "./styleOverrides";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
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
          "@media (min-width:576px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          "@media (min-width:768px)": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "none",
          borderRadius: "0",
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
          color: "#f5f5f5",
          boxShadow: "none",
          ":hover": { boxShadow: "none" },
        },
      },
    },
  },
});

export { theme };
