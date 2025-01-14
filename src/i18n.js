import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import translations from './langauge/locales/translations.json';
// import portfolioTranslations from './langauge/locales/protfolioTranslations.json';
import newPortfolioTranslations from './langauge/locales/newPortfolioTranslations.json';

// console.log('translations', translations);

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
   debug: true,
   lng: 'en',
   //    resources: translations,
   resources: newPortfolioTranslations,
   // resources: portfolioTranslations,
});
