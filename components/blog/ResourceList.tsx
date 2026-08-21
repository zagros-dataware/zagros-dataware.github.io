"use client";

import { useState } from "react";
import type { ResourceMeta, ResourceType } from "@/lib/content";
import { trackList } from "@/lib/tracks";
import ResourceCard from "../ResourceCard";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

type TypeFilter = "all" | ResourceType;

export default function ResourceList({ resources }: { resources: ResourceMeta[] }) {
  const [track, setTrack] = useState<string>("all");
  const [type, setType] = useState<TypeFilter>("all");

  const filtered = resources.filter(
    (r) => (track === "all" || r.track === track) && (type === "all" || r.type === type),
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <Chip active={type === "all"} onClick={() => setType("all")}>
          All Types
        </Chip>
        <Chip active={type === "use-case"} onClick={() => setType("use-case")}>
          Use Cases
        </Chip>
        <Chip active={type === "technical-doc"} onClick={() => setType("technical-doc")}>
          Technical Docs
        </Chip>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <Chip active={track === "all"} onClick={() => setTrack("all")} subtle>
          All Tracks
        </Chip>
        {trackList.map((t) => (
          <Chip
            key={t.id}
            active={track === t.id}
            onClick={() => setTrack(t.id)}
            accent={t.accent}
            subtle
          >
            {t.shortName}
          </Chip>
        ))}
      </div>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => (
          <StaggerItem key={resource.slug}>
            <ResourceCard resource={resource} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-secondary">
          Nothing matches those filters yet.
        </p>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  accent,
  subtle,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  accent?: string;
  subtle?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full font-semibold transition-colors ${subtle ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
      style={
        active
          ? { backgroundColor: accent ?? "var(--color-primary)", color: "white" }
          : { backgroundColor: "var(--color-bg-light)", color: "var(--color-secondary)" }
      }
    >
      {children}
    </button>
  );
}
