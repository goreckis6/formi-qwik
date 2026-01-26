import { useLocation } from "@builder.io/qwik-city";
import { getTranslations, supportedLanguages } from "./index";

/**
 * Get current locale from URL path
 * English (en) has no prefix, other languages have /[lang] prefix
 */
export function useCurrentLocale() {
  const location = useLocation();
  const pathParts = location.url.pathname.split('/').filter(Boolean);
  
  // Check if first part is a language code
  const firstPart = pathParts[0];
  const isLanguageCode = supportedLanguages.some(lang => lang.code === firstPart);
  
  if (isLanguageCode) {
    return firstPart;
  }
  
  // Default to English if no language code in path
  return 'en';
}

/**
 * Get translations for current locale
 */
export function useCurrentTranslations() {
  const locale = useCurrentLocale();
  return getTranslations(locale);
}

/**
 * Get path with language prefix
 * English homepage (/) has no prefix, but other pages use /en/ prefix
 * Other languages always use /[lang]/ prefix
 * Adds trailing slash for Qwik routing compatibility
 */
export function getLocalizedPath(path: string, locale: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // English homepage has no prefix
  if (locale === 'en' && (cleanPath === '' || cleanPath === '/')) {
    return '/';
  }
  
  // All other pages (including English) use /[locale]/ prefix
  // Add trailing slash if path doesn't end with one
  const pathWithLocale = `/${locale}/${cleanPath}`;
  return pathWithLocale.endsWith('/') ? pathWithLocale : `${pathWithLocale}/`;
}

/**
 * Get path without language prefix
 */
export function getPathWithoutLocale(path: string): string {
  const pathParts = path.split('/').filter(Boolean);
  const firstPart = pathParts[0];
  
  // Check if first part is a language code
  const isLanguageCode = supportedLanguages.some(lang => lang.code === firstPart);
  
  if (isLanguageCode) {
    // Remove language code
    return '/' + pathParts.slice(1).join('/');
  }
  
  return path;
}
