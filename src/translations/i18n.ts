import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import { en_US } from './en_US';
import { es_ES } from './es_ES';

const i18n = new I18n();

i18n.translations = {
  es: es_ES,
  en: en_US,
  'es-ES': es_ES,
  'en-US': en_US,
};

i18n.defaultLocale = Localization.locale;
i18n.locale = Localization.locale;
i18n.enableFallback = true;

export default i18n;
