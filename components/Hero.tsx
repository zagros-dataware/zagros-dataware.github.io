import Link from "next/link";
import HeroBackground from "./motion/HeroBackground";
import { trackList } from "@/lib/tracks";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light px-[5%] pt-44 pb-28 text-center text-white">
      <HeroBackground />

      <div className="relative mx-auto max-w-3xl animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 ring-1 ring-white/20">
          IT Products · Consultancy · Process &amp; Product Design
        </span>

        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Process Discipline for Enterprises.
          <br />
          <span className="bg-gradient-to-r from-accent to-startup bg-clip-text text-transparent">
            Speed for Startups.
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/85">
          We bring BPM, Agile-BPM, BABOK, and ERP discipline to institutions,
          Lean Startup and Design Sprint speed to founders, and
          process-minded web design to local businesses.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="rounded-md bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Connect With Us
          </Link>
          <Link
            href="#pillars"
            className="rounded-md px-8 py-3 font-semibold text-white/90 ring-1 ring-white/25 transition-colors hover:bg-white/10"
          >
            Explore Our Practices
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          {trackList.map((track) => (
            <span key={track.id} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: track.accent }}
              />
              {track.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
