import { approach } from "@/lib/site";
import SectionTitle from "./SectionTitle";

export default function Approach() {
  return (
    <section id="approach" className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>How We Work</SectionTitle>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step) => (
            <div key={step.step}>
              <span className="text-4xl font-bold text-accent/70">
                {step.step}
              </span>
              <h3 className="mt-3 mb-2 text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
