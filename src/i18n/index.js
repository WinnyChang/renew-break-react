import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import sidebarEn from './sidebar/en';
import sidebarZh from './sidebar/zh';

import howToUseEn from './pages/howToUse/en';
import howToUseZh from './pages/howToUse/zh';
import whyRestEn from './pages/whyRest/en';
import whyRestZh from './pages/whyRest/zh';

const resources = {
  en: {
    translation: {
      sidebar: {...sidebarEn},
      howToUse: {...howToUseEn},
      whyRest: {...whyRestEn}
    }
  },
  zh: {
    translation: {
      sidebar: {...sidebarZh},
      howToUse: {...howToUseZh},
      whyRest: {...whyRestZh}
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;