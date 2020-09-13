import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { translationEN, translationFR } from "./locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: { ...translationEN },
      fr: { ...translationFR },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translation", "chekout", "home", "pricing"],
    defaultNS: "translation",

    // keySeparator: false, // we use content as keys
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
