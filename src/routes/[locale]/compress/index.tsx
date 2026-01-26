import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { getTranslations, supportedLanguages } from "~/i18n";

export const useLocaleLoader = routeLoader$(({ params }) => {
  const locale = params.locale || 'en';
  const isValidLocale = supportedLanguages.some(lang => lang.code === locale);
  const finalLocale = isValidLocale ? locale : 'en';
  
  return {
    locale: finalLocale,
    translations: getTranslations(finalLocale),
  };
});

export default component$(() => {
  const localeData = useLocaleLoader();
  const t = localeData.value.translations;
  const locale = localeData.value.locale;
  
  return (
    <div class="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8 sm:py-12 md:py-16">
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            {t.compress.title}
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto px-2">
            {t.compress.subtitle}
          </p>
        </div>
        
        <div class="w-full max-w-4xl mx-auto">
          <div class="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border-2 border-orange-100">
            <div class="inline-flex p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 mb-4 sm:mb-6 md:mb-8">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">{t.compress.cardTitle}</h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              {t.compress.cardDescription}
            </p>
            <p class="text-xs sm:text-sm md:text-base text-gray-500">
              {t.compress.comingSoon}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue, url }) => {
  const localeData = resolveValue(useLocaleLoader);
  const locale = localeData.locale;
  const t = localeData.translations;
  const pageUrl = url.origin + url.pathname;
  
  return {
    title: t.compress.metaTitle,
    meta: [
      {
        name: "description",
        content: t.compress.metaDescription,
      },
      {
        name: "keywords",
        content: t.compress.metaKeywords,
      },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: pageUrl,
    },
      {
        property: "og:title",
        content: t.compress.metaTitle,
      },
      {
        property: "og:description",
        content: t.compress.metaDescription,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: t.compress.title,
      },
      {
        name: "twitter:description",
        content: t.compress.subtitle,
      },
  ],
  };
};
