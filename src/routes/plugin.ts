import type { RequestHandler } from "@builder.io/qwik-city";

/**
 * Global plugin to handle redirects from non-localized URLs to /en/ versions
 * This prevents duplicate content issues with Google and ensures consistent routing
 */
export const onRequest: RequestHandler = async ({ url, redirect }) => {
  const pathname = url.pathname;
  
  // Skip if already on a localized path (starts with language code)
  const localizedPrefixes = [
    '/en/', '/pl/', '/de/', '/es/', '/fr/', '/it/', '/pt/', '/ru/',
    '/ja/', '/zh/', '/ko/', '/ar/', '/hi/', '/id/', '/tr/', '/nl/', '/sv/'
  ];
  
  if (localizedPrefixes.some(prefix => pathname.startsWith(prefix))) {
    return; // Already localized, no redirect needed
  }
  
  // Skip static files and special paths
  if (
    pathname.includes('.') || // Files with extensions (css, js, images, etc.)
    pathname.startsWith('/_') || // Qwik internal routes
    pathname.startsWith('/api/') || // API routes if any
    pathname === '/health' || // Health check
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return; // Don't redirect static files or special paths
  }
  
  // All pages are now localized, no need to skip any
  
  // Root path (/) serves English content without redirect
  // Other languages use /[locale]/ prefix (e.g. /pl/, /de/)
  
  // Redirect paths that should be localized to /en/ version
  const pathsToLocalize = [
    '/convert/',
    '/converters',
    '/viewers',
    '/compress',
    '/samples'
  ];
  
  const needsRedirect = pathsToLocalize.some(path => 
    pathname === path || pathname.startsWith(path + '/') || pathname === path.replace('/', '')
  );
  
  if (needsRedirect) {
    // Permanent redirect (301) to English localized version
    const newPath = pathname.startsWith('/') ? `/en${pathname}` : `/en/${pathname}`;
    throw redirect(301, newPath);
  }
};
