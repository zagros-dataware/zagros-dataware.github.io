import Reveal from "./motion/Reveal";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-white px-[5%] py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionTitle>Who We Are</SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-secondary">
            Registered in Armenia, Zagros Dataware is an IT products,
            consultancy, and business process optimization firm with a
            portfolio spanning enterprise institutions, early-stage startups,
            and local businesses. We specialize in bridging the gap between
            complex technical requirements and high-level goals — applying
            BPM and BABOK discipline where structure matters most, and Lean
            Startup speed where validation matters most.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
