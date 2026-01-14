// i18n configuration and exports
import { en } from './en';
import { pl } from './pl';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { pt } from './pt';
import { ru } from './ru';
import { ja } from './ja';
import { zh } from './zh';
import { ko } from './ko';
import { ar } from './ar';
import { hi } from './hi';
import { id } from './id';
import { tr } from './tr';
import { nl } from './nl';
import { sv } from './sv';

export const languages = {
  en,
  pl,
  de,
  es,
  fr,
  it,
  pt,
  ru,
  ja,
  zh,
  ko,
  ar,
  hi,
  id,
  tr,
  nl,
  sv,
} as const;

export type SupportedLocale = keyof typeof languages;

export const supportedLanguages = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'pl', name: 'Polski', flag: 'pl' },
  { code: 'de', name: 'Deutsch', flag: 'de' },
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'it', name: 'Italiano', flag: 'it' },
  { code: 'pt', name: 'Português', flag: 'pt' },
  { code: 'ru', name: 'Русский', flag: 'ru' },
  { code: 'ja', name: '日本語', flag: 'jp' },
  { code: 'zh', name: '中文', flag: 'cn' },
  { code: 'ko', name: '한국어', flag: 'kr' },
  { code: 'ar', name: 'العربية', flag: 'sa' },
  { code: 'hi', name: 'हिन्दी', flag: 'in' },
  { code: 'id', name: 'Bahasa Indonesia', flag: 'id' },
  { code: 'tr', name: 'Türkçe', flag: 'tr' },
  { code: 'nl', name: 'Nederlands', flag: 'nl' },
  { code: 'sv', name: 'Svenska', flag: 'se' },
] as const;

export function getTranslations(locale: string) {
  return languages[locale as SupportedLocale] || languages.en;
}
