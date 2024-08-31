import en from "./translations/en.json";
import fr from "./translations/fr.json";

const translations = { en, fr };

export const useTranslation = (locale) => {
  const t = translations[locale] ? translations[locale] : translations.en;
  return {
    t: (key) => t[key] || key,
  };
};
