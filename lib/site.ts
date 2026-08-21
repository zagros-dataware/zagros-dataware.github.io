export const site = {
  name: "Zagros Dataware",
  legalName: "Zagros Dataware LLC",
  tagline: "Empowering Organizational Excellence",
  description:
    "Zagros Dataware is a premier IT products, consultancy, and business process optimization firm, registered in Armenia. We bridge complex technical requirements and high-level institutional goals through BPM, Agile delivery, and strategic IT consulting.",
  email: "honarmand.ali.ha@gmail.com",
  location: "Yerevan, Armenia",
  url: "https://zagros-dataware.github.io/zagros-dataware/",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Expertise" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#sectors", label: "Sectors" },
  { href: "#contact", label: "Contact" },
];

export const pillars = [
  {
    title: "Organizational Excellence",
    description:
      "We leverage industry-standard BPM (Business Process Management) frameworks and BABOK methodologies to comprehensively analyze, streamline, and scale corporate and institutional workflows.",
  },
  {
    title: "Agile Frameworks",
    description:
      "We build and ship cutting-edge IT products utilizing highly collaborative, iterative Agile principles, ensuring rapid value delivery and total adaptability to evolving requirements.",
  },
  {
    title: "Strategic IT Consultancy",
    description:
      "Our professional consulting services translate technology investments directly into tangible operational metrics, ensuring alignment with your long-term roadmap.",
  },
] as const;

export const services = [
  {
    title: "BPM & Process Re-engineering",
    description:
      "End-to-end mapping, analysis, and redesign of core business processes to eliminate bottlenecks and raise operational efficiency.",
  },
  {
    title: "Agile Product Delivery",
    description:
      "Cross-functional, iterative delivery of IT products — from discovery and backlog shaping through to release and continuous improvement.",
  },
  {
    title: "IT Strategy & Advisory",
    description:
      "Technology roadmaps that tie infrastructure and platform investment directly to institutional goals and measurable outcomes.",
  },
  {
    title: "Systems Integration",
    description:
      "Connecting disparate platforms, data sources, and legacy systems into coherent, maintainable architectures.",
  },
  {
    title: "Digital Transformation",
    description:
      "Structured transformation programs that modernize workflows and digital touchpoints for public and private institutions.",
  },
  {
    title: "Training & Enablement",
    description:
      "BABOK- and Agile-aligned enablement for internal teams, building lasting in-house capability rather than dependency.",
  },
] as const;

export const approach = [
  {
    step: "01",
    title: "Discover",
    description:
      "We study your current processes, systems, and institutional goals to build a shared, evidence-based understanding.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design target-state workflows and technical architecture aligned to BPM and BABOK best practices.",
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "We ship in short, Agile iterations — validating value early and adapting as requirements evolve.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We measure outcomes against operational metrics and continuously refine for long-term performance.",
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
