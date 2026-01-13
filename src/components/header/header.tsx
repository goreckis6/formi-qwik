import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LanguageSwitcher } from "~/components/language-switcher/language-switcher";

export const Header = component$(() => {
  const mobileMenuOpen = useSignal(false);

  return (
    <header class="bg-white shadow-lg sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <Link href="/" class="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <div>
              <span class="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent block">
                FormiPeek
              </span>
              <p class="text-xs text-gray-500">File Conversion & Viewer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-6">
            <nav class="flex items-center space-x-6">
              <Link href="/converters" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors group">
                <svg class="w-5 h-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span>Converters</span>
              </Link>
              <Link href="/viewers" class="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors group">
                <svg class="w-5 h-5 text-purple-600 group-hover:text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Viewers</span>
              </Link>
              <Link href="/compress" class="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors group">
                <svg class="w-5 h-5 text-orange-600 group-hover:text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span>Compress</span>
              </Link>
              <Link href="/samples" class="flex items-center space-x-2 text-gray-700 hover:text-teal-600 transition-colors group">
                <svg class="w-5 h-5 text-teal-600 group-hover:text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Samples</span>
              </Link>
            </nav>
            <div class="relative flex items-center pl-4 border-l border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick$={() => (mobileMenuOpen.value = !mobileMenuOpen.value)}
            class="md:hidden p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen.value ? (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen.value && (
          <div class="md:hidden border-t border-gray-200 py-4">
            <nav class="flex flex-col space-y-4">
              <Link href="/converters" class="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 group">
                <svg class="w-5 h-5 text-blue-600 group-hover:text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span>Converters</span>
              </Link>
              <Link href="/viewers" class="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2 group">
                <svg class="w-5 h-5 text-purple-600 group-hover:text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Viewers</span>
              </Link>
              <Link href="/compress" class="flex items-center space-x-3 text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 group">
                <svg class="w-5 h-5 text-orange-600 group-hover:text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span>Compress</span>
              </Link>
              <Link href="/samples" class="flex items-center space-x-3 text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 group">
                <svg class="w-5 h-5 text-teal-600 group-hover:text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Samples</span>
              </Link>
              <div class="pt-4 border-t border-gray-200 mt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});
