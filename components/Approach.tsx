import { approach } from "@/lib/site";
import SectionTitle from "./SectionTitle";
import Reveal from "./motion/Reveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

export default function Approach() {
  return (
    <section id="approach" className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>How We Work</SectionTitle>
          </Reveal>
        </div>
        <StaggerGroup className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-accent via-startup to-local lg:block" />
          {approach.map((step) => (
            <StaggerItem key={step.step} className="relative text-center">
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-white">
                {step.step}
              </div>
              <h3 className="mt-4 mb-2 text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="text-secondary">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
