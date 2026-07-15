import { SITE, SERVICES, SUBURBS } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: `${SITE.tagline} — window, gutter and pressure cleaning across ${SITE.area}.`,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: SUBURBS.map((suburb) => ({
      "@type": "City",
      name: `${suburb}, Victoria, Australia`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Eastern Suburbs",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -37.857,
      longitude: 145.152,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${SITE.url}${service.href}`,
          areaServed: SITE.area,
          provider: { "@id": `${SITE.url}/#business` },
        },
      })),
    },
  };
}

export function serviceSchema(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE.url}${service.href}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.legalName,
      telephone: SITE.phone,
      url: SITE.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.area,
    },
    serviceType: service.title,
  };
}

export function faqSchema(
  faqs: readonly { q: string; a: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
