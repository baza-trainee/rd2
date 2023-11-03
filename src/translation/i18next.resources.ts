import { Resource } from "i18next";

import ukrainianLang from "translation/languages/ukrainian/ukrainian.language.json";
import englishLang from "translation/languages/english/english.language.json";
import frenchLang from "translation/languages/french/french.language.json";
import germanLang from "translation/languages/german/german.language.json";

export const resources: Resource = {
  ua: {
    translation: ukrainianLang,
  },
  en: {
    translation: englishLang,
  },
  fr: {
    translation: frenchLang,
  },
  gm: {
    translation: germanLang,
  },
};
