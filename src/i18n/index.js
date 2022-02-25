import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./data/en";
import FR from "./data/fr";

const resources = {
  en: EN,
  fr: FR,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
