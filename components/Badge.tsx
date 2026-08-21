import { tracks, type TrackId } from "@/lib/tracks";

export function TrackBadge({ track }: { track: TrackId }) {
  const t = tracks[track];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
      style={{ backgroundColor: `color-mix(in srgb, ${t.accent} 12%, white)`, color: t.accentDark }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: t.accent }} />
      {t.shortName}
    </span>
  );
}

export function TypeBadge({ type }: { type: "use-case" | "technical-doc" }) {
  const label = type === "use-case" ? "Use Case" : "Technical Doc";
  return (
    <span className="inline-flex items-center rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
      {label}
    </span>
  );
}
