import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
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
  const mode = useSignal<'single' | 'batch'>('single');
  const localeData = useLocaleLoader();
  const t = localeData.value.translations;
  const locale = localeData.value.locale;
  const conv = t.heicToPdf;

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Banner */}
      <div class="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div class="text-center">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {conv.hero.title}
            </h1>
            <p class="text-lg sm:text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              {conv.hero.subtitle}
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{conv.hero.badge1}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{conv.hero.badge2}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{conv.hero.badge3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Same structure as /convert/heic-to-pdf/index.tsx */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Converter Panel */}
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              
              {/* Mode Toggle */}
              <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick$={() => (mode.value = 'single')}
                  class={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    mode.value === 'single' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <svg class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {conv.upload.buttonSingle}
                </button>
                <button 
                  onClick$={() => (mode.value = 'batch')}
                  class={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                    mode.value === 'batch' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <svg class="w-5 h-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {conv.upload.buttonBatch}
                </button>
              </div>

              {/* Upload Area */}
              <div class="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">
                  {conv.upload.title}
                </h3>
                <p class="text-gray-600 mb-4 text-sm sm:text-base">
                  {conv.upload.description}
                </p>
                <button class="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
                  {conv.upload.chooseFile}
                </button>
              </div>
            </div>

            {/* About Section */}
            <div class="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{conv.about.title}</h2>
              
              <div class="space-y-6">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.whatIsHeic.title}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.about.whatIsHeic.content}</p>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.whyConvert.title}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.about.whyConvert.content}</p>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-gray-900 mb-3">{conv.about.benefits.title}</h3>
                  <ul class="space-y-2">
                    {conv.about.benefits.list.map((benefit, index) => (
                      <li key={index} class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div class="mt-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{conv.faq.title}</h2>
              
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q1}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a1}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q2}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a2}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q3}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a3}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q4}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a4}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q5}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a5}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q6}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a6}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q7}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a7}</p>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2">{conv.faq.q8}</h3>
                  <p class="text-gray-700 leading-relaxed">{conv.faq.a8}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div class="lg:col-span-1">
            {/* Features */}
            <div class="bg-white rounded-2xl shadow-xl p-6 mb-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{conv.features.title}</h3>
              <ul class="space-y-3">
                {conv.features.list.map((feature, index) => (
                  <li key={index} class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* How It Works */}
              <div class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="text-xl font-bold text-gray-900 mb-4">{conv.howItWorks.title}</h3>
                <div class="space-y-4">
                  <div class="flex items-start gap-3">
                    <div class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{conv.howItWorks.step1Title}</h4>
                      <p class="text-xs text-gray-600">{conv.howItWorks.step1Desc}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{conv.howItWorks.step2Title}</h4>
                      <p class="text-xs text-gray-600">{conv.howItWorks.step2Desc}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 class="font-semibold text-gray-900 text-sm">{conv.howItWorks.step3Title}</h4>
                      <p class="text-xs text-gray-600">{conv.howItWorks.step3Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Converters */}
              <div class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="text-lg font-bold text-gray-900 mb-4">{conv.related.title}</h3>
                <div class="flex flex-wrap gap-2">
                  {conv.related.converters.map((converter, index) => (
                    <a 
                      key={index}
                      href={getLocalizedPath(converter.url, locale)} 
                      class="text-xs px-3 py-1.5 bg-gray-100 hover:bg-purple-100 hover:text-purple-700 text-gray-700 rounded-full transition-colors font-medium"
                    >
                      {converter.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const localeData = resolveValue(useLocaleLoader);
  const conv = localeData.translations.heicToPdf;
  const locale = localeData.locale;
  
  return {
    title: conv.title,
    meta: [
      {
        name: "description",
        content: conv.metaDescription,
      },
      {
        name: "keywords",
        content: conv.metaKeywords,
      },
      // Open Graph
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `https://formipeek.com${locale === 'en' ? '' : `/${locale}`}/convert/heic-to-pdf`,
      },
      {
        property: "og:title",
        content: conv.title,
      },
      {
        property: "og:description",
        content: conv.metaDescription,
      },
      {
        property: "og:image",
        content: "https://formipeek.com/og-heic-to-pdf.jpg",
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: conv.title,
      },
      {
        name: "twitter:description",
        content: conv.metaDescription,
      },
      {
        name: "twitter:image",
        content: "https://formipeek.com/og-heic-to-pdf.jpg",
      },
    ],
  };
};
