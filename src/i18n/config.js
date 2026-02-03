import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUA from './locales/ua/translation.json';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import tarotCardsUA from './locales/ua/tarotCards.json';
import tarotCardsEN from './locales/en/tarotCards.json';
import tarotCardsRU from './locales/ru/tarotCards.json';

const resources = {
  ua: {
    translation: translationUA,
    tarotCards: tarotCardsUA
  },
  en: {
    translation: translationEN,
    tarotCards: tarotCardsEN
  },
  ru: {
    translation: translationRU,
    tarotCards: tarotCardsRU
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ua', // мова за замовчуванням
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
