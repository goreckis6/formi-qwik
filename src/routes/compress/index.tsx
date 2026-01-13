import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-b from-green-50 to-white py-8 sm:py-12 md:py-16">
      <div class="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div class="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            File Compression
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto px-2">
            Reduce file sizes without losing quality. Fast and free compression tools.
          </p>
        </div>
        
        <div class="w-full max-w-4xl mx-auto">
          <div class="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 text-center border-2 border-green-100">
            <div class="inline-flex p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-4 sm:mb-6 md:mb-8">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">File Compression</h2>
            <p class="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
              Compress images and PDFs without losing quality. Reduce file sizes for faster uploads and easier sharing. Support for JPG, PNG, PDF, and more formats.
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
  title: "File Compression - Compress Images & PDFs Online | FormiPeek",
  meta: [
    {
      name: "description",
      content: "Compress images and PDFs without losing quality. Fast and free compression tools. Reduce file sizes for faster uploads and easier sharing.",
    },
    {
      name: "keywords",
      content: "file compression, compress images, compress PDF, image compressor, PDF compressor, reduce file size, online compression, free compression",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://formipeek.com/compress",
    },
    {
      property: "og:title",
      content: "File Compression - Compress Images & PDFs Online | FormiPeek",
    },
    {
      property: "og:description",
      content: "Compress images and PDFs without losing quality. Fast and free compression tools.",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "File Compression - FormiPeek",
    },
    {
      name: "twitter:description",
      content: "Compress images and PDFs without losing quality. Fast and free compression tools.",
    },
  ],
};
