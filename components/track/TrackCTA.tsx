import Link from "next/link";
import type { Track } from "@/lib/tracks";
import { site } from "@/lib/site";

export default function TrackCTA({ track }: { track: Track }) {
  return (
    <section
      className="px-[5%] py-20 text-center text-white"
      style={{ backgroundColor: track.accentDark }}
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to start with {track.shortName}?
        </h2>
        <p className="mt-4 text-white/90">
          Tell us where things stand today, and we&apos;ll suggest the right
          first step.
        </p>
        <Link
          href={`mailto:${site.email}?subject=${encodeURIComponent(`${track.name} inquiry`)}`}
          className="mt-8 inline-block rounded-md bg-white px-8 py-3 font-semibold transition-opacity hover:opacity-90"
          style={{ color: track.accentDark }}
        >
          Email Us
        </Link>
      </div>
    </section>
  );
}
