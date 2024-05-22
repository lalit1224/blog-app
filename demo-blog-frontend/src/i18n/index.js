import i18next from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import lt from "./translations/lt.json";
import hi from "./translations/hi.json";

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      lt,
      hi,
    },
    load: "languageOnly",
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "en",
    whitelist: ["lt", "en","hi"],
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });
