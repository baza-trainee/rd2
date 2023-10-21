import ukrainianLang from "translation/languages/ukrainian/ukrainian.language.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof ukrainianLang;
    };
  }
}
