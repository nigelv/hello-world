import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[2];

export const metadata: Metadata = {
  title: "Pressure Cleaning Eastern Suburbs Melbourne",
  description:
    "Pressure cleaning for driveways, decks, paths and exteriors across Melbourne’s eastern suburbs. Restore surfaces and boost kerb appeal. Call 0433 230 310.",
  alternates: { canonical: `${SITE.url}/services/pressure-cleaning` },
  openGraph: {
    title: "Pressure Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
  },
};

export default function PressureCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServicePageContent
        service={service}
        intro={[
          "Over time, dirt builds up and makes tiles, bricks and timber look old and worn. Driveways can look grungy after years of oil and dirt. That build-up doesn’t just look bad — it can make surfaces slippery and unsafe when wet.",
          "At Dynamic Cleaning we use specialised equipment to make paths, decks and driveways look as good as new. It’s one of our favourite services because the change is so dramatic — including removing years of mildew and mould.",
          "Planning to sell? A thorough clean can add serious kerb appeal. We clean concrete paths and driveways, wooden decks and patios, eaves, exteriors, outdoor furniture, brickwork, pool surrounds and more.",
        ]}
        beforeAlt="Dirty stained concrete driveway before pressure cleaning in eastern Melbourne"
        afterAlt="Bright clean driveway after professional pressure cleaning by Dynamic Cleaning VIC"
        caption="Pressure cleaning before & after — restore surfaces without a renovation."
      />
    </>
  );
}
