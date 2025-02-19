import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sidebarEn from './sidebar/en';
import sidebarZh from './sidebar/zh';

const resources = {
  en: {
    translation: {
      sidebar: {...sidebarEn},
    }
  },
  zh: {
    translation: {
      sidebar: {...sidebarZh},
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;