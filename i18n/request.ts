import { getRequestConfig } from 'next-intl/server';
import en from '../messages/en.json';
import ta from '../messages/ta.json';

// Can be imported from a shared config
export const locales = ['en', 'ta'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // If invalid, fall back to default locale
  const validLocale = locale && locales.includes(locale as Locale) ? locale : 'en';

  return {
    locale: validLocale,
    messages: validLocale === 'ta' ? ta : en
  };
});