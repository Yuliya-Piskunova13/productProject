import 'react-i18next';

import it from './it/translation.json';
import en from './en/translation.json';

declare module 'react-i18next' {
  // versions lower than 11.11.0
  type Resources = {
    defaultNS: 'en';
    it: typeof it;
    en: typeof en;
  };

  // versions higher than 11.11.0
  type CustomTypeOptions = {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      it: typeof it;
    };
  };
}
