// src/contexts/LanguageContext.jsx
import { createContext } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}