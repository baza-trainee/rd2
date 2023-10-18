import { PropsWithChildren } from "react";
import {ThemeProvider} from "@mui/material/styles";

import {CssBaseline} from "@mui/material";

import {theme} from "../theme";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
};
