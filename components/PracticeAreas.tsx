import Link from "next/link";
import { trackList } from "@/lib/tracks";
import SectionTitle from "./SectionTitle";
import TrackIllustration from "./TrackIllustration";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

export default function PracticeAreas() {
  return (
    <section id="pillars" className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>Three Practices, One Discipline</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Enterprise process rigor, startup validation speed, and
            process-minded web design for local business — different
            playbooks, the same commitment to evidence over guesswork.
          </p>
        </div>

        <StaggerGroup className="mt-12 grid gap-8 lg:grid-cols-3">
          {trackList.map((track) => (
            <StaggerItem key={track.id}>
              <Link
                href={track.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/[0.06]"
              >
                <div className="overflow-hidden">
                  <TrackIllustration
                    track={track.id}
                    className="h-40 w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-primary">{track.name}</h3>
                  <p className="mt-2 text-sm font-medium" style={{ color: track.accent }}>
                    {track.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-secondary">{track.description}</p>
                  <span
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: track.accent }}
                  >
                    Explore {track.shortName}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
