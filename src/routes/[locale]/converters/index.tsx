import { component$, useSignal, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { getTranslations, supportedLanguages } from "~/i18n";
import { getLocalizedPath } from "~/i18n/utils";

export const useLocaleLoader = routeLoader$(({ params, url }) => {
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
  const converters = t.converters;
  const searchQuery = useSignal('');
  
  const converterList = [
    {
      name: converters.heicToPdf.name,
      description: converters.heicToPdf.description,
      href: getLocalizedPath('/convert/heic-to-pdf', locale),
    },
    {
      name: converters.heicToPng.name,
      description: converters.heicToPng.description,
      href: getLocalizedPath('/convert/heic-to-png', locale),
    },
  ];
  
  const filteredConverters = useComputed$(() => {
    const query = searchQuery.value.toLowerCase();
    if (!query) return converterList;
    return converterList.filter(conv => 
      conv.name.toLowerCase().includes(query) ||
      conv.description.toLowerCase().includes(query)
    );
  });

  return (
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 md:py-16">
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div class="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            {converters.title}
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto px-2">
            {converters.subtitle}
          </p>
        </div>
        
        {/* Search Bar */}
        <div class="w-full max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <div class="relative">
            <svg class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={converters.searchPlaceholder}
              value={searchQuery.value}
              onInput$={(e) => {
                searchQuery.value = (e.target as HTMLInputElement).value;
              }}
              class="w-full pl-10 sm:pl-12 md:pl-14 pr-4 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg border-2 border-gray-300 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white shadow-sm hover:shadow-md"
            />
          </div>
        </div>
        
        <div class="w-full max-w-6xl mx-auto">
          {filteredConverters.value.length > 0 ? (
            filteredConverters.value.map((converter, index) => (
              <Link 
                key={index}
                href={converter.href} 
                class="block w-full group relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-purple-200 overflow-hidden mb-4 sm:mb-6"
              >
                <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 md:-mr-20 md:-mt-20 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div class="relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div class="inline-flex p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110 transition-transform flex-shrink-0">
                    <svg class="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-bold text-gray-900 mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:text-purple-700 transition-colors">{converter.name}</h3>
                    <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      {converter.description}
                    </p>
                  </div>
                  <div class="flex-shrink-0 self-center sm:self-auto">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div class="text-center py-12 sm:py-16">
              <p class="text-gray-600 text-base sm:text-lg md:text-xl">{converters.noConvertersFound} "{searchQuery.value}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const localeData = resolveValue(useLocaleLoader);
  const converters = localeData.translations.converters;
  
  return {
    title: `${converters.title} - Convert 300+ File Formats | FormiPeek`,
    meta: [
      {
        name: "description",
        content: converters.subtitle,
      },
      {
        name: "keywords",
        content: "file converters, format converter, image converter, document converter, ebook converter, batch conversion, online converter, free converter",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `https://formipeek.com/${localeData.locale === 'en' ? '' : localeData.locale + '/'}converters`,
      },
      {
        property: "og:title",
        content: `${converters.title} - FormiPeek`,
      },
      {
        property: "og:description",
        content: converters.subtitle,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: `${converters.title} - FormiPeek`,
      },
      {
        name: "twitter:description",
        content: converters.subtitle,
      },
    ],
  };
};
