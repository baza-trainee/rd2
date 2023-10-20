import { initReactI18next } from "react-i18next";
import i18next, { InitOptions, Resource } from "i18next";

import ukrainianLang from "translation/languages/ukrainian/ukrainian.language.json";
import englishLang from "translation/languages/english/english.language.json";
import frenchLang from "translation/languages/french/french.language.json";
import germanLang from "translation/languages/german/german.language.json";

const resources: Resource = {
  ukrainian: {
    translation: ukrainianLang,
  },
  english: {
    translation: englishLang,
  },
  french: {
    translation: frenchLang,
  },
  german: {
    translation: germanLang,
  },
};

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
