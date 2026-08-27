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
  { href: "/pressure-cleaning", label: "Pressure Cleaning" },
  { href: "/solar-panel-cleaning", label: "Solar Cleaning" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Great job always for gutter cleaning services. Highly recommend.",
    name: "A.A.",
    suburb: "",
  },
  {
    quote:
      "We've been using Nigel for our window cleaning at our Blackburn South house for two years now, and he's been fantastic. Every six months he takes care of our interior and exterior windows, fly screens, and skylights — and the results are always excellent. Nigel is friendly, reliable, efficient, and consistently on time. His pricing is very reasonable for the quality of work you get. Highly recommend!",
    name: "R.W.",
    suburb: "Blackburn South",
  },
  {
    quote:
      "We recently utilised the service of Dynamic Cleaning after a recommendation from a neighbour. Nigel was professional, efficient and cleaned up after himself. Highly recommend this business and will be sure to use them again.",
    name: "D.W.",
    suburb: "",
  },
  {
    quote:
      "I've been using Nigel's services for years as he always does a great job and his prices are extremely reasonable. He is punctual, polite, helpful and professional. He's done my windows, solar panels and gutters and they all end up satisfyingly clean.",
    name: "P.G.",
    suburb: "",
  },
  {
    quote:
      "I'm glad that I found Dynamic cleaning. Nigel did a very detailed gutter cleaning for me, he is professional and also a very nice person to deal with. He done a great job with reasonable price, includes before and after photos. Will definitely use dynamic cleaning company for my future gutter cleaning, highly recommended to anyone who needs a fabulous cleaning service.",
    name: "C.L.",
    suburb: "",
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
    a: "A standard home gutter clean includes debris removal, a flush, and downpipe clearing. You receive transparent pricing and a free quote before we start — no hidden fees.",
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
    a: "Yes. We pressure clean driveways, paths, decks, brickwork and exterior surfaces across the Eastern Suburbs. Many clients combine pressure cleaning with window or gutter work on the same visit.",
  },
  {
    q: "Do you clean solar panels?",
    a: "Yes. We use water-fed poles to safely wash roof-mounted solar panels and help restore output after Melbourne dust and grime build-up. Call for a free quote.",
  },
] as const;

export const PRESSURE_FAQS = [
  {
    q: "What can you pressure clean in Eastern Suburbs Melbourne?",
    a: "Concrete paths and driveways, wooden decks and patios, eaves, housing exteriors, outdoor furniture, brickwork, pool surrounds and more. Ask us if you are unsure about a surface.",
  },
  {
    q: "Is pressure cleaning safe for all surfaces?",
    a: "We adjust pressure and technique to suit each surface so timber, soft stone and delicate finishes are protected during professional pressure cleaning.",
  },
  {
    q: "Will pressure cleaning help if I am selling my home?",
    a: "Yes. A clean driveway and exterior can add significant kerb appeal for buyers viewing Eastern Suburbs properties — often one of the highest-impact presentation upgrades.",
  },
  {
    q: "How messy is pressure cleaning?",
    a: "There is water runoff during the job. We prepare the area carefully and leave outdoor spaces looking refreshed. We explain what to expect when you book.",
  },
  {
    q: "How do I get a free pressure cleaning quote?",
    a: "Call 0433 230 310 or send your suburb and surface details through our quote form. Free quotes for pressure cleaning Eastern Suburbs Melbourne.",
  },
] as const;

export const SOLAR_FAQS = [
  {
    q: "Why should I get solar panels cleaned in Melbourne?",
    a: "Solar panels can lose around 20% of their efficiency when covered in dirt. Melbourne dust in rain can build up on panels over time. Regular cleaning helps your system work more effectively.",
  },
  {
    q: "How often should solar panels be cleaned?",
    a: "Many Eastern Suburbs homes benefit from an annual solar panel clean, or more often if you notice heavy dust, pollen, bird droppings or reduced output.",
  },
  {
    q: "How do you access panels on my roof?",
    a: "We use water-fed poles to access tricky-to-reach panels, reducing the need for risky DIY ladder work on your roof.",
  },
  {
    q: "Do you service solar panel cleaning across the Eastern Suburbs?",
    a: "Yes — we clean solar panels across Eastern Suburbs Melbourne including Box Hill, Doncaster, Glen Waverley, Mount Waverley and surrounding suburbs.",
  },
  {
    q: "How do I get a free solar panel cleaning quote?",
    a: "Call 0433 230 310 or use our contact form with your suburb and panel details. We provide a free, no-obligation quote.",
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

export const PRESSURE_PROCESS = [
  {
    title: "Assess surfaces",
    detail:
      "We match pressure and technique to concrete, timber, brick, paving or other finishes before we start.",
  },
  {
    title: "Prep the area",
    detail: "Furniture, plants and sensitive spots are protected before washing begins.",
  },
  {
    title: "Deep clean",
    detail:
      "Specialised equipment lifts years of dirt, mould, mildew and oil staining for a like-new finish.",
  },
  {
    title: "Reveal the result",
    detail:
      "You see the before-and-after difference as soon as surfaces dry — safer underfoot and sharper kerb appeal.",
  },
] as const;

export const SOLAR_PROCESS = [
  {
    title: "Free quote",
    detail:
      "Tell us your array size, roof access and suburb — we provide a clear quote with no obligation.",
  },
  {
    title: "Book a time",
    detail: "We schedule around weather and your home, with punctual arrival.",
  },
  {
    title: "Gentle clean",
    detail:
      "Water-fed poles wash away built-up dust and grime without harsh abrasion on panel coatings.",
  },
  {
    title: "Power-ready finish",
    detail: "Sparkling panels ready to do what they do best — create power.",
  },
] as const;
