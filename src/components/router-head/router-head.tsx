import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => {
        const { dangerouslySetInnerHTML, ...restProps } = s.props || {};
        return (
          <style key={s.key} {...restProps} dangerouslySetInnerHTML={s.style} />
        );
      })}

      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://formipeek.com#organization",
              "name": "FormiPeek",
              "url": "https://formipeek.com",
              "logo": "https://formipeek.com/logo.png",
              "sameAs": []
            },
            {
              "@type": "WebSite",
              "@id": "https://formipeek.com/#website",
              "url": "https://formipeek.com/",
              "name": "FormiPeek - Free Online File Converter",
              "description": "Convert files between 300+ formats instantly. Fast, secure, and free file conversion service.",
              "publisher": { "@id": "https://formipeek.com#organization" }
            }
          ]
        })}
      />
    </>
  );
});
