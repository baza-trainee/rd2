import {createTheme} from "@mui/material/styles";

import {themeHeaders} from "./typography";
import {globalOverrides} from "./styleOverrides";


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
    },
    secondary: {
      main: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: ["OpenSans, Roboto, sans-serif",
    ].join(","),
    ...themeHeaders,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: globalOverrides,
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
          ":hover": {boxShadow: "none"},
        },
      },
    },
  },
});

export {theme};