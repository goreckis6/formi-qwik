import { component$, useSignal, useComputed$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { getTranslations, supportedLanguages } from "~/i18n";
import { getLocalizedPath } from "~/i18n/utils";

export const useLocaleLoader = routeLoader$(({ url }) => {
  const pathParts = url.pathname.split("/").filter(Boolean);
  const firstPart = pathParts[0];
  const isLanguageCode = supportedLanguages.some((lang) => lang.code === firstPart);
  const locale = isLanguageCode ? firstPart : "en";

  return {
    locale,
    translations: getTranslations(locale),
  };
});

export default component$(() => {
  const localeData = useLocaleLoader();
  const t = localeData.value.translations;
  const locale = localeData.value.locale;
  const converters = t.converters;
  const searchQuery = useSignal("");

  const converterList = useComputed$(() => ({
    heic: [
      {
        name: converters.heicToPdf.name,
        description: converters.heicToPdf.description,
        href: getLocalizedPath("/convert/heic-to-pdf", locale),
      },
      {
        name: converters.heicToPng.name,
        description: converters.heicToPng.description,
        href: getLocalizedPath("/convert/heic-to-png", locale),
      },
      {
        name: converters.heicToJpg.name,
        description: converters.heicToJpg.description,
        href: getLocalizedPath("/convert/heic-to-jpg", locale),
      },
      {
        name: converters.heicToWebp.name,
        description: converters.heicToWebp.description,
        href: getLocalizedPath("/convert/heic-to-webp", locale),
      },
      {
        name: converters.heicToAvif.name,
        description: converters.heicToAvif.description,
        href: getLocalizedPath("/convert/heic-to-avif", locale),
      },
      {
        name: converters.heicToTiff.name,
        description: converters.heicToTiff.description,
        href: getLocalizedPath("/convert/heic-to-tiff", locale),
      },
      {
        name: converters.heicToGif.name,
        description: converters.heicToGif.description,
        href: getLocalizedPath("/convert/heic-to-gif", locale),
      },
    ],
    heif: [
      {
        name: converters.heifToJpg.name,
        description: converters.heifToJpg.description,
        href: getLocalizedPath("/convert/heif-to-jpg", locale),
      },
      {
        name: converters.heifToPng.name,
        description: converters.heifToPng.description,
        href: getLocalizedPath("/convert/heif-to-png", locale),
      },
    ],
  }));

  const filteredConverters = useComputed$(() => {
    const query = searchQuery.value.toLowerCase();
    const sections = converterList.value;
    
    if (!query) {
      return {
        heic: sections.heic,
        heif: sections.heif,
      };
    }

    return {
      heic: sections.heic.filter(
        (conv) =>
          conv.name.toLowerCase().includes(query) || conv.description.toLowerCase().includes(query)
      ),
      heif: sections.heif.filter(
        (conv) =>
          conv.name.toLowerCase().includes(query) || conv.description.toLowerCase().includes(query)
      ),
    };
  });

  const hasAnyResults = useComputed$(() => {
    const filtered = filteredConverters.value;
    return filtered.heic.length > 0 || filtered.heif.length > 0;
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
            <svg
              class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
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
          {hasAnyResults.value ? (
            <div class="flex flex-col gap-8">
              {/* HEIC Section */}
              {filteredConverters.value.heic.length > 0 && (
                <div class="flex flex-col gap-4">
                  <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                    <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {converters.sections.heic.title}
                    </h2>
                    <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {converters.sections.heic.description}
                    </p>
                  </div>
                  <div class="flex flex-col gap-3">
                    {filteredConverters.value.heic.map((converter, index) => (
                      <Link
                        key={`${converter.href}-${index}`}
                        href={converter.href}
                        class="group relative bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-400 cursor-pointer"
                      >
                        <div class="flex items-start gap-3 pointer-events-none">
                          <div class="inline-flex p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-105 transition-transform flex-shrink-0 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div class="flex-1 min-w-0 pointer-events-none">
                            <h3 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-blue-700 transition-colors">
                              {converter.name}
                            </h3>
                            <p class="text-xs text-gray-600 leading-snug">{converter.description}</p>
                          </div>
                          <div class="flex-shrink-0 pointer-events-none">
                            <svg
                              class="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* HEIF Section */}
              {filteredConverters.value.heif.length > 0 && (
                <div class="flex flex-col gap-4">
                  <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded-r-lg">
                    <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {converters.sections.heif.title}
                    </h2>
                    <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                      {converters.sections.heif.description}
                    </p>
                    <p class="text-xs sm:text-sm text-purple-700 font-medium italic">
                      {converters.sections.heif.difference}
                    </p>
                  </div>
                  <div class="flex flex-col gap-3">
                    {filteredConverters.value.heif.map((converter, index) => (
                      <Link
                        key={`${converter.href}-${index}`}
                        href={converter.href}
                        class="group relative bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-purple-300 cursor-pointer"
                      >
                        <div class="flex items-start gap-3 pointer-events-none">
                          <div class="inline-flex p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-105 transition-transform flex-shrink-0 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <div class="flex-1 min-w-0 pointer-events-none">
                            <h3 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-purple-700 transition-colors">
                              {converter.name}
                            </h3>
                            <p class="text-xs text-gray-600 leading-snug">{converter.description}</p>
                          </div>
                          <div class="flex-shrink-0 pointer-events-none">
                            <svg
                              class="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div class="text-center py-12 sm:py-16">
              <p class="text-gray-600 text-base sm:text-lg md:text-xl">
                {converters.noConvertersFound} "{searchQuery.value}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "File Converters - Convert 300+ File Formats | FormiPeek",
  meta: [
    {
      name: "description",
      content:
        "Browse and use our 300+ file format converters. Convert images, documents, ebooks, and data files instantly. Free, fast, and secure conversion.",
    },
    {
      name: "keywords",
      content:
        "file converters, format converter, image converter, document converter, ebook converter, batch conversion, online converter, free converter",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://formipeek.com/converters",
    },
    {
      property: "og:title",
      content: "File Converters - Convert 300+ File Formats | FormiPeek",
    },
    {
      property: "og:description",
      content:
        "Browse and use our 300+ file format converters. Convert images, documents, ebooks, and more.",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "File Converters - FormiPeek",
    },
    {
      name: "twitter:description",
      content: "Browse and use our 300+ file format converters. Free, fast, and secure conversion.",
    },
  ],
};
