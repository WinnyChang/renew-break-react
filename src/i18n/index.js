import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      appName: "RenewBreak",

      timers: "Timers",
      howToUse: "How to Use",
      whyRest: "Why Rest ?",

      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      switchMode: "Switch Mode",
      language: "English",
      switchLanguage: "Switch Language (切換語言)"
    }
  },
  zh: {
    translation: {
      appName: "站停休息鐘",

      timers: "計時器",
      howToUse: "使用方式",
      whyRest: "為什麼要休息？",
    
      darkMode: "深色模式",
      lightMode: "淺色模式",
      switchMode: "切換模式",
      language: "繁體中文",
      switchLanguage: "切換語言 (Switch Language)"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;