export const site = {
  name: "Zagros Dataware",
  legalName: "Zagros Dataware LLC",
  tagline: "Process Discipline for Enterprises. Speed for Startups.",
  description:
    "Zagros Dataware is an IT products, consultancy, and business process optimization firm registered in Armenia. We bring BPM, Agile-BPM, BABOK, and ERP discipline to enterprises and public institutions, Lean Startup, Design Sprints, Design Thinking, and Value Proposition Design to startups, and process-minded web design to local businesses.",
  email: "honarmand.ali.ha@gmail.com",
  location: "Yerevan, Armenia",
  url: "https://zagros-dataware.github.io/",
};

export const approach = [
  {
    step: "01",
    title: "Discover",
    description:
      "We study your current processes, systems, or customer assumptions to build a shared, evidence-based understanding — whether that's a workflow audit or a round of customer interviews.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design target-state workflows, prototypes, or value propositions using the discipline that fits — BPM and BABOK for institutional process, Design Thinking and Strategyzer canvases for new offers.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "We ship in short, testable iterations — an Agile-BPM release, a five-day Design Sprint, a launched storefront — validating value early and adapting as requirements evolve.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We measure outcomes against the metrics that matter — cycle time, conversion, adoption — and continuously refine for long-term performance.",
  },
] as const;

export const sectors = [
  {
    title: "Institutional Frameworks",
    description:
      "For government and public institutions, we deliver secure, reliable, and highly structured digital transformation strategies that drastically improve administrative efficiency and public sector trust.",
  },
  {
    title: "Enterprise Agility",
    description:
      "For private sector enterprises, we engineer scalable, highly competitive software products and optimize bottlenecks to drive rapid market growth and operational lean-ness.",
  },
] as const;

export const footerLinks = {
  Services: [
    { href: "/enterprise", label: "Enterprise Process & ERP" },
    { href: "/startups", label: "Startup Enablement" },
    { href: "/web-design", label: "Web Design & Local Commerce" },
  ],
  Company: [
    { href: "/#about", label: "About" },
    { href: "/#approach", label: "Approach" },
    { href: "/#contact", label: "Contact" },
  ],
  Library: [
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources & Use Cases" },
  ],
};
