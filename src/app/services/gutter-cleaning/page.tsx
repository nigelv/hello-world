import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_ARTICLES } from "@/lib/service-content";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[1];

export const metadata: Metadata = {
  title: "Gutter Cleaning Eastern Suburbs Melbourne | Vermont South & More",
  description:
    "Gutter cleaning Eastern Suburbs Melbourne including Vermont South & Mount Waverley. Prevent blockages and water damage. Free quote: 0433 230 310.",
  alternates: { canonical: `${SITE.url}/services/gutter-cleaning` },
  openGraph: {
    title: "Gutter Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
    images: [{ url: service.heroImage, alt: service.imageAlt }],
  },
};

export default function GutterCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServicePageContent
        service={service}
        article={SERVICE_ARTICLES[service.slug]}
      />
    </>
  );
}
