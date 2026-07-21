import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_ARTICLES } from "@/lib/service-content";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[3];

export const metadata: Metadata = {
  title: "Solar Panel Cleaning Eastern Suburbs Melbourne",
  description:
    "Solar panel cleaning Eastern Suburbs Melbourne. Remove dust and grime, restore efficiency — water-fed pole access. Free quotes: call 0433 230 310.",
  alternates: { canonical: `${SITE.url}/services/solar-panel-cleaning` },
  openGraph: {
    title: "Solar Panel Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
    images: [{ url: service.heroImage, alt: service.imageAlt }],
  },
};

export default function SolarPanelCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServicePageContent
        service={service}
        article={SERVICE_ARTICLES["solar-panel-cleaning"]}
      />
    </>
  );
}
