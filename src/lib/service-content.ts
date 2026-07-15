import type { ServiceSlug } from "./constants";

export type ServiceArticle = {
  slug: ServiceSlug;
  h2Intro: string;
  paragraphs: string[];
  h2Keywords: string;
  keywordParagraphs: string[];
  h2Why: string;
  whyParagraphs: string[];
};

/**
 * Long-form copy for each service page (combined body aims for 800+ words
 * together with benefits, process and FAQ sections on the page).
 */
export const SERVICE_ARTICLES: Record<ServiceSlug, ServiceArticle> = {
  "window-cleaning": {
    slug: "window-cleaning",
    h2Intro: "Professional window cleaning for Eastern Suburbs Melbourne homes",
    paragraphs: [
      "At Dynamic Cleaning VIC, we know how to help you look after your most valuable investment — your home. Professional window cleaning Eastern Suburbs Melbourne is one of the simplest ways to make a house feel brighter, healthier and better cared for. When natural light streams through clear glass, every room looks fresher and more inviting.",
      "Many homeowners don’t realise how much dirt, dust, pollen and pollution collect on windows and frames — especially in leafy eastern suburbs where trees shed debris and busy roads leave a fine film on exterior glass. Regular residential window cleaning removes that build-up, improves kerb appeal, and can support better indoor comfort by letting in more daylight.",
      "When you hire Dynamic Cleaning VIC, window cleaning is never “glass only”. We clean flyscreens, mirrors and splashbacks, and we wipe frames and ledges so the whole opening looks finished. Our goal is simple: leave you 100% satisfied with streak-free results and a respectful experience inside your home.",
      "Window washing can feel personal because a cleaner often needs access through rooms. Finding someone trustworthy matters. Dynamic Cleaning VIC is a local family business — reliable, professional and friendly. We ask exactly what you want done, confirm the scope, and then go above and beyond to deliver it across Vermont South, Mount Waverley, Glen Waverley, Wheelers Hill, Burwood, Box Hill and surrounding eastern suburbs.",
    ],
    h2Keywords:
      "Why eastern suburbs homeowners book seasonal window cleaning",
    keywordParagraphs: [
      "Search for window cleaning Eastern Suburbs Melbourne and you’ll find plenty of cheap options. Price alone is a poor way to choose. What matters is consistency, care around furnishings, insurance, and a cleaner who understands local conditions — from Mount Waverley’s tree cover to Glen Waverley’s two-storey family homes.",
      "Seasonal pollen, spring storms and nearby construction can leave glass looking dull within weeks. Homeowners in Hawthorn, Camberwell, Kew, Templestowe and Ivanhoe often book every three to six months so interiors stay bright and exterior glass keeps that freshly cleaned look from the street. If you are preparing a property for sale or lease, a full interior and exterior window clean is one of the highest-impact presentation jobs you can book before open for inspections.",
      "Our window cleaning service Eastern Suburbs Melbourne is designed around clear communication. You tell us whether you need ground-floor only, full house, flyscreens, hard-water spotting treatment discussion, or combined gutter cleaning on the same visit. We arrive punctually, work methodically, and finish with a satisfaction check. If something isn’t right, we come back and fix it — that guarantee is part of how we do business.",
      "Whether you live in a unit in Box Hill, a family home in Wantirna, or a period property in Malvern East, we tailor the clean to your glass, access and lifestyle. Call 0433 230 310 for a free quote on professional window cleaning near you.",
    ],
    h2Why: "What’s included in our residential window cleaning service",
    whyParagraphs: [
      "A typical Dynamic Cleaning VIC window clean focuses on clarity and detail. Exterior panes are washed free of grime and water marks. Interiors are cleaned carefully so furniture and flooring are respected. Frames and sills are wiped, flyscreens are attended to when included, and mirrors or splashbacks can be added so kitchens and bathrooms match the refreshed look of your windows.",
      "We also take time to understand tricky spots — high panes, highlight windows, glass balustrades, or areas that collect more dirt because of orientation to weather. Eastern Suburbs Melbourne weather can be changeable; we plan jobs with practical access and a finish you can see immediately when you walk from room to room.",
      "Combine window cleaning with gutter cleaning or pressure cleaning when you want a complete property refresh. Many clients in Vermont South and Mount Waverley book windows and gutters together after autumn, then schedule pressure cleaning for driveways ahead of spring or a sale. One local team, clear quotes, and a satisfaction guarantee across services.",
      "Ready to book? Contact Dynamic Cleaning VIC by phone or online form. Tell us your suburb, home type and whether you need interior, exterior or both. We’ll provide a free window cleaning quote for Eastern Suburbs Melbourne and help you choose a time that suits.",
    ],
  },
  "gutter-cleaning": {
    slug: "gutter-cleaning",
    h2Intro: "Gutter cleaning Eastern Suburbs Melbourne — protect your home from leaf build-up",
    paragraphs: [
      "Gutter cleaning is one of the realities of living in Melbourne’s beautiful leafy suburbs. If gutters are not cleaned regularly, leaves build up, hold moisture, and start to break down into compost. That sludge blocks outlets, overflows onto fascias, and can send water where it doesn’t belong — into eaves, down walls, and toward foundations.",
      "Dynamic Cleaning VIC provides professional gutter cleaning Eastern Suburbs Melbourne with a local focus on suburbs where trees are part of the streetscape: Vermont South, Mount Waverley, Wheelers Hill, Glen Waverley, Forest Hill, Blackburn and beyond. We clear debris carefully, check flow through downpipes, and leave your property tidy so rainwater systems work the way they were designed to.",
      "Skipping gutter maintenance is a false economy. Overflow can stain exterior walls, damage landscaping, encourage pests, and contribute to timber rot around roof edges. After heavy autumn falls or summer storms, a scheduled gutter clean is one of the most practical ways to protect the integrity of your biggest asset — your home.",
      "DIY gutter cleaning means ladders, awkward angles and risk. Our team handles residential access, including many two-storey homes across the eastern suburbs, using safe professional methods. You get peace of mind, a clearer roof line, and confidence that downpipes aren’t quietly clogged behind a tidy-looking fascia.",
    ],
    h2Keywords: "Local gutter cleaning for Vermont South, Mount Waverley and surrounds",
    keywordParagraphs: [
      "Homeowners searching for gutter cleaning Vermont South or gutter cleaning Mount Waverley usually want a reliable local operator — not a one-off flyer crew. Dynamic Cleaning VIC is based around Eastern Suburbs Melbourne service, with clear communication, punctual arrivals and a satisfaction guarantee if anything needs a follow-up.",
      "Leaf litter patterns differ by street. Some Glen Waverley and Wantirna properties shed heavily into box gutters; Burwood and Ashwood homes may collect a mix of leaves and urban dust; Templestowe and Doncaster blocks often combine trees with longer runs of guttering. We inspect before we clear so the job matches your roof layout, not a generic checklist.",
      "We recommend gutter cleaning at least once or twice a year in leafy eastern suburbs, timed after major leaf fall where possible. If you’ve had overflow during rain, musty smells near eaves, or visible plants growing in gutters, book sooner. Combining gutter cleaning with window cleaning on the same visit is popular for busy households who want one appointment and a complete exterior refresh.",
      "Fully insured and locally trusted, we treat every home respectfully. Call 0433 230 310 for a free gutter cleaning quote — tell us your suburb, storeys and any known problem spots such as valley gutters or slow downpipes.",
    ],
    h2Why: "What to expect from our gutter cleaning process",
    whyParagraphs: [
      "Our process starts with inspection: access points, debris load, and how water should exit the system. We then remove leaves, moss and sludge from the guttering, clear outlets, and flush where appropriate so you can see water move freely again. Debris is managed tidily; ask us at booking if you need bagging or removal arranged as part of the service.",
      "Good gutter cleaning Eastern Suburbs Melbourne is also about prevention conversations. We’ll note heavy tree overhang or obvious low spots when we see them, so you can plan future maintenance. We don’t upsell for the sake of it — we explain what we find and what will keep your home protected through Melbourne’s wetter months.",
      "Whether you need a one-off catch-up clean after years of build-up or a recurring seasonal schedule, Dynamic Cleaning VIC keeps the experience simple: free quote, booked time, thorough clear, tidy finish, satisfaction check. That same standard applies from Ringwood to Hawthorn and from Chadstone to Kew.",
      "Book gutter cleaning today and reduce the risk of the next downpour becoming a repair bill. Phone 0433 230 310 or send your suburb and property details through our contact form for a prompt free quote.",
    ],
  },
  "pressure-cleaning": {
    slug: "pressure-cleaning",
    h2Intro: "Pressure cleaning Eastern Suburbs Melbourne for driveways, decks and exteriors",
    paragraphs: [
      "Over time, dirt builds up and makes tiles, bricks, concrete and timber look old and worn. Driveways collect oil and grime; paths grow slippery biofilm; decks grey under Melbourne weather. Professional pressure cleaning Eastern Suburbs Melbourne is one of the most dramatic ways to restore outdoor surfaces without a renovation budget.",
      "At Dynamic Cleaning VIC we use specialised equipment matched to each surface. Concrete, paving, brickwork, timber decks, eaves and many exterior finishes respond differently to pressure and technique. Getting that balance right is what separates a careful local clean from damage caused by the wrong approach. We prep the area, protect sensitive spots, and aim for a like-new finish you notice from the street.",
      "Pressure cleaning isn’t only cosmetic. Contaminated paths and pool surrounds can become hazardous when wet. Removing mould, mildew and compacted dirt improves safety underfoot as well as appearance. If you are selling, a clean driveway and façade can add thousands in perceived value through stronger first impressions at inspections.",
      "We commonly pressure clean concrete paths and driveways, wooden decks and patios, eaves and gutters surrounds, housing exteriors, outdoor furniture, Perspex and laserlight roofing areas where appropriate, brickwork, and pool surrounds — essentially surfaces that benefit from a controlled high-pressure wash. Tell us what you need restored and we’ll advise the right method.",
    ],
    h2Keywords: "Before-and-after impact for eastern suburbs kerb appeal",
    keywordParagraphs: [
      "Clients often book pressure cleaning Eastern Suburbs Melbourne ahead of spring, after a dusty summer, or when listing a home in Mount Waverley, Glen Waverley, Box Hill or Camberwell. The before-and-after difference on a stained driveway is immediate — neighbours notice, buyers notice, and you notice every time you come home.",
      "Local conditions matter. Leaf tannins, irrigation overspray, barbecue grease near entertaining areas, and traffic film near busier roads all leave different marks. We assess first so soft stone, older timber or delicate coatings are treated appropriately. If a surface isn’t suitable for aggressive pressure, we’ll say so and suggest a safer approach.",
      "Many households combine pressure cleaning with window cleaning and gutter cleaning for a full exterior reset. That’s especially effective in leafy Vermont South and Wheelers Hill properties where gutters, glass and hard surfaces all show seasonal wear together. One local team, coordinated timing, and a single satisfaction standard across the job.",
      "Dynamic Cleaning VIC is fully insured, communication-first and backed by a genuine make-it-right guarantee. Call 0433 230 310 for a free pressure cleaning quote. Share your suburb, surface types and photos if you have them — we’ll respond with clear pricing and practical advice.",
    ],
    h2Why: "Surfaces we restore and how bookings work",
    whyParagraphs: [
      "From oil-spotted driveways in Doncaster to mossy southern paths in Kew and weathered decks in Hawthorn, eastern suburbs homes benefit from periodic pressure cleaning. We work methodically: assess, prepare, clean, and reveal. You’ll see the result as soon as the surface dries — brighter concrete, cleaner brick joints, and outdoor zones that feel usable again.",
      "Bookings are straightforward. Request a free quote by phone or contact form, confirm the scope (driveway only, full exterior hard surfaces, deck plus paths, etc.), and choose a suitable time. We arrive prepared, minimise disruption, and leave outdoor areas looking refreshed. If you’re coordinating with real estate photography or an open for inspection, tell us your deadline and we’ll try to schedule accordingly.",
      "Fast-loading, mobile-friendly booking starts on this website — but the fastest path to a quote is still a call to 0433 230 310. We’re local, reliable and focused on Eastern Suburbs Melbourne pressure cleaning done properly.",
      "Explore our window and gutter services too if you want a complete property clean. Dynamic Cleaning VIC helps homeowners maintain the integrity and presentation of their homes with clear quotes, careful workmanship and lasting local relationships.",
    ],
  },
};
