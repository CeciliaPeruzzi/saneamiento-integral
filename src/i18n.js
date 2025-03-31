import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18n as nextI18NextConfig } from '../next-i18next.config.mjs'; // Asegúrate que la ruta sea correcta

import commonEn from '../public/locales/en/common.json';
import commonEs from '../public/locales/es/common.json';


i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: commonEn },
      es: { common: commonEs },
    },
    fallbackLng: nextI18NextConfig.defaultLocale,
    lng: nextI18NextConfig.defaultLocale,
    interpolation: { escapeValue: false },
  });

export default i18next;