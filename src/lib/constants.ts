export const SITE = {
  name: "Dynamic Cleaning VIC",
  legalName: "Dynamic Cleaning Victoria",
  phone: "0433 230 310",
  phoneHref: "tel:0433230310",
  email: "info@dynamiccleaningvic.com.au",
  url: "https://dynamiccleaningvic.com.au",
  area: "Eastern Suburbs Melbourne",
  tagline: "Friendly, local, professional window and gutter cleaning",
  guarantee:
    "If you are not satisfied with the job done, we will come back and fix it until you are.",
} as const;

export const SUBURBS = [
  "Vermont South",
  "Mount Waverley",
  "Wheelers Hill",
  "Glen Waverley",
  "Hawthorn",
  "Camberwell",
  "Burwood",
  "Kew",
  "Templestowe",
  "Ivanhoe",
  "Ringwood",
  "Box Hill",
  "Doncaster",
  "Blackburn",
  "Forest Hill",
  "Wantirna",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortTitle: "Windows",
    href: "/services/window-cleaning",
    description:
      "Crystal-clear windows, flyscreens, mirrors and frames that make your home feel brighter and cleaner.",
    imageAlt:
      "Professional window cleaning on a suburban home in Eastern Melbourne",
    benefits: [
      "Brighter rooms with more natural light",
      "Healthier home with less dust and allergens on glass",
      "Flyscreens, mirrors, splashbacks, frames and ledges included",
      "Trusted local cleaner who respects your home",
    ],
    process: [
      {
        step: "1",
        title: "Free quote",
        detail: "Tell us about your home and we’ll provide a clear, no-obligation quote.",
      },
      {
        step: "2",
        title: "Book a time",
        detail: "We schedule around your lifestyle with punctual, reliable arrival.",
      },
      {
        step: "3",
        title: "Thorough clean",
        detail: "Windows, screens, frames and ledges cleaned to a streak-free finish.",
      },
      {
        step: "4",
        title: "Satisfaction check",
        detail: "We walk through the result with you — and fix anything that isn’t right.",
      },
    ],
    faqs: [
      {
        q: "How often should I get my windows cleaned in Melbourne’s eastern suburbs?",
        a: "Most homes benefit from a clean every 3–6 months. Leafy areas like Vermont South and Mount Waverley often need seasonal cleans after heavy pollen or stormy weather.",
      },
      {
        q: "Do you clean inside and outside?",
        a: "Yes. We clean interior and exterior glass, and can include flyscreens, mirrors and splashbacks as part of the job.",
      },
      {
        q: "Are you insured?",
        a: "Yes. Dynamic Cleaning VIC is fully insured, and we treat every home with care and professionalism.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortTitle: "Gutters",
    href: "/services/gutter-cleaning",
    description:
      "Protect your roof and foundations from leaf build-up — essential in Melbourne’s leafy eastern suburbs.",
    imageAlt:
      "Gutter cleaning removing leaves and debris from a residential gutter",
    benefits: [
      "Prevents water overflow that damages fascias and foundations",
      "Stops leaf compost and blocked downpipes",
      "Protects roof longevity in leafy eastern suburbs",
      "Safer than DIY ladder work — we handle the heights",
    ],
    process: [
      {
        step: "1",
        title: "Inspect",
        detail: "We assess gutters, downpipes and access points before we start.",
      },
      {
        step: "2",
        title: "Clear debris",
        detail: "Leaves, moss and sludge are removed carefully from gutters and outlets.",
      },
      {
        step: "3",
        title: "Flush & check",
        detail: "Downpipes are flushed where needed so water flows freely again.",
      },
      {
        step: "4",
        title: "Tidy finish",
        detail: "We leave the site clean and confirm everything is flowing correctly.",
      },
    ],
    faqs: [
      {
        q: "How often do gutters need cleaning in Vermont South and surrounds?",
        a: "In leafy suburbs such as Vermont South, Mount Waverley and Wheelers Hill, we recommend at least once or twice a year — ideally after autumn leaf fall.",
      },
      {
        q: "What happens if gutters aren’t cleaned?",
        a: "Leaves break down into compost, block downpipes, and can cause overflow that damages eaves, walls and foundations.",
      },
      {
        q: "Can you clean two-storey homes?",
        a: "Yes. We are experienced with multi-level homes across the eastern suburbs and use safe, professional methods.",
      },
    ],
  },
  {
    slug: "pressure-cleaning",
    title: "Pressure Cleaning",
    shortTitle: "Pressure",
    href: "/services/pressure-cleaning",
    description:
      "Restore driveways, paths, decks and exteriors — one of the most dramatic ways to freshen your property.",
    imageAlt:
      "Before and after pressure cleaning of a concrete driveway",
    benefits: [
      "Removes years of dirt, mould and mildew",
      "Safer surfaces that are less slippery when wet",
      "Boosts kerb appeal if you’re selling",
      "Ideal for driveways, decks, paths, brickwork and more",
    ],
    process: [
      {
        step: "1",
        title: "Assess surfaces",
        detail: "We match pressure and technique to concrete, timber, brick or paving.",
      },
      {
        step: "2",
        title: "Prep the area",
        detail: "Furniture and sensitive spots are protected before we start.",
      },
      {
        step: "3",
        title: "Deep clean",
        detail: "Specialised equipment lifts grime for a like-new finish.",
      },
      {
        step: "4",
        title: "Reveal the result",
        detail: "You’ll see the before-and-after difference immediately.",
      },
    ],
    faqs: [
      {
        q: "What can you pressure clean?",
        a: "Concrete paths and driveways, wooden decks and patios, eaves, housing exteriors, outdoor furniture, brickwork, pools surrounds and more.",
      },
      {
        q: "Is pressure cleaning safe for all surfaces?",
        a: "We adjust pressure and technique to suit each surface so timber, soft stone and delicate finishes are protected.",
      },
      {
        q: "Will it help if I’m selling my home?",
        a: "Yes. A clean driveway and exterior can add significant kerb appeal and help your home present at its best.",
      },
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I was very impressed. Nigel did all the window cleaning and a houseful of chandeliers. Wonderful work and eager to please. Highly recommended.",
    name: "JH",
    area: "Eastern Suburbs",
  },
  {
    quote:
      "We have been very happy having Dynamic Cleaning to do the various jobs around our house. Nigel has attended to the work and he has been very punctual, efficient and I feel very comfortable with having him work in our home. I have recommended him to other neighbours in our area.",
    name: "HS",
    area: "Eastern Suburbs",
  },
  {
    quote:
      "Local, reliable and thorough. Gutters and windows done in one visit — our place looks so much brighter. Easy to book and great communication.",
    name: "MR",
    area: "Mount Waverley",
  },
] as const;

export const WHY_US = [
  {
    title: "100% satisfaction guarantee",
    detail:
      "If you’re not happy with the job, we come back and make it right — no fuss.",
  },
  {
    title: "Local eastern suburbs focus",
    detail:
      "We know Vermont South, Mount Waverley, Glen Waverley and surrounds inside out.",
  },
  {
    title: "Fully insured & trusted",
    detail:
      "A local family business that treats your home with care and professionalism.",
  },
  {
    title: "Clear communication",
    detail:
      "We ask what you need, confirm the scope, and deliver exactly that — and more.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "how-often-clean-gutters-eastern-suburbs",
    title: "How Often Should You Clean Gutters in Melbourne’s Eastern Suburbs?",
    excerpt:
      "Leafy streets mean beautiful homes — and busy gutters. A practical guide for Vermont South, Mount Waverley and beyond.",
    date: "2026-03-12",
  },
  {
    slug: "benefits-of-regular-window-cleaning",
    title: "The Real Benefits of Regular Window Cleaning",
    excerpt:
      "More light, less dust, and a home that feels fresher — why eastern suburbs homeowners book seasonal window cleans.",
    date: "2026-02-18",
  },
  {
    slug: "pressure-cleaning-before-selling",
    title: "Pressure Cleaning Before You Sell: Is It Worth It?",
    excerpt:
      "Driveways and exteriors sell first impressions. See how a pressure clean can lift kerb appeal without a big renovation budget.",
    date: "2026-01-22",
  },
] as const;
