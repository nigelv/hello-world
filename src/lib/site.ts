export const SITE = {
  name: "Dynamic Cleaning Vic",
  shortName: "Dynamic Cleaning",
  phone: "0433 230 310",
  phoneHref: "tel:0433230310",
  email: "info@dynamiccleaningvic.com.au",
  url: "https://dynamiccleaningvic.com.au",
  area: "Eastern Suburbs Melbourne",
  region: "Victoria",
  tagline: "Crystal-clear windows. Clear, flowing gutters. Local Eastern Suburbs service.",
  hours: "Mon–Sat 7:00am–6:00pm",
  ratingValue: "4.9",
  reviewCount: "45",
} as const;

export const SUBURBS = [
  "Box Hill",
  "Blackburn",
  "Doncaster",
  "Templestowe",
  "Ringwood",
  "Croydon",
  "Glen Waverley",
  "Mount Waverley",
  "Mitcham",
  "Vermont",
  "Surrey Hills",
  "Balwyn",
  "Camberwell",
] as const;

export type Suburb = (typeof SUBURBS)[number];

export function suburbSlug(suburb: string) {
  return suburb.toLowerCase().replace(/\s+/g, "-");
}

export function suburbFromSlug(slug: string): Suburb | undefined {
  return SUBURBS.find((suburb) => suburbSlug(suburb) === slug);
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/window-cleaning", label: "Window Cleaning" },
  { href: "/gutter-cleaning", label: "Gutter Cleaning" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Dynamic Cleaning Vic did an outstanding job on our windows and gutters in Box Hill. Professional, punctual and the results are amazing. Highly recommend!",
    name: "Sarah T.",
    suburb: "Box Hill",
  },
  {
    quote:
      "Best gutter cleaning service we've had in Blackburn. They cleared everything safely and explained the issues. Will use again every year.",
    name: "Michael R.",
    suburb: "Blackburn",
  },
  {
    quote:
      "Excellent window cleaning in Doncaster. Streak-free and they were careful around our garden. Free quote was quick and no pressure.",
    name: "Lisa K.",
    suburb: "Doncaster",
  },
  {
    quote:
      "Reliable and thorough gutter cleaning in Ringwood. Prevented potential leaks before winter. Friendly team, great price.",
    name: "David W.",
    suburb: "Ringwood",
  },
  {
    quote:
      "Top local window cleaners for our Eastern Suburbs home. Transformed the look of the house. Booking was easy and they arrived on time.",
    name: "Emma L.",
    suburb: "Glen Waverley",
  },
] as const;

export const WINDOW_FAQS = [
  {
    q: "How often should I clean windows?",
    a: "Most Eastern Suburbs homes look and feel their best with professional window cleaning every 6–12 months. Properties near busy roads, building sites, or heavy tree cover in suburbs such as Blackburn, Ringwood and Templestowe often benefit from a seasonal clean after pollen, storms or dusty summers.",
  },
  {
    q: "Do you clean inside and outside?",
    a: "Yes. Dynamic Cleaning Vic offers full interior and exterior window cleaning, including frames, sills and flyscreens. You can book exterior-only if you prefer, or a complete inside-and-out service for a streak-free finish throughout the home.",
  },
  {
    q: "Can you clean two-storey homes?",
    a: "Yes. We regularly clean single-storey and two-storey homes across Box Hill, Doncaster, Glen Waverley and surrounding suburbs. We use safe techniques and quality equipment so high glass is cleaned properly without putting your property — or our team — at unnecessary risk.",
  },
  {
    q: "Do you clean flyscreens, frames and sills?",
    a: "Yes. Screens, frames and sills collect the grime that makes glass look dull again within weeks. We include them in a full professional window clean so the result lasts.",
  },
  {
    q: "How do I get a free quote?",
    a: "Call 0433 230 310 or send your suburb, storeys and any add-ons through our quote form. We reply promptly with a no-obligation price for window cleaning in your Eastern Suburbs street.",
  },
] as const;

