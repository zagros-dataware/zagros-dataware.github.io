import Link from "next/link";
import { tracks } from "@/lib/tracks";
import SectionTitle from "../SectionTitle";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

const engagementTrackIds = ["enterprise", "startup"] as const;

export default function EngagementTracks() {
  return (
    <section className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>Enterprise &amp; Startup Engagements</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
              These aren&apos;t productized packages — scope varies too much
              by organization and problem for a fixed price list to mean
              anything. Here&apos;s what&apos;s covered and how pricing gets
              set.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-8 md:grid-cols-2">
          {engagementTrackIds.map((id) => {
            const track = tracks[id];
            return (
              <StaggerItem key={id}>
                <div className="flex h-full flex-col rounded-xl border border-black/5 bg-white p-8 shadow-sm shadow-black/[0.03]">
                  <span
                    className="w-fit rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${track.accent} 14%, transparent)`,
                      color: track.accentDark,
                    }}
                  >
                    {track.shortName}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-primary">
                    {track.name}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">{track.tagline}</p>

                  <ul className="mt-6 flex-1 space-y-2">
                    {track.capabilities.map((c) => (
                      <li key={c.title} className="text-sm text-secondary">
                        <span className="font-medium text-primary">
                          {c.title}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-black/5 pt-6">
                    <p className="text-sm font-semibold text-primary">
                      How pricing works
                    </p>
                    <p className="mt-1 text-sm text-secondary">
                      Scoped after a discovery call, based on process
                      complexity and engagement length — not a fixed menu.
                    </p>
                  </div>

                  <Link
                    href={track.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: track.accentDark }}
                  >
                    Explore {track.shortName}
                    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 12L12 4M12 4H5M12 4V11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
