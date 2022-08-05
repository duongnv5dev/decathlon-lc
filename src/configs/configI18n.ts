import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

const fallbackLng = process.env.REACT_APP_FALLBACK_LNG;

i18n.use(initReactI18next).use(HttpApi).init({
  lng: 'en',
  fallbackLng,
  debug: false,
});

export default i18n;
