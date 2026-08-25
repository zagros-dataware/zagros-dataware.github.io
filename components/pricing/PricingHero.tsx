import Reveal from "../motion/Reveal";
import HeroBackground from "../motion/HeroBackground";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light px-[5%] pt-44 pb-24 text-center text-white">
      <HeroBackground />
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium tracking-wide text-accent uppercase ring-1 ring-white/20">
            Evidence Over Guesswork
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            One track is fixed-price.
            <br />
            Two are scoped to the work.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/85">
            Web Design is a productized service — pick a package below.
            Enterprise process work and startup engagements vary too much in
            scope for a price list to mean anything, so those are quoted
            after a discovery call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
