import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { getTranslations } from "~/i18n";
import { getLocalizedPath } from "~/i18n/utils";
import { getFaqSchema } from "~/seo/faqSchema";

/**
 * Root path (/) serves English content
 * Other languages use /[locale]/ paths (e.g. /pl/, /de/)
 */
export const useLocaleLoader = routeLoader$(() => {
  const locale = 'en'; // Root path always serves English
  
  return {
    locale,
    translations: getTranslations(locale),
  };
});

export default component$(() => {
  const localeData = useLocaleLoader();
  const t = localeData.value.translations;
  const locale = localeData.value.locale;
  const home = t.home;
  const dataProcessed = useSignal(500.0);

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      dataProcessed.value += Math.random() * 0.05;
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div class="min-h-screen">
      {/* Hero Section */}
      <section class="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {home.title}
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              {home.subtitle}
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <Link
                href={getLocalizedPath("/converters", locale)}
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                {home.cta.primary}
              </Link>
              <Link
                href={getLocalizedPath("/viewers", locale)}
                class="bg-white hover:bg-gray-50 text-blue-600 font-semibold px-8 py-3 rounded-lg border-2 border-blue-600 transition-colors duration-200"
              >
                {home.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="py-12 bg-white border-y border-gray-200">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div class="text-gray-600">{home.stats.free}</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-blue-600 mb-2">
                {dataProcessed.value.toFixed(1)}GB+
              </div>
              <div class="text-gray-600">{home.stats.dataProcessed}</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div class="text-gray-600">{home.stats.formats}</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-blue-600 mb-2">⚡</div>
              <div class="text-gray-600">{home.stats.fast}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">
            {home.features.title}
          </h2>
          <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {home.features.list.map((feature, index) => (
              <div key={index} class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div class="text-4xl mb-4">🔄</div>
                <p class="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Converters */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">
            {home.popularConverters.title}
          </h2>
          <div class="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {home.popularConverters.list.map((converter) => (
              <Link
                key={converter.url}
                href={getLocalizedPath(converter.url, locale)}
                class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-200 hover:border-blue-500"
              >
                <h3 class="font-semibold text-gray-900 mb-2">
                  {converter.name}
                </h3>
                <p class="text-sm text-gray-600">{converter.description}</p>
              </Link>
            ))}
          </div>
          <div class="text-center mt-8">
            <Link
              href={getLocalizedPath("/converters", locale)}
              class="text-blue-600 hover:text-blue-700 font-semibold"
            >
              {home.popularConverters.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">
            {home.tools.title}
          </h2>
          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link
              href={getLocalizedPath("/converters", locale)}
              class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
            >
              <div class="text-5xl mb-4">🔄</div>
              <h3 class="text-xl font-semibold mb-2">{home.tools.converters.title}</h3>
              <p class="text-gray-600">{home.tools.converters.description}</p>
            </Link>
            <Link
              href={getLocalizedPath("/viewers", locale)}
              class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
            >
              <div class="text-5xl mb-4">👁️</div>
              <h3 class="text-xl font-semibold mb-2">{home.tools.viewers.title}</h3>
              <p class="text-gray-600">{home.tools.viewers.description}</p>
            </Link>
            <Link
              href={getLocalizedPath("/compress", locale)}
              class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
            >
              <div class="text-5xl mb-4">📦</div>
              <h3 class="text-xl font-semibold mb-2">{home.tools.compress.title}</h3>
              <p class="text-gray-600">{home.tools.compress.description}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="py-20">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-3xl font-bold text-center mb-12">{home.faq.title}</h2>
          <div class="space-y-6">
            {home.faq.items.map((item, index) => (
              <details key={index} class="bg-white p-6 rounded-lg shadow-sm">
                <summary class="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                  {item.q}
                </summary>
                <p class="mt-4 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue, url }) => {
  const localeData = resolveValue(useLocaleLoader);
  const t = localeData.translations;
  const home = t.home;
  const pageUrl = url.origin + url.pathname;

  return {
    title: home.metaTitle,
    meta: [
      { name: "description", content: home.metaDescription },
      { name: "keywords", content: home.metaKeywords },
      { property: "og:title", content: home.metaTitle },
      { property: "og:description", content: home.metaDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: home.metaTitle },
      { name: "twitter:description", content: home.metaDescription },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
    ],
    frontmatter: {
      tags: [
        "image-converter",
        "file-converter",
        "online-tools",
        "free-converter",
      ],
    },
    scripts: [
      {
        props: { type: "application/ld+json" },
        script: getFaqSchema(home.faq.items, "en"),
      },
    ],
  };
};
