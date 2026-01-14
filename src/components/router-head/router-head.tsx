import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { supportedLanguages } from "~/i18n";
import { useCurrentLocale } from "~/i18n/utils";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const currentLang = useCurrentLocale();

  // Canonical URL without query params
  const canonical = loc.url.origin + loc.url.pathname;
  const pageUrl = canonical;

  // Check if current page is homepage
  const pathParts = loc.url.pathname.split("/").filter(Boolean);
  const isHomepage =
    pathParts.length === 0 || (pathParts.length === 1 && pathParts[0] === currentLang);

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

      {/* hreflang links for all languages */}
      {supportedLanguages.map((lang) => {
        const href =
          lang.code === "en" ? "https://formipeek.com/" : `https://formipeek.com/${lang.code}/`;
        return (
          <link key={`hreflang-${lang.code}`} rel="alternate" hreflang={lang.code} href={href} />
        );
      })}
      <link rel="alternate" hreflang="x-default" href="https://formipeek.com/" />

      {head.styles.map((s) => {
        const { dangerouslySetInnerHTML, ...restProps } = s.props || {};
        return <style key={s.key} {...restProps} dangerouslySetInnerHTML={s.style} />;
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
