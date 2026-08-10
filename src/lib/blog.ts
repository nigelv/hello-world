export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-clean-gutters-eastern-suburbs",
    title: "How Often Should You Clean Gutters in Melbourne’s Eastern Suburbs?",
    excerpt:
      "Leafy streets mean beautiful homes — and busy gutters. A practical guide for Vermont South, Mount Waverley and beyond.",
    date: "2026-03-12",
    image: "/images/blog-gutters.svg",
    imageAlt: "gutter cleaning Eastern Suburbs Melbourne leafy residential street",
    sections: [
      {
        heading: "Why eastern suburbs gutters clog faster",
        paragraphs: [
          "Melbourne’s eastern suburbs are famously leafy. Vermont South, Mount Waverley, Wheelers Hill and Glen Waverley sit under mature trees that shed heavily in autumn and after storms. Those leaves don’t just sit on the lawn — they land in gutters, trap moisture, and break down into compost that blocks outlets.",
          "If water can’t escape, it overflows onto fascias and into eaves. Over time that moisture risks timber damage, stained walls and foundation issues. Regular gutter cleaning Eastern Suburbs Melbourne is preventative maintenance, not a luxury.",
        ],
      },
      {
        heading: "A simple cleaning schedule that works",
        paragraphs: [
          "Most leafy homes do well with gutter cleaning once or twice a year. Book after major leaf fall, then check again if summer storms dump twigs and seed pods. Properties under dense canopy may need a third visit.",
          "Signs you shouldn’t wait: plants growing in gutters, water pouring over the edge in rain, damp patches near ceilings, or downpipes that barely trickle. Call Dynamic Cleaning VIC on 0433 230 310 for a free quote when you notice any of these.",
        ],
      },
      {
        heading: "DIY vs professional gutter cleaning",
        paragraphs: [
          "Ladder work on two-storey eastern suburbs homes is genuinely risky. Professionals bring safe access methods, experience with awkward roof lines, and a tidy finish. You also get a second set of eyes on overflow points you might miss from the ground.",
          "Combine gutter cleaning with window cleaning on the same visit if you want brighter glass and clear roof drainage without juggling multiple trades.",
        ],
      },
    ],
  },
  {
    slug: "benefits-of-regular-window-cleaning",
    title: "The Real Benefits of Regular Window Cleaning",
    excerpt:
      "More light, less dust, and a home that feels fresher — why eastern suburbs homeowners book seasonal window cleans.",
    date: "2026-02-18",
    image: "/images/blog-windows.svg",
    imageAlt: "window cleaning Eastern Suburbs Melbourne bright residential glass",
    sections: [
      {
        heading: "Light changes how a home feels",
        paragraphs: [
          "Clean glass transforms rooms. Eastern Suburbs Melbourne homes often have beautiful garden outlooks — but pollen film, dust and road grime mute that view. Professional window cleaning restores clarity so living areas feel larger and more uplifting.",
          "Interior glass collects cooking residue and fingerprints; exteriors collect weather. Doing both on a seasonal rhythm keeps the whole house looking cared for, which matters for daily living and for inspections if you sell.",
        ],
      },
      {
        heading: "Health, frames and flyscreens",
        paragraphs: [
          "Dirt on windows isn’t only cosmetic. Dust and allergens settle on panes and sills. A thorough clean that includes frames, ledges and flyscreens reduces that build-up and helps ventilation screens work properly.",
          "Dynamic Cleaning VIC includes those details because a streak-free pane with dusty frames still looks unfinished. Ask for mirrors and splashbacks if you want kitchens and bathrooms to match.",
        ],
      },
      {
        heading: "How often should you book?",
        paragraphs: [
          "Every three to six months suits most households in Mount Waverley, Burwood, Box Hill and nearby suburbs. Book sooner after nearby construction, renovation dust, or a particularly dusty summer.",
          "For a free window cleaning Eastern Suburbs Melbourne quote, call 0433 230 310 or use our contact form with your suburb and home type.",
        ],
      },
    ],
  },
  {
    slug: "pressure-cleaning-before-selling",
    title: "Pressure Cleaning Before You Sell: Is It Worth It?",
    excerpt:
      "Driveways and exteriors sell first impressions. See how a pressure clean can lift kerb appeal without a big renovation budget.",
    date: "2026-01-22",
    image: "/images/blog-pressure.svg",
    imageAlt: "pressure cleaning Eastern Suburbs Melbourne driveway before sale",
    sections: [
      {
        heading: "Buyers judge the driveway first",
        paragraphs: [
          "Before anyone steps inside, they see the approach: path, porch, façade and driveway. Oil stains, black mildew and grey biofilm signal neglect even when the interior is immaculate. Pressure cleaning Eastern Suburbs Melbourne is a fast way to reset that first impression.",
          "Compared with painting or landscaping overhauls, a professional pressure clean is relatively affordable — and the before-and-after photos for marketing can be striking.",
        ],
      },
      {
        heading: "What to clean before photography",
        paragraphs: [
          "Prioritise the driveway, front path, porch, and any visible brick or render. Decks and entertaining areas matter if your listing highlights outdoor living — common in Glen Waverley, Doncaster and Templestowe family homes.",
          "Schedule pressure cleaning a few days before photography so surfaces dry and look their best. Pair with window cleaning so glass sparkles in listing shots.",
        ],
      },
      {
        heading: "Book a pre-sale exterior refresh",
        paragraphs: [
          "Dynamic Cleaning VIC can coordinate pressure cleaning with windows and gutters so your eastern suburbs property presents cleanly from roof line to curb. Call 0433 230 310 for a free quote timed to your campaign.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
