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
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
] as const;

export function getTranslations(locale: string) {
  return languages[locale as SupportedLocale] || languages.en;
}
