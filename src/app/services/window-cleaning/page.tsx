import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_ARTICLES } from "@/lib/service-content";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Window Cleaning Eastern Suburbs Melbourne",
  description:
    "Professional window cleaning Eastern Suburbs Melbourne. Interior & exterior glass, flyscreens and frames. Free quotes — call 0433 230 310.",
  alternates: { canonical: `${SITE.url}/services/window-cleaning` },
  openGraph: {
    title: "Window Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
    images: [{ url: service.heroImage, alt: service.imageAlt }],
  },
};

export default function WindowCleaningPage() {
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
