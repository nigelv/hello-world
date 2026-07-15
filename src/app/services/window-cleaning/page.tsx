import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageContent } from "@/components/ServicePageContent";
import { SERVICES, SITE } from "@/lib/constants";
import { faqSchema, serviceSchema } from "@/lib/schema";

const service = SERVICES[0];

export const metadata: Metadata = {
  title: "Window Cleaning Eastern Suburbs Melbourne",
  description:
    "Professional window cleaning in Melbourne’s eastern suburbs. Interior & exterior glass, flyscreens, mirrors and frames. Call 0433 230 310 for a free quote.",
  alternates: { canonical: `${SITE.url}/services/window-cleaning` },
  openGraph: {
    title: "Window Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description: service.description,
  },
};

export default function WindowCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema(service.slug)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <ServicePageContent
        service={service}
        intro={[
          "At Dynamic Cleaning, we know how to help you look after your most valuable investment — your home. Having your windows cleaned makes your home seem brighter and feel cleaner. Natural light streaming in through clean glass lightens your whole house.",
          "Many people don’t realise how much dirt and dust collects on windows and frames. Regular cleans look great and can support a healthier home. We also clean flyscreens, mirrors, splashbacks, frames and ledges — and we make sure you are 100% satisfied.",
          "Dynamic Cleaning is a local family business: reliable, professional and friendly. We find out exactly what you want done, then go above and beyond to deliver it.",
        ]}
        beforeAlt="Cloudy residential windows before professional window cleaning in the eastern suburbs"
        afterAlt="Streak-free sparkling windows after Dynamic Cleaning VIC window cleaning"
        caption="Window cleaning before & after — brighter rooms and clearer views."
      />
    </>
  );
}
