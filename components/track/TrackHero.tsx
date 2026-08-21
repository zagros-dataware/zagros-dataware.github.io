import Link from "next/link";
import type { Track } from "@/lib/tracks";
import { site } from "@/lib/site";
import TrackIllustration from "../TrackIllustration";
import HeroBackground from "../motion/HeroBackground";

export default function TrackHero({ track }: { track: Track }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light px-[5%] pt-40 pb-20 text-white">
      <HeroBackground />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ring-1 ring-white/20"
            style={{ backgroundColor: `color-mix(in srgb, ${track.accent} 25%, transparent)` }}
          >
            {track.shortName}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {track.name}
          </h1>
          <p className="mt-4 text-xl font-medium" style={{ color: track.accent }}>
            {track.tagline}
          </p>
          <p className="mt-5 max-w-xl text-lg font-light text-white/85">
            {track.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`mailto:${site.email}?subject=${encodeURIComponent(`${track.name} inquiry`)}`}
              className="rounded-md px-8 py-3 font-semibold text-white transition-colors"
              style={{ backgroundColor: track.accent }}
            >
              Start a Conversation
            </Link>
            <Link
              href="#capabilities"
              className="rounded-md px-8 py-3 font-semibold text-white/90 ring-1 ring-white/25 transition-colors hover:bg-white/10"
            >
              See Capabilities
            </Link>
          </div>
        </div>

        <div className="glass-dark animate-fade-up rounded-2xl p-4" style={{ animationDelay: "0.15s" }}>
          <TrackIllustration track={track.id} className="w-full" />
        </div>
      </div>
    </section>
  );
}
