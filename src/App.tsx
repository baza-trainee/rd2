import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

import { CssBaseline } from "@mui/material";
import i18next from "translation/i18next";

import { theme } from "theme/theme";

const queryClient = new QueryClient();

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};
