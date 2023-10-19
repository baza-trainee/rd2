import {createTheme} from "@mui/material/styles";

import OpenSansBoldWoff2 from  "../src/assets/fonts/OpenSans-Bold.woff2";
import OpenSansBoldWoff from  "../src/assets/fonts/OpenSans-Bold.woff";
import OpenSansSemiBoldWoff2 from  "../src/assets/fonts/OpenSans-SemiBold.woff2";
import OpenSansSemiBoldWoff from  "../src/assets/fonts/OpenSans-SemiBold.woff";
import OpenSansRegularWoff2 from  "../src/assets/fonts/OpenSans-Regular.woff2";
import OpenSansRegularWoff from  "../src/assets/fonts/OpenSans-Regular.woff";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1360,
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
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 600,
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
             a {
                text-decoration: none;
            } 
            p {
                margin: 0
            }
            color: #151515;
            @font-face {
              font-family: 'OpenSans';
              src: url(${OpenSansRegularWoff2}) format('woff2'),
                   url(${OpenSansRegularWoff}) format('woff');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'OpenSans';
              src: url(${OpenSansSemiBoldWoff2}) format('woff2'),
                   url(${OpenSansSemiBoldWoff}) format('woff');
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }    
            @font-face {
              font-family: 'OpenSans';
              src: url(${OpenSansBoldWoff2}) format('woff2'),
                   url(${OpenSansBoldWoff}) format('woff');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
        `,
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