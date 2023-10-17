import { PropsWithChildren } from "react";
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "../theme";
import {CssBaseline} from "@mui/material";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
  )
};
