import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import type {TFunction} from 'i18next';

import it from './it/translation.json';
import en from './en/translation.json';

export type UseTranslationTFunction = TFunction<'en' | 'it', undefined>;

const resources = {
  // list of languages
  en: {
    translations: en,
  },
  it: {
    translations: it,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    react: {
      useSuspense: false,
    },
    defaultNS: 'translations',
    ns: ['translations'],
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
    resources,
    lng: 'en', // default language to use.
    fallbackLng: 'en',
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
