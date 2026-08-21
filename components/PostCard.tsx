import Link from "next/link";
import type { PostMeta } from "@/lib/content";
import { TrackBadge } from "./Badge";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-xl bg-white p-7 shadow-sm shadow-black/[0.03] transition-shadow hover:shadow-lg hover:shadow-black/[0.06]"
    >
      <div className="flex items-center justify-between gap-2">
        <TrackBadge track={post.track} />
        <time className="text-xs text-secondary" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary transition-colors group-hover:text-accent-dark">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-secondary">{post.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
        Read more
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
