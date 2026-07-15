import { SITE, SERVICES, SUBURBS } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.defaultDescription,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/hero-window-cleaning.svg`,
    priceRange: "$$",
    sameAs: [SITE.googleBusinessUrl],
    areaServed: SUBURBS.map((suburb) => ({
      "@type": "City",
      name: `${suburb}, Victoria, Australia`,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: ["English"],
    },
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
      name: "Window, Gutter and Pressure Cleaning Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE.url}${service.href}#service`,
          name: service.title,
          description: service.description,
          url: `${SITE.url}${service.href}`,
          serviceType: service.title,
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
    "@id": `${SITE.url}${service.href}#service`,
    name: `${service.title} Eastern Suburbs Melbourne`,
    description: service.description,
    url: `${SITE.url}${service.href}`,
    serviceType: service.title,
    provider: {
      "@id": `${SITE.url}/#business`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SITE.area,
    },
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
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

export function blogPostingSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: `${SITE.url}${post.image}`,
    author: {
      "@type": "Organization",
      name: SITE.legalName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };
}
