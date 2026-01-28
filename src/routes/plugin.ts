import type { RequestHandler } from "@builder.io/qwik-city";
import { supportedLanguages } from "~/i18n";

/**
 * Global plugin to handle redirects from non-localized URLs to /en/ versions
 * This prevents duplicate content issues with Google and ensures consistent routing
 * 
 * Redirects all URLs without language prefix (except homepage /) to /en/ version
 * Example: /converters -> /en/converters/
 *          /convert/jpg-to-png -> /en/convert/jpg-to-png/
 */
export const onRequest: RequestHandler = async ({ url, redirect }) => {
  const pathname = url.pathname;
  
  // Skip if already on a localized path (starts with language code)
  const languageCodes = supportedLanguages.map(lang => lang.code);
  const pathParts = pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];
  
  if (languageCodes.includes(firstPart)) {
    return; // Already localized, no redirect needed
  }
  
  // Skip homepage - it serves English content without /en/ prefix
  if (pathname === '/' || pathname === '') {
    return;
  }
  
  // Skip static files and special paths
  const staticExtensions = ['.css', '.js', '.json', '.xml', '.txt', '.ico', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot', '.webp', '.avif'];
  const hasExtension = staticExtensions.some(ext => pathname.toLowerCase().endsWith(ext));
  
  if (
    hasExtension || // Files with extensions
    pathname.startsWith('/_') || // Qwik internal routes
    pathname.startsWith('/api/') || // API routes
    pathname === '/health' || // Health check
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/sitemap.xsl' ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/manifest.json')
  ) {
    return; // Don't redirect static files or special paths
  }
  
  // All other paths need to be redirected to /en/ version
  // Preserve query string and hash if present
  const queryString = url.search || '';
  const hash = url.hash || '';
  
  // Ensure trailing slash for consistency (Qwik routing)
  const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const newPath = `/en${cleanPath}${queryString}${hash}`;
  
  // Permanent redirect (301) to English localized version
  throw redirect(301, newPath);
};
