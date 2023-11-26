import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";

import { CssBaseline } from "@mui/material";
import i18next from "translation/i18next";

import { theme } from "theme/theme";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </ThemeProvider>
  );
};