export const GUTTER_FAQS = [
  {
    q: "How often should gutters be cleaned?",
    a: "At least twice a year in Victoria — typically before winter and after autumn leaf fall. Homes near established trees in Box Hill, Blackburn, Ringwood, Croydon and Glen Waverley often need more frequent visits so downpipes stay clear through Melbourne’s wet months.",
  },
  {
    q: "Do you offer gutter repairs?",
    a: "We inspect as we clean. If we find rusted sections, sagging lengths, leaking joins or blocked downpipes, we explain what we see and can assess and recommend next steps so you are not left guessing after the job.",
  },
  {
    q: "Will you work on two-storey roofs?",
    a: "Yes. We clean gutters on single and double-storey homes. We do not place ladders on fragile roof tiles. Safety and protecting your roof come first on every Eastern Suburbs job.",
  },
  {
    q: "Do you install gutter guards?",
    a: "Gutter guard supply and install is available as an add-on after a clean. Guards reduce leaf build-up; they still need periodic checks, especially under deciduous trees common across the Eastern Suburbs.",
  },
  {
    q: "What is included in a typical clean?",
    a: "A standard 3–4 bedroom home gutter clean from $220 includes debris removal, a flush, and downpipe clearing. You receive transparent pricing and a free quote before we start — no hidden fees.",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "Which suburbs do you serve?",
    a: "We provide window and gutter cleaning across Melbourne’s Eastern Suburbs including Box Hill, Blackburn, Doncaster, Templestowe, Ringwood, Croydon, Glen Waverley, Mount Waverley, Mitcham, Vermont, Surrey Hills, Balwyn and Camberwell, plus broader Victoria on request.",
  },
  {
    q: "Are quotes really free?",
    a: "Yes. Call 0433 230 310 or use the online form for a no-obligation quote. Tell us your suburb, property type and whether you need windows, gutters, or both.",
  },
  {
    q: "Can I book windows and gutters together?",
    a: "Yes — and it is the most popular option. Combining window and gutter cleaning on the same visit keeps your home looking sharp and protected, and is usually more convenient than two separate bookings.",
  },
  {
    q: "Do you do pressure washing?",
    a: "Pressure cleaning is a related service we can discuss when quoting paths, driveways or exterior surfaces. Window and gutter cleaning remain our core work across the Eastern Suburbs.",
  },
] as const;

export const WINDOW_PROCESS = [
  {
    title: "Inspection",
    detail:
      "We walk the property, note storeys, access, screens, hard-water spotting and any fragile plantings so the quote and the clean match the home in front of us.",
  },
  {
    title: "Eco-friendly wash",
    detail:
      "Soft washing or a pure-water system lifts dirt, grime and mineral film from glass without harsh runoff on gardens, paving or paintwork.",
  },
  {
    title: "Squeegee finish",
    detail:
      "A professional squeegee finish leaves interior and exterior glass streak-free, including those awkward corners that DIY misses.",
  },
  {
    title: "Frame detailing",
    detail:
      "Frames, sills and tracks are detailed so the whole opening looks finished — not just the pane in the middle.",
  },
] as const;

export const GUTTER_PROCESS = [
  {
    title: "Inspection",
    detail:
      "We check gutter fall, overflow points, downpipes and nearby trees so we know where water is failing to drain before we start.",
  },
  {
    title: "Debris removal",
    detail:
      "Leaves, sludge and build-up come out by hand or vacuum — not blasted onto your garden beds or into the stormwater untreated.",
  },
  {
    title: "Flush & downpipes",
    detail:
      "Gutters are flushed and downpipes cleared so rain has a clear path off the roof, along the fascia and away from the house.",
  },
  {
    title: "Optional guards",
    detail:
      "If guards will help your particular roof and tree cover, we can quote supply and install after the clean.",
  },
] as const;
