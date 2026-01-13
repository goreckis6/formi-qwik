import { component$, useSignal, $ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { supportedLanguages } from "~/i18n";
import { getPathWithoutLocale, getLocalizedPath } from "~/i18n/utils";

export const LanguageSwitcher = component$(() => {
  const location = useLocation();
  const nav = useNavigate();
  const isOpen = useSignal(false);
  
  // Get current locale from URL
  const pathParts = location.url.pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];
  const isLanguageCode = supportedLanguages.some(lang => lang.code === firstPart);
  const currentLocale = isLanguageCode ? firstPart : 'en';
  const activeLocale = supportedLanguages.find(lang => lang.code === currentLocale) 
    || supportedLanguages[0];
  
  const switchLanguage = $((langCode: string) => {
    // Get path without current locale
    const pathWithoutLocale = getPathWithoutLocale(location.url.pathname);
    
    // Get new path with new locale
    const newPath = getLocalizedPath(pathWithoutLocale, langCode);
    
    // Close dropdown
    isOpen.value = false;
    
    // Navigate to new path - use window.location for full page reload
    if (typeof window !== 'undefined') {
      window.location.href = newPath;
    } else {
      nav(newPath);
    }
  });
  
  return (
    <div class="relative">
      <button
        onClick$={() => (isOpen.value = !isOpen.value)}
        class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <span class="text-lg">{activeLocale.flag}</span>
        <span class="hidden sm:inline">{activeLocale.name}</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen.value && (
        <>
          {/* Backdrop */}
          <div 
            class="fixed inset-0 z-40"
            onClick$={() => (isOpen.value = false)}
          />
          
          {/* Dropdown */}
          <div class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            <div class="py-2">
              {supportedLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick$={() => switchLanguage(lang.code)}
                  class={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                    lang.code === activeLocale.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                  }`}
                >
                  <span class="text-xl">{lang.flag}</span>
                  <span class="text-sm font-medium">{lang.name}</span>
                  {lang.code === activeLocale.code && (
                    <svg class="w-4 h-4 ml-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
});
