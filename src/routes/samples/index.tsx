import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 sm:py-12 md:py-16">
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            Sample Files
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto px-2">
            Browse and download sample files for testing. Test before you convert.
          </p>
        </div>
        
        <div class="w-full max-w-4xl mx-auto">
          <div class="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border-2 border-green-100">
            <div class="inline-flex p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-4 sm:mb-6 md:mb-8">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">Sample Files</h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Download sample files in various formats for testing our conversion tools. Browse sample files for all supported formats to test before you convert.
            </p>
            <p class="text-xs sm:text-sm md:text-base text-gray-500">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sample Files - Download Test Files | FormiPeek",
  meta: [
    {
      name: "description",
      content: "Download sample files in various formats for testing our conversion tools. Browse sample files for all supported formats to test before you convert.",
    },
    {
      name: "keywords",
      content: "sample files, test files, file samples, download samples, format samples, test conversion, file testing",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://formipeek.com/samples",
    },
    {
      property: "og:title",
      content: "Sample Files - Download Test Files | FormiPeek",
    },
    {
      property: "og:description",
      content: "Download sample files in various formats for testing our conversion tools.",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Sample Files - FormiPeek",
    },
    {
      name: "twitter:description",
      content: "Download sample files in various formats for testing our conversion tools.",
    },
  ],
};
