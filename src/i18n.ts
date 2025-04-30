import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: [
      'common',
      'home/home',
      'home/topCourses',
      'home/topInstructors',
      'Category/mainPage',
      'Category/allCourses',
      'Category/filter',
      'home/banner',
      'cart/cart',
      'home/testimonial',
      'InstructorPage/headerinfo',
      'coursePage/MoreCourses',
      'instructor/HeaderLinks',
      'dashboard/HomeDash/home',
      'dashboard/Revenue/revenue',
    ],

    defaultNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });
