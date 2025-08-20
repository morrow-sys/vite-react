import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      services: 'Services',
      Books: 'Books',
      publishing: 'Publishing',
      contact: 'Contact',
      journal: 'Scientific Journal',
      journals: 'Journals',      // новая кнопка с выпадающим списком
      journal1: 'Journal 1',     // пункты выпадающего меню
      journal2: 'Journal 2',
    },
  },
  ru: {
    translation: {
      home: 'Главная',
      services: 'Услуги',
      books: 'Книги',
      publishing: 'Издательство',
      contact: 'Контакты',
      journal: 'Научный журнал',
      journals: 'Журналы',
      journal1: 'Журнал 1',
      journal2: 'Журнал 2',
    },
  },
  kg: {
    translation: {
      home: 'Башкы бет',
      services: 'Кызматтар',
      Books: 'Китептер',
      cases: 'Басма үйү',
      contact: 'Байланыш',
      journal: 'Илимий журнал',
      journals: 'Журналдар',
      journal1: 'Журнал 1',
      journal2: 'Журнал 2',
    },
  },
};

i18n
  .use(LanguageDetector) // определяет язык браузера
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
