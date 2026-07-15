import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_ARTICLES } from "@/lib/service-content";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[2];

export const metadata: Metadata = {
  title: "Pressure Cleaning Eastern Suburbs Melbourne",
  description:
    "Pressure cleaning Eastern Suburbs Melbourne for driveways, decks and exteriors. Restore surfaces and boost kerb appeal. Call 0433 230 310.",
  alternates: { canonical: `${SITE.url}/services/pressure-cleaning` },
  openGraph: {
    title: "Pressure Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
    images: [{ url: service.heroImage, alt: service.imageAlt }],
  },
};

export default function PressureCleaningPage() {
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
