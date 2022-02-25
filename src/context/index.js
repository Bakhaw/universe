import { createContext, useState } from "react";
import i18n from "i18next";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("fr");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "fr" ? "en" : "fr";

    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <StateContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </StateContext.Provider>
  );
};
