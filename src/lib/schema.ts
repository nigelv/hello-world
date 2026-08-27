import { SITE, SUBURBS, TESTIMONIALS } from "@/lib/site";

const areaServed = [
  "Eastern Suburbs Melbourne",
  ...SUBURBS,
  "Victoria",
];

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description:
      "Professional window and gutter cleaning services in Melbourne's Eastern Suburbs and Victoria.",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/hero-window-cleaning.jpg`,
    areaServed: areaServed.map((name) => ({ "@type": "Place", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    openingHours: "Mo-Sa 07:00-18:00",
    serviceType: ["Window Cleaning", "Gutter Cleaning", "Pressure Cleaning", "Solar Panel Cleaning"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Cleaning",
            description:
              "Professional interior and exterior window cleaning for homes in Eastern Suburbs Melbourne",
            url: `${SITE.url}/window-cleaning`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gutter Cleaning",
            description:
              "Thorough gutter and downpipe cleaning to prevent damage in Victoria homes",
            url: `${SITE.url}/gutter-cleaning`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pressure Cleaning",
            description:
              "Professional pressure cleaning for driveways, decks, paths and exteriors",
            url: `${SITE.url}/pressure-cleaning`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solar Panel Cleaning",
            description:
              "Solar panel cleaning to remove dust and restore power output",
            url: `${SITE.url}/solar-panel-cleaning`,
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.ratingValue,
      reviewCount: SITE.reviewCount,
      bestRating: "5",
    },
    review: TESTIMONIALS.map((item) => ({
      "@type": "Review",
      reviewBody: item.quote,
      author: { "@type": "Person", name: `${item.name}, ${item.suburb}` },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
    },
    areaServed: areaServed,
    url: `${SITE.url}${input.path}`,
  };
}
