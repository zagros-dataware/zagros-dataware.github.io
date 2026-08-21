export type TrackId = "enterprise" | "startup" | "local";

export interface Track {
  id: TrackId;
  href: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accent: string;
  accentDark: string;
  capabilities: { title: string; description: string }[];
}

export const tracks: Record<TrackId, Track> = {
  enterprise: {
    id: "enterprise",
    href: "/enterprise",
    name: "Enterprise Process & ERP",
    shortName: "Enterprise",
    tagline: "Institutional-grade process discipline, engineered for scale.",
    description:
      "For government bodies and established enterprises, we bring structured business analysis and process engineering to complex, high-stakes environments — turning tangled workflows and legacy systems into governed, measurable operations.",
    accent: "var(--color-accent)",
    accentDark: "var(--color-accent-dark)",
    capabilities: [
      {
        title: "BPM & BPMS",
        description:
          "End-to-end process mapping, redesign, and governance, implemented on Business Process Management Systems so workflows are automated, auditable, and continuously improvable — not stuck in a slide deck.",
      },
      {
        title: "Agile-BPM",
        description:
          "Process improvement delivered in short, testable iterations rather than a single big-bang rollout, so stakeholders see working improvements early and requirements can adapt as the organization learns.",
      },
      {
        title: "BABOK Business Analysis",
        description:
          "Requirements elicitation, stakeholder analysis, and solution evaluation aligned to the BABOK (Business Analysis Body of Knowledge) guide, giving technology investments a defensible line back to business need.",
      },
      {
        title: "ERP Consulting & Implementation",
        description:
          "Vendor-neutral ERP selection, configuration, and rollout support that keeps the system in service of the redesigned process — not the other way around.",
      },
    ],
  },
  startup: {
    id: "startup",
    href: "/startups",
    name: "Startup Enablement",
    shortName: "Startups",
    tagline: "Validate faster, build the right thing, de-risk the bet.",
    description:
      "For founders and product teams, we bring the same rigor we apply to enterprise process work to the much harder problem of deciding what to build in the first place — using proven lean and design methods to shrink the distance between idea and evidence.",
    accent: "var(--color-startup)",
    accentDark: "var(--color-startup-dark)",
    capabilities: [
      {
        title: "Lean Startup",
        description:
          "Build-Measure-Learn loops that turn assumptions into experiments, so spend follows validated learning instead of a fixed roadmap written before any customer feedback existed.",
      },
      {
        title: "Google Design Sprints",
        description:
          "Five-day sprints — map, sketch, decide, prototype, test — that take a team from an open problem to a customer-tested prototype in a single week.",
      },
      {
        title: "Design Thinking",
        description:
          "Empathize, define, ideate, prototype, test: a structured creative process for reframing ambiguous problems before committing engineering time to a solution.",
      },
      {
        title: "Value Proposition Design",
        description:
          "Strategyzer's Value Proposition and Business Model Canvas methods, used to map customer jobs, pains, and gains against what's actually being offered — before it's built.",
      },
    ],
  },
  local: {
    id: "local",
    href: "/web-design",
    name: "Web Design & Local Commerce",
    shortName: "Web Design",
    tagline: "Get your business found, trusted, and bought from — online.",
    description:
      "For local and small businesses, we design and build websites that do a job: bring in inquiries, bookings, or sales — with the same process thinking behind the buying journey that we apply to enterprise workflows.",
    accent: "var(--color-local)",
    accentDark: "var(--color-local-dark)",
    capabilities: [
      {
        title: "Business Websites",
        description:
          "Fast, modern, mobile-first sites built around what a visitor needs to do next — call, book, or buy — instead of a template full of stock photography.",
      },
      {
        title: "Online Sales Enablement",
        description:
          "Product catalogs, booking flows, and checkout paths that let a local business take orders and payments online without a full custom e-commerce build.",
      },
      {
        title: "Local Discoverability",
        description:
          "Technical fundamentals — structured data, map listings, page speed — that determine whether a nearby customer searching for your service finds you or a competitor.",
      },
      {
        title: "Ongoing Care & Iteration",
        description:
          "Small, regular improvements informed by what visitors actually do on the site, rather than a one-off launch that's never revisited.",
      },
    ],
  },
};

export const trackList = Object.values(tracks);
