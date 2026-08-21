"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/content";
import { trackList } from "@/lib/tracks";
import PostCard from "../PostCard";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? posts : posts.filter((p) => p.track === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterChip>
        {trackList.map((track) => (
          <FilterChip
            key={track.id}
            active={filter === track.id}
            onClick={() => setFilter(track.id)}
            accent={track.accent}
          >
            {track.shortName}
          </FilterChip>
        ))}
      </div>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <StaggerItem key={post.slug}>
            <PostCard post={post} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-secondary">
          No articles in this track yet.
        </p>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
  accent,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
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
