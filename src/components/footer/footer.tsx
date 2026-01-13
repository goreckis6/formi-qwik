import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-12 sm:py-16 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex items-center justify-center space-x-3 mb-6">
            <div class="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              FormiPeek
            </h2>
          </div>
          <p class="text-gray-300 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
            The ultimate file conversion and viewing platform for professionals and everyday users.
          </p>
          <div class="flex items-center justify-center gap-2 mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 max-w-2xl mx-auto">
            <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p class="text-sm sm:text-base text-gray-300">
              <span class="font-semibold text-white">100% Secure:</span> No files are stored on our servers. All conversions are processed and files are automatically deleted immediately after processing.
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
            <span>© 2025 FormiPeek</span>
            <span class="hidden sm:inline">•</span>
            <span>Built with</span>
            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>by developers who care about quality.</span>
          </div>
        </div>
      </div>
    </footer>
  );
});
