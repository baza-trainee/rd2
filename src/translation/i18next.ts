import { initReactI18next } from "react-i18next";
import i18next, { InitOptions } from "i18next";

import { resources } from "translation/i18next.resources";

const initOptions: InitOptions = {
  debug: true,
  fallbackLng: "ua",
  defaultNS: "translation",
  resources,
  lng: "ua",
  interpolation: {
    escapeValue: false,
  },
};

i18next.use(initReactI18next).init(initOptions);

export default i18next;
