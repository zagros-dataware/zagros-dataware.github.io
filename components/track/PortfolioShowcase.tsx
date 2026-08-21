import Link from "next/link";
import { getAllResources } from "@/lib/content";
import SectionTitle from "../SectionTitle";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";
import BrowserMockup from "../illustrations/BrowserMockup";

const projectMeta: Record<string, { variant: "retail" | "restaurant" | "services"; category: string }> = {
  "local-retailer-online-sales-use-case": { variant: "retail", category: "Retail" },
  "local-restaurant-online-ordering-use-case": { variant: "restaurant", category: "Restaurant" },
  "local-services-booking-use-case": { variant: "services", category: "Services & Booking" },
};

export default function PortfolioShowcase() {
  const projects = getAllResources()
    .filter((r) => r.track === "local" && r.type === "use-case" && projectMeta[r.slug])
    .sort((a, b) => (projectMeta[a.slug].category > projectMeta[b.slug].category ? 1 : -1));

  if (projects.length === 0) return null;

  return (
    <section id="portfolio" className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>Representative Projects</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
              A look at the kinds of local-business sites we build. These are
              illustrative project types, not disclosed client work — ask us
              for references from real engagements.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => {
            const meta = projectMeta[project.slug];
            return (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/resources/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-bg-light shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/[0.06]"
                >
                  <div className="overflow-hidden bg-primary/5 p-4">
                    <BrowserMockup
                      variant={meta.variant}
                      className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="w-fit rounded-full bg-local/10 px-3 py-1 text-xs font-semibold text-local-dark">
                      {meta.category}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-primary transition-colors group-hover:text-local-dark">
                      {project.title.replace(/^Illustrative Use Case:\s*/, "")}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-secondary">{project.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-local-dark">
                      View the scenario
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
