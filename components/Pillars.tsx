import { pillars } from "@/lib/site";
import SectionTitle from "./SectionTitle";

export default function Pillars() {
  return (
    <section id="pillars" className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>Core Pillars of Expertise</SectionTitle>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border-t-4 border-primary bg-white p-8 shadow-sm shadow-black/[0.02] transition-transform hover:-translate-y-1"
            >
              <h3 className="mb-3 text-xl font-semibold text-primary">
                {pillar.title}
              </h3>
              <p className="text-secondary">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
