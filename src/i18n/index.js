import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sidebarEn from './sidebar/en';
import sidebarZh from './sidebar/zh';

import howToUseEn from './pages/howToUse/en';
import howToUseZh from './pages/howToUse/zh';

const resources = {
  en: {
    translation: {
      sidebar: {...sidebarEn},
      howToUse: {...howToUseEn},
    }
  },
  zh: {
    translation: {
      sidebar: {...sidebarZh},
      howToUse: {...howToUseZh},
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;