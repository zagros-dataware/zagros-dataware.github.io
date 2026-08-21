export interface PortfolioProject {
  name: string;
  url: string;
  image: string;
  industry: string;
  location: string;
  description: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Van Arm Line Co.",
    url: "https://vanarmline.com",
    image: "/portfolio/vanarmline.jpg",
    industry: "Freight & Logistics",
    location: "Yerevan, Armenia",
    description:
      "A multilingual site for an international freight forwarding company, built around a freight quote request flow, a live route/capability showcase, and trilingual (EN/RU/HY) content for a business coordinating overland, air, and ocean cargo across regional corridors.",
  },
  {
    name: "Van Pro Co.",
    url: "https://vanproco.com",
    image: "/portfolio/vanproco.jpg",
    industry: "Industrial Manufacturing",
    location: "Yerevan, Armenia",
    description:
      "A sister site to Van Arm Line for a certified precision-machining and industrial fabrication company — built to carry ISO certifications, a capabilities showcase, and a quote-request flow that speaks credibly to industrial buyers.",
  },
  {
    name: "The Grizzly",
    url: "https://thegrizzlysound.github.io",
    image: "/portfolio/grizzly.jpg",
    industry: "Music & Performance",
    location: "Pacific Northwest, USA",
    description:
      "A single-page site for a touring solo guitarist, built around tour dates, performance videos, and fan contact — image-led and fast, with none of the catalog or booking complexity a commerce site would need.",
  },
];
