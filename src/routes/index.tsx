import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { getTranslations } from "~/i18n";
import { getLocalizedPath } from "~/i18n/utils";
import { getFaqSchema } from "~/seo/faqSchema";

export default component$(() => {
  const dataProcessed = useSignal(500.0);
  const t = getTranslations("en"); // English is default (no /en prefix)
  const home = t.home;

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      dataProcessed.value += Math.random() * 0.05;
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 sm:py-24 md:py-32 overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div class="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div class="absolute bottom-0 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 mb-6 sm:mb-8">
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 2L8 6H2l5 4-2 6 5.5-4 5.5 4-2-6 5-4h-6L9.5 2z" />
              </svg>
              <span class="text-xs sm:text-sm font-medium">{home.hero.badge}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-tight px-2">
              {home.hero.title}
              <br />
              <span class="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                {home.hero.titleHighlight}
              </span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              {home.hero.subtitle.replace("{count}", "300+")}
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
              <Link
                href={getLocalizedPath("/converters", "en")}
                class="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3.5 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-xl sm:rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 flex items-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span class="relative z-10">{home.hero.buttonStart}</span>
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform"
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
              </Link>
              <Link
                href={getLocalizedPath("/viewers", "en")}
                class="group border-2 border-white/30 backdrop-blur-sm bg-white/5 text-white font-bold py-3.5 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2 sm:gap-3 w-full sm:w-auto text-sm sm:text-base"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span>{home.hero.buttonView}</span>
              </Link>
            </div>

            <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 px-4">
              <div class="flex items-center gap-1.5 sm:gap-2">
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{home.hero.feature1}</span>
              </div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{home.hero.feature2}</span>
              </div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{home.hero.feature3}</span>
              </div>
              <div class="flex items-center gap-1.5 sm:gap-2">
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{home.hero.feature4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div class="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div class="relative">
                <div class="inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 mb-3 sm:mb-4">
                  <svg
                    class="w-6 h-6 text-blue-600"
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
                <div class="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  300+
                </div>
                <div class="text-gray-600 font-semibold text-base sm:text-lg">
                  {home.stats.formats}
                </div>
              </div>
            </div>
            <div class="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div class="relative">
                <div class="inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-100 to-green-200 mb-3 sm:mb-4">
                  <svg
                    class="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div class="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {dataProcessed.value >= 1000
                    ? `${(dataProcessed.value / 1000).toFixed(1)} TB`
                    : `${dataProcessed.value.toFixed(1)} GB`}
                </div>
                <div class="text-gray-600 font-semibold text-base sm:text-lg">
                  {home.stats.dataProcessed}
                </div>
              </div>
            </div>
            <div class="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div class="relative">
                <div class="inline-flex p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 mb-3 sm:mb-4">
                  <svg
                    class="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div class="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                  20 {t.nav.converters}
                </div>
                <div class="text-gray-600 font-semibold text-base sm:text-lg">
                  {home.stats.batchFiles}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section class="py-12 sm:py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {home.explore.title}
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {home.explore.subtitle}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {/* Converters Card */}
            <Link
              href={getLocalizedPath("/converters", "en")}
              class="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 overflow-hidden text-left"
            >
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative">
                <div class="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {home.explore.converters.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {home.explore.converters.description}
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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

            {/* Viewers Card */}
            <Link
              href={getLocalizedPath("/viewers", "en")}
              class="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 overflow-hidden text-left"
            >
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative">
                <div class="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {home.explore.viewers.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {home.explore.viewers.description}
                </p>
                <div class="flex items-center gap-2 text-purple-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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

            {/* Compress Card */}
            <Link
              href={getLocalizedPath("/compress", "en")}
              class="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-100 hover:border-green-300 overflow-hidden text-left"
            >
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {home.explore.compress.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {home.explore.compress.description}
                </p>
                <div class="flex items-center gap-2 text-green-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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

            {/* Samples Card */}
            <Link
              href={getLocalizedPath("/samples", "en")}
              class="group relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 overflow-hidden text-left"
            >
              <div class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div class="relative">
                <div class="bg-gradient-to-br from-orange-500 to-amber-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {home.explore.samples.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {home.explore.samples.description}
                </p>
                <div class="flex items-center gap-2 text-orange-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section class="py-12 sm:py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {home.howItWorks.title}
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {home.howItWorks.subtitle}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div class="relative">
              <div class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl sm:rounded-3xl opacity-20 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                <div class="bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <div class="text-center mb-3 sm:mb-4">
                  <span class="text-xs sm:text-sm font-bold text-blue-600 bg-blue-100 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full">
                    STEP 1
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {home.howItWorks.step1.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {home.howItWorks.step1.description}
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl sm:rounded-3xl opacity-20 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300">
                <div class="bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <div class="text-center mb-3 sm:mb-4">
                  <span class="text-xs sm:text-sm font-bold text-purple-600 bg-purple-100 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full">
                    STEP 2
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {home.howItWorks.step2.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {home.howItWorks.step2.description}
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl sm:rounded-3xl opacity-20 blur-2xl"></div>
              <div class="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <svg
                    class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <div class="text-center mb-3 sm:mb-4">
                  <span class="text-xs sm:text-sm font-bold text-green-600 bg-green-100 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full">
                    STEP 3
                  </span>
                </div>
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                  {home.howItWorks.step3.title}
                </h3>
                <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  {home.howItWorks.step3.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Converters Section */}
      <section class="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {home.popular.title}
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {home.popular.subtitle}
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {[
              {
                href: getLocalizedPath("/convert/heic-to-pdf", "en"),
                title: "HEIC to PDF",
                color: "purple",
              },
              {
                href: getLocalizedPath("/convert/csv-to-json", "en"),
                title: "CSV to JSON",
                color: "blue",
              },
              {
                href: getLocalizedPath("/convert/csv-to-ndjson", "en"),
                title: "CSV to NDJSON",
                color: "indigo",
              },
              {
                href: getLocalizedPath("/convert/dng-to-webp", "en"),
                title: "DNG to WebP",
                color: "pink",
              },
              {
                href: getLocalizedPath("/convert/cr2-to-webp", "en"),
                title: "CR2 to WebP",
                color: "violet",
              },
              {
                href: getLocalizedPath("/convert/epub-to-pdf", "en"),
                title: "EPUB to PDF",
                color: "red",
              },
              {
                href: getLocalizedPath("/convert/epub-to-mobi", "en"),
                title: "EPUB to MOBI",
                color: "emerald",
              },
              {
                href: getLocalizedPath("/convert/csv-to-xlsx", "en"),
                title: "CSV to XLSX",
                color: "teal",
              },
              {
                href: getLocalizedPath("/convert/docx-to-pdf", "en"),
                title: "DOCX to PDF",
                color: "slate",
              },
            ].map((converter, index) => (
              <Link
                key={index}
                href={converter.href}
                class="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-gray-100 hover:border-gray-200 overflow-hidden"
              >
                <div
                  class={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-${converter.color}-100 to-${converter.color}-200 rounded-full -mr-8 -mt-8 sm:-mr-10 sm:-mt-10 opacity-50 group-hover:opacity-75 transition-opacity`}
                ></div>
                <div
                  class={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-${converter.color}-500 to-${converter.color}-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
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
                <h3 class="font-bold text-gray-900 mb-1 text-xs sm:text-sm group-hover:text-gray-700 transition-colors">
                  {converter.title}
                </h3>
              </Link>
            ))}
          </div>

          <div class="text-center">
            <Link
              href={getLocalizedPath("/converters", "en")}
              class="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span class="hidden sm:inline">{home.popular.viewAll}</span>
              <span class="sm:hidden">{home.popular.viewAllMobile}</span>
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-12 sm:py-16 md:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {home.features.title}
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              {home.features.subtitle}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: "zap",
                title: home.features.lightning.title,
                description: home.features.lightning.description,
                gradient: "from-yellow-400 to-orange-500",
                bgGradient: "from-yellow-50 to-orange-50",
              },
              {
                icon: "shield",
                title: home.features.secure.title,
                description: home.features.secure.description,
                gradient: "from-green-400 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50",
              },
              {
                icon: "globe",
                title: home.features.universal.title,
                description: home.features.universal.description,
                gradient: "from-blue-400 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                icon: "bar-chart",
                title: home.features.batch.title,
                description: home.features.batch.description,
                gradient: "from-purple-400 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: "eye",
                title: home.features.viewer.title,
                description: home.features.viewer.description,
                gradient: "from-pink-400 to-rose-500",
                bgGradient: "from-pink-50 to-rose-50",
              },
              {
                icon: "star",
                title: home.features.quality.title,
                description: home.features.quality.description,
                gradient: "from-indigo-400 to-violet-500",
                bgGradient: "from-indigo-50 to-violet-50",
              },
            ].map((feature, index) => (
              <div
                key={index}
                class="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-gray-200 overflow-hidden"
              >
                <div
                  class={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${feature.bgGradient} rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 opacity-50 group-hover:opacity-75 transition-opacity`}
                ></div>
                <div class="relative">
                  <div
                    class={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <svg
                      class="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon === "zap" && (
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      )}
                      {feature.icon === "shield" && (
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      )}
                      {feature.icon === "globe" && (
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                      {feature.icon === "bar-chart" && (
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      )}
                      {feature.icon === "eye" && (
                        <>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </>
                      )}
                      {feature.icon === "star" && (
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      )}
                    </svg>
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="bg-white py-16 sm:py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {home.faq.title}
            </h2>
          </div>

          <div class="space-y-6">
            {home.faq.items.map((item, i) => (
              <div key={i} class="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.q}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={JSON.stringify(getFaqSchema(home.faq.items))}
        />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Free Online File Converter - FormiPeek | Convert 300+ Formats Instantly",
  meta: [
    {
      name: "description",
      content:
        "Convert files between 300+ formats instantly. Fast, secure, and free file conversion service. Support for images, documents, ebooks, and data files.",
    },
    {
      name: "keywords",
      content:
        "file converter, online converter, image converter, document converter, ebook converter, batch conversion, free converter",
    },
    // Open Graph / Facebook
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://formipeek.com/",
    },
    {
      property: "og:title",
      content: "Free Online File Converter - FormiPeek | Convert 300+ Formats",
    },
    {
      property: "og:description",
      content:
        "Convert files between 300+ formats instantly. Fast, secure, and free file conversion service.",
    },
    {
      property: "og:image",
      content: "https://formipeek.com/og-image.jpg",
    },
    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:url",
      content: "https://formipeek.com/",
    },
    {
      name: "twitter:title",
      content: "Free Online File Converter - FormiPeek",
    },
    {
      name: "twitter:description",
      content: "Convert files between 300+ formats instantly. Fast, secure, and free.",
    },
    {
      name: "twitter:image",
      content: "https://formipeek.com/og-image.jpg",
    },
  ],
};
