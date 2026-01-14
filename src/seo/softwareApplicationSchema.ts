export function getSoftwareApplicationSchema({
  name,
  description,
  url,
  lang,
}: {
  name: string;
  description: string;
  url: string;
  lang: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: "FileConverter",
    operatingSystem: "All",
    inLanguage: lang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url,
  };
}
