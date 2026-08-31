export interface PortfolioProject {
  name: string;
  url: string;
  image?: string;
  industry?: string;
  location?: string;
  description?: string;
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
    name: "Healman Healthcare",
    url: "https://healmanmed.github.io",
    image: "/portfolio/healman.jpg",
    industry: "Medical Device Distribution",
    location: "Regional — EU-sourced medical supply",
    description:
      "A site for an official regional representative of two European medical manufacturers, distributing trauma-fixation systems and surgical instruments to hospitals — built to carry certification claims, EU MDR compliance, and a mandate-request flow credible to hospital procurement teams.",
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
  {
    name: "Persepolis",
    url: "https://persepolis.onrender.com",
    image: "/portfolio/persepolis.png",
    industry: "History, Culture & Museums",
    location: "Iran - Shiraz",
    description:
      "A site for a the Persepolis World Heritage Site, built to showcase the history and cultural significance of the site, with a focus on educational content and visitor information.",
  },
  {
    name: "Uru Band",
    url: "https://uruband-site.onrender.com",
    image: "/portfolio/uru-band.png",
    industry: "Art & Music, Music Bands",
    location: "Armenia - Yerevan",
    description: "A site for a local Armenian band, built to showcase their music, videos, and upcoming events, with a focus on fan engagement and social media integration.",
  },
  {
    name: "Macan Group",
    url: "https://macanco.com",
    image: "/portfolio/macanco.png",
    industry: "Investment, Trade, & Construction",
    location: "Oman - Muscat",
    description:
      "A site for a regional investment and construction company, built to showcase their portfolio of projects, services, and expertise, with a focus on credibility and professionalism.",
  },
  {
    name: "Techno GFS",
    url: "https://technogfs.github.io",
    image: "/portfolio/technogfs.png",
    industry: "Food Industry, Food Color",
    location: "Oman - Muscat",
    description:
      "TechnoGFS develops food color solutions for beverages, ice cream, confectionery and fat-based products — with customization and technical support to help bring your product to life.",
  }
];
