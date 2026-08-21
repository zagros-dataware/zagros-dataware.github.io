import type { Track } from "@/lib/tracks";
import SectionTitle from "../SectionTitle";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

export default function TrackCapabilities({ track }: { track: Track }) {
  return (
    <section id="capabilities" className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>What We Bring</SectionTitle>
          </Reveal>
        </div>
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {track.capabilities.map((capability, i) => (
            <StaggerItem key={capability.title}>
              <div className="flex h-full gap-4 rounded-xl bg-bg-light p-7">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: track.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{capability.title}</h3>
                  <p className="mt-2 text-secondary">{capability.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
