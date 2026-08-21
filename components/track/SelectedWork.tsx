import Image from "next/image";
import { portfolioProjects } from "@/lib/portfolio";
import { basePath } from "@/lib/basePath";
import SectionTitle from "../SectionTitle";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

export default function SelectedWork() {
  if (portfolioProjects.length === 0) return null;

  return (
    <section id="work" className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>Selected Work</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
              Live sites we&apos;ve designed and built, across a genuine mix
              of industries. Click through — these are real, currently-live
              projects, not mockups.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <StaggerItem key={project.url}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/[0.06]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-primary/5">
                  <Image
                    src={`${basePath}${project.image}`}
                    alt={`${project.name} website preview`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-local/10 px-3 py-1 text-xs font-semibold text-local-dark">
                    {project.industry}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-primary transition-colors group-hover:text-local-dark">
                    {project.name}
                  </h3>
                  <p className="text-xs text-secondary">{project.location}</p>
                  <p className="mt-2 flex-1 text-sm text-secondary">{project.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-local-dark">
                    Visit site
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
