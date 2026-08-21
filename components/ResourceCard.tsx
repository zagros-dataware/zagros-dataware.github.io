import Link from "next/link";
import type { ResourceMeta } from "@/lib/content";
import { TrackBadge, TypeBadge } from "./Badge";

export default function ResourceCard({ resource }: { resource: ResourceMeta }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex h-full flex-col rounded-xl bg-white p-7 shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/[0.06]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <TypeBadge type={resource.type} />
        <TrackBadge track={resource.track} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary transition-colors group-hover:text-accent-dark">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-secondary">{resource.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
        Read more
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
