import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8 sm:py-12 md:py-16">
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            File Viewers
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto px-2">
            Preview and view files directly in your browser. No downloads needed.
          </p>
        </div>
        
        <div class="w-full max-w-4xl mx-auto">
          <div class="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border-2 border-purple-100">
            <div class="inline-flex p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 mb-4 sm:mb-6 md:mb-8">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">File Viewers</h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Preview and view files directly in your browser without downloading. Support for images, documents, PDFs, and more formats.
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
  title: "File Viewers - Preview Files in Browser | FormiPeek",
  meta: [
    {
      name: "description",
      content: "Preview and view files directly in your browser. No downloads needed. Support for images, documents, PDFs, and more file formats.",
    },
    {
      name: "keywords",
      content: "file viewer, online file viewer, PDF viewer, image viewer, document viewer, preview files, browser viewer, file preview",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://formipeek.com/viewers",
    },
    {
      property: "og:title",
      content: "File Viewers - Preview Files in Browser | FormiPeek",
    },
    {
      property: "og:description",
      content: "Preview and view files directly in your browser. No downloads needed. Support for images, documents, PDFs, and more.",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "File Viewers - FormiPeek",
    },
    {
      name: "twitter:description",
      content: "Preview and view files directly in your browser. No downloads needed.",
    },
  ],
};
