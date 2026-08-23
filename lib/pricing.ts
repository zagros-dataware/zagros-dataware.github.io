export interface BuildTier {
  name: string;
  price: string;
  priceNote?: string;
  tagline: string;
  featured?: boolean;
  features: string[];
}

export const buildTiers: BuildTier[] = [
  {
    name: "Launch",
    price: "$1,200",
    tagline: "A local business getting online with one clear job for the site to do.",
    features: [
      "Up to 5 pages, custom-designed (no generic template)",
      "Mobile-first, fast-loading build",
      "One primary conversion path wired end-to-end — call, book, or buy",
      "Local SEO basics: structured data, Google Business Profile linkage",
      "2 rounds of revisions",
      "2–3 week turnaround",
    ],
  },
  {
    name: "Grow",
    price: "$2,800",
    tagline: "Catalog, menu, booking, or multilingual content — more moving parts, still one coherent site.",
    featured: true,
    features: [
      "Up to 12 pages, or a dynamic catalog/menu",
      "Booking, ordering, or quote-request flow built around your real process",
      "Multilingual support, up to 2 additional languages",
      "Full local SEO + analytics setup",
      "3 rounds of revisions",
      "4–6 week turnaround",
    ],
  },
  {
    name: "Custom & Application",
    price: "Starting at $6,000",
    priceNote: "scoped per project",
    tagline: "Booking systems, customer portals, inventory-aware catalogs — bespoke application logic.",
    features: [
      "Process-mapping phase before any design work starts",
      "Custom application logic — accounts, real-time availability, integrations",
      "Architecture scoped to your actual operations, not a template's assumptions",
      "Timeline and pricing set after a scoping conversation",
    ],
  },
];

export interface CarePlan {
  name: string;
  price: string;
  description: string;
}

export const carePlans: CarePlan[] = [
  {
    name: "Essential Care",
    price: "$75/mo",
    description: "Uptime & security monitoring, minor content edits (text/images), monthly check-in.",
  },
  {
    name: "Active Management",
    price: "$200/mo",
    description: "Everything in Essential, plus regular content updates (catalog/menu/blog) and small design iterations.",
  },
  {
    name: "Full Partnership",
    price: "$450/mo",
    description: "Everything in Active, plus optimization based on real visitor behavior and a quarterly strategy review.",
  },
];
