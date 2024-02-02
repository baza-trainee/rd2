import {createContext, PropsWithChildren, useState} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";

import { CssBaseline } from "@mui/material";
import i18next from "translation/i18next";

import { theme } from "theme/theme";
import { clientConfig } from "configs/clientQuery.config";

import {CacheContextType} from "./types/typeContext";

export const CacheContext = createContext<CacheContextType>({
    cache: {
        emailIsLoaded: false,
        phoneIsLoaded: false,
        logosIsLoaded: false,
    },
    setCache: () => {},
});
export const queryClient = new QueryClient(clientConfig);

export const App = ({ children }: PropsWithChildren): JSX.Element => {
    const defaultContextValue = {
        emailIsLoaded: false,
        phoneIsLoaded: false,
        logosIsLoaded: false,
    }

    const [cache, setCache] = useState(defaultContextValue);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <I18nextProvider i18n={i18next}>
        <CacheContext.Provider value={{cache,setCache}}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </CacheContext.Provider>
      </I18nextProvider>
    </ThemeProvider>
  );
};
