import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { supportedLanguages } from "~/i18n";
import { useCurrentLocale, getLocalizedPath, getPathWithoutLocale } from "~/i18n/utils";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const currentLang = useCurrentLocale();

  // Check if current page is homepage
  const pathParts = loc.url.pathname.split("/").filter(Boolean);
  const isHomepage =
    pathParts.length === 0 || (pathParts.length === 1 && pathParts[0] === currentLang);

  // Canonical URL: normalized with trailing slash (except homepage) to avoid duplicate-content
  // Google treats /en/convert/heic-to-gif and /en/convert/heic-to-gif/ as different URLs otherwise
  const pathname = loc.url.pathname;
  const canonicalPath =
    isHomepage && (pathname === "/" || pathname === "")
      ? "/"
      : pathname.endsWith("/")
        ? pathname
        : `${pathname}/`;
  const canonical = loc.url.origin + canonicalPath;
  const pageUrl = canonical;

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {/* hreflang links for all languages - pointing to the same page in different languages */}
      {(() => {
        const basePath = getPathWithoutLocale(loc.url.pathname);
        return (
          <>
            {supportedLanguages.map((lang) => {
              const localizedPath = getLocalizedPath(basePath, lang.code);
              const href = `https://formipeek.com${localizedPath}`;
              return (
                <link key={`hreflang-${lang.code}`} rel="alternate" hreflang={lang.code} href={href} />
              );
            })}
            <link rel="alternate" hreflang="x-default" href={`https://formipeek.com${getLocalizedPath(basePath, "en")}`} />
          </>
        );
      })()}

      {head.styles.map((s) => {
        const { dangerouslySetInnerHTML: _, ...restProps } = s.props || {};
        const styleContent = s.props?.dangerouslySetInnerHTML || s.style;
        return <style key={s.key} {...restProps} dangerouslySetInnerHTML={styleContent} />;
      })}

      {/* CSS link for dev mode - Vite doesn't always add it to head.styles in dev */}
      {import.meta.env.DEV && <link rel="stylesheet" href="/src/global.css" />}

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-27BJNENPNW"></script>
      <script
        dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-27BJNENPNW');
        `}
      />

      {/* JSON-LD Schema - Organization (always) + WebSite (homepage only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://formipeek.com#organization",
              name: "FormiPeek",
              url: "https://formipeek.com",
              logo: {
                "@type": "ImageObject",
                url: "https://formipeek.com/logo.png",
              },
            },
            // WebSite schema only on homepage
            ...(isHomepage
              ? [
                  {
                    "@type": "WebSite",
                    "@id": `https://formipeek.com/${
                      currentLang === "en" ? "" : currentLang + "/"
                    }#website`,
                    url: pageUrl,
                    name: "FormiPeek - Free Online File Converter",
                    description:
                      "Convert files between 300+ formats instantly. Fast, secure, and free file conversion service.",
                    inLanguage: currentLang,
                    publisher: { "@id": "https://formipeek.com#organization" },
                    potentialAction: {
                      "@type": "SearchAction",
                      target: "https://formipeek.com/search?q={search_term_string}",
                      "query-input": "required name=search_term_string",
                    },
                  },
                ]
              : []),
          ],
        })}
      />
    </>
  );
});
