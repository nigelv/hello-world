export const SITE = {
  name: "Dynamic Cleaning VIC",
  legalName: "Dynamic Cleaning Victoria",
  phone: "0433 230 310",
  phoneHref: "tel:0433230310",
  email: "info@dynamiccleaningvic.com.au",
  url: "https://dynamiccleaningvic.com.au",
  area: "Eastern Suburbs Melbourne",
  /** Service-area NAP — keep identical across site, GBP and citations */
  address: {
    line1: "Eastern Suburbs Melbourne",
    locality: "Melbourne",
    region: "VIC",
    postalCode: "3133",
    country: "Australia",
    countryCode: "AU",
    display: "Eastern Suburbs Melbourne, VIC 3133",
  },
  geo: {
    latitude: -37.857,
    longitude: 145.152,
  },
  /** Update with your live Google Business Profile URL when claimed */
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=Dynamic+Cleaning+Victoria+Eastern+Suburbs+Melbourne",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.4!2d145.152!3d-37.857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad643c3c6e6e6e7%3A0x0!2sMount%20Waverley%20VIC!5e0!3m2!1sen!2sau!4v1700000000000",
  tagline: "Friendly, local, professional window and gutter cleaning",
  /** Short brand line under logo — keep consistent across site & marketing */
  brandLine: "Eastern suburbs. Done properly.",
  defaultTitle:
    "Window Gutter Pressure Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
  defaultDescription:
    "Professional local window, gutter & pressure cleaning Eastern Melbourne suburbs. Free quotes. Call 0433 230 310.",
  guarantee:
    "If you are not satisfied with the job done, we will come back and fix it until you are.",
  trustStrip: ["Fully insured", "Local eastern suburbs", "Satisfaction guarantee"] as const,
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
  "Ashwood",
  "Chadstone",
  "Malvern East",
  "Nunawading",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const NEXT_STEPS = [
  {
    step: "1",
    title: "Call or request a quote",
    detail: "Tell us your suburb and what you need cleaned.",
  },
  {
    step: "2",
    title: "Get a clear free quote",
    detail: "No obligation — we confirm scope and timing upfront.",
  },
  {
    step: "3",
    title: "We book & deliver",
    detail: "Punctual, careful work with a satisfaction guarantee.",
  },
] as const;

export const CITATIONS = [
  {
    name: "Google Business Profile",
    href: SITE.googleBusinessUrl,
    note: "Primary local listing — reviews, photos and NAP",
  },
  {
    name: "Yellow Pages",
    href: "https://www.yellowpages.com.au/",
    note: "Australian business directory citation",
  },
  {
    name: "True Local",
    href: "https://www.truelocal.com.au/",
    note: "Local services directory",
  },
  {
    name: "Oneflare",
    href: "https://www.oneflare.com.au/",
    note: "Home services marketplace",
  },
  {
    name: "hipages",
    href: "https://hipages.com.au/",
    note: "Trade and home improvement directory",
  },
  {
    name: "Hotfrog",
    href: "https://www.hotfrog.com.au/",
    note: "Business citation listing",
  },
] as const;

export const SERVICES = [
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortTitle: "Windows",
    href: "/services/window-cleaning",
    description:
      "Professional window cleaning Eastern Suburbs Melbourne — streak-free glass, flyscreens, mirrors and frames for brighter homes.",
    imageAlt: "window cleaning Eastern Suburbs Melbourne",
    heroImage: "/images/photos/hero-window.jpg",
    beforeImage: "/images/photos/window-before.jpg",
    afterImage: "/images/photos/window-after.jpg",
    beforeAlt: "dirty windows before window cleaning Eastern Suburbs Melbourne",
    afterAlt: "sparkling clean windows after window cleaning Eastern Suburbs Melbourne",
    benefits: [
      "Brighter rooms with more natural light across eastern suburbs homes",
      "Less dust and allergens collecting on glass and frames",
      "Flyscreens, mirrors, splashbacks, frames and ledges included",
      "Trusted local cleaner who respects your home and privacy",
      "Interior and exterior glass cleaned to a streak-free finish",
      "Ideal for Vermont South, Mount Waverley, Glen Waverley and surrounds",
    ],
    process: [
      {
        step: "1",
        title: "Free quote",
        detail:
          "Tell us about your home in the eastern suburbs and we provide a clear, no-obligation quote.",
      },
      {
        step: "2",
        title: "Book a time",
        detail: "We schedule around your lifestyle with punctual, reliable arrival.",
      },
      {
        step: "3",
        title: "Thorough clean",
        detail:
          "Windows, screens, frames and ledges cleaned carefully inside and out.",
      },
      {
        step: "4",
        title: "Satisfaction check",
        detail:
          "We walk through the result with you — and fix anything that isn’t right.",
      },
    ],
    faqs: [
      {
        q: "How often should I get window cleaning in Eastern Suburbs Melbourne?",
        a: "Most homes benefit from professional window cleaning every 3–6 months. Leafy suburbs like Vermont South, Mount Waverley and Wheelers Hill often need seasonal cleans after pollen, storms or building works nearby.",
      },
      {
        q: "Do you clean inside and outside windows?",
        a: "Yes. Dynamic Cleaning VIC cleans interior and exterior glass, and can include flyscreens, mirrors, splashbacks, frames and ledges as part of your window cleaning service.",
      },
      {
        q: "Are you insured for residential window cleaning?",
        a: "Yes. We are fully insured and treat every eastern suburbs home with care. Window cleaning can feel personal — we work respectfully and professionally throughout your property.",
      },
      {
        q: "Which suburbs do you cover for window cleaning?",
        a: "We provide window cleaning across Eastern Suburbs Melbourne including Vermont South, Mount Waverley, Glen Waverley, Wheelers Hill, Burwood, Box Hill, Doncaster, Hawthorn, Camberwell, Kew and more.",
      },
      {
        q: "How do I get a free window cleaning quote?",
        a: "Call 0433 230 310 or use our contact form with your suburb and property details. We’ll reply promptly with a free quote for window cleaning Eastern Suburbs Melbourne.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortTitle: "Gutters",
    href: "/services/gutter-cleaning",
    description:
      "Gutter cleaning Eastern Suburbs Melbourne — clear leaves, protect roofs and prevent water damage in leafy suburbs like Vermont South and Mount Waverley.",
    imageAlt: "gutter cleaning Eastern Suburbs Melbourne",
    heroImage: "/images/photos/gutter-before.jpg",
    beforeImage: "/images/photos/gutter-before.jpg",
    afterImage: "/images/photos/gutter-after.jpg",
    beforeAlt: "blocked gutters full of leaves before gutter cleaning Eastern Suburbs Melbourne",
    afterAlt: "clear flowing gutters after gutter cleaning Eastern Suburbs Melbourne",
    benefits: [
      "Prevents overflow that damages fascias, eaves and foundations",
      "Stops leaf compost and blocked downpipes in leafy suburbs",
      "Protects roof longevity across Eastern Suburbs Melbourne",
      "Safer than DIY ladder work — we handle multi-level homes",
      "Ideal after autumn leaf fall in Vermont South and Mount Waverley",
      "Fully insured local gutter cleaning with a satisfaction guarantee",
    ],
    process: [
      {
        step: "1",
        title: "Inspect",
        detail: "We assess gutters, downpipes and safe access before we start.",
      },
      {
        step: "2",
        title: "Clear debris",
        detail:
          "Leaves, moss and sludge are removed carefully from gutters and outlets.",
      },
      {
        step: "3",
        title: "Flush & check",
        detail: "Downpipes are flushed where needed so rainwater flows freely.",
      },
      {
        step: "4",
        title: "Tidy finish",
        detail:
          "We leave the site clean and confirm everything is flowing correctly.",
      },
    ],
    faqs: [
      {
        q: "How often do gutters need cleaning in Vermont South and Mount Waverley?",
        a: "In leafy eastern suburbs such as Vermont South, Mount Waverley and Wheelers Hill, we recommend gutter cleaning at least once or twice a year — ideally after autumn leaf fall and again if storms dump heavy debris.",
      },
      {
        q: "What happens if gutters aren’t cleaned regularly?",
        a: "Leaves break down into compost, block downpipes, and cause overflow that can damage eaves, walls, landscaping and foundations. Regular gutter cleaning Eastern Suburbs Melbourne protects your home’s integrity.",
      },
      {
        q: "Can you clean gutters on two-storey homes?",
        a: "Yes. We are experienced with multi-level homes across the eastern suburbs and use safe, professional methods for residential gutter cleaning.",
      },
      {
        q: "Do you remove debris from the property?",
        a: "We clear gutters and leave your site tidy. Ask us when you book if you need debris bagged or removed as part of the job.",
      },
      {
        q: "How do I book gutter cleaning near Glen Waverley?",
        a: "Call 0433 230 310 for a free quote. Tell us your suburb (Glen Waverley, Burwood, Box Hill, etc.) and home type so we can schedule reliable local gutter cleaning.",
      },
    ],
  },
  {
    slug: "pressure-cleaning",
    title: "Pressure Cleaning",
    shortTitle: "Pressure",
    href: "/services/pressure-cleaning",
    description:
      "Pressure cleaning Eastern Suburbs Melbourne — restore driveways, decks, paths and exteriors for safer, fresher kerb appeal.",
    imageAlt: "pressure cleaning Eastern Suburbs Melbourne",
    heroImage: "/images/photos/pressure-before.jpg",
    beforeImage: "/images/photos/pressure-before.jpg",
    afterImage: "/images/photos/pressure-after.jpg",
    beforeAlt: "dirty driveway before pressure cleaning Eastern Suburbs Melbourne",
    afterAlt: "clean driveway after pressure cleaning Eastern Suburbs Melbourne",
    benefits: [
      "Removes years of dirt, mould, mildew and oil staining",
      "Safer outdoor surfaces that are less slippery when wet",
      "Boosts kerb appeal if you’re selling in the eastern suburbs",
      "Ideal for driveways, decks, paths, brickwork and exteriors",
      "Dramatic before-and-after results without a renovation budget",
      "Local, insured pressure cleaning with clear communication",
    ],
    process: [
      {
        step: "1",
        title: "Assess surfaces",
        detail:
          "We match pressure and technique to concrete, timber, brick or paving.",
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
        q: "What can you pressure clean in Eastern Suburbs Melbourne?",
        a: "Concrete paths and driveways, wooden decks and patios, eaves, housing exteriors, outdoor furniture, brickwork, pool surrounds and more. Ask us if you’re unsure about a surface.",
      },
      {
        q: "Is pressure cleaning safe for all surfaces?",
        a: "We adjust pressure and technique to suit each surface so timber, soft stone and delicate finishes are protected during professional pressure cleaning.",
      },
      {
        q: "Will pressure cleaning help if I’m selling my home?",
        a: "Yes. A clean driveway and exterior can add significant kerb appeal for buyers viewing eastern suburbs properties — often one of the highest-impact, lowest-cost presentation upgrades.",
      },
      {
        q: "How messy is pressure cleaning?",
        a: "There is water runoff during the job. We prepare the area carefully and leave outdoor spaces looking refreshed. We’ll explain what to expect when you book.",
      },
      {
        q: "How do I get a free pressure cleaning quote?",
        a: "Call 0433 230 310 or send your suburb and surface details via our contact form. Free quotes for pressure cleaning Eastern Suburbs Melbourne.",
      },
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const TESTIMONIALS = [
  {
    quote:
      "I was very impressed. Nigel did all the window cleaning and a houseful of chandeliers. Wonderful work and eager to please. Highly recommended.",
    name: "JH",
    area: "Eastern Suburbs",
    service: "Window cleaning",
  },
  {
    quote:
      "We have been very happy having Dynamic Cleaning to do the various jobs around our house. Nigel has attended to the work and he has been very punctual, efficient and I feel very comfortable with having him work in our home. I have recommended him to other neighbours in our area.",
    name: "HS",
    area: "Eastern Suburbs",
    service: "Windows & gutters",
  },
  {
    quote:
      "Local, reliable and thorough. Gutters and windows done in one visit — our place looks so much brighter. Easy to book and great communication.",
    name: "MR",
    area: "Mount Waverley",
    service: "Windows & gutters",
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
