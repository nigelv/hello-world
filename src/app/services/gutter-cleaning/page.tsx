import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[1];

export const metadata: Metadata = {
  title: "Gutter Cleaning Eastern Suburbs Melbourne | Vermont South & More",
  description:
    "Gutter cleaning for leafy eastern suburbs including Vermont South, Mount Waverley and Glen Waverley. Prevent blockages and water damage. Free quote: 0433 230 310.",
  alternates: { canonical: `${SITE.url}/services/gutter-cleaning` },
  openGraph: {
    title: "Gutter Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
  },
};

export default function GutterCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServicePageContent
        service={service}
        intro={[
          "Gutter cleaning is one of the downsides to living in Melbourne’s beautiful leafy suburbs. If gutters aren’t cleaned regularly, leaves build up and start to break down into compost — blocking outlets and overflowing onto eaves, walls and foundations.",
          "Dynamic Cleaning VIC keeps your gutters clear so rainwater flows where it should. We service Vermont South, Mount Waverley, Wheelers Hill, Glen Waverley and surrounding eastern suburbs with careful, professional work.",
          "Skip the risky ladder work. We’ll clear debris, check downpipes and leave your property tidy — backed by our satisfaction guarantee.",
        ]}
        beforeAlt="Residential gutters clogged with leaves and debris before cleaning in Vermont South"
        afterAlt="Clear flowing gutters after professional gutter cleaning by Dynamic Cleaning VIC"
        caption="Gutter cleaning before & after — essential maintenance in leafy eastern suburbs."
      />
    </>
  );
}
