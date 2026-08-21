import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { TrackBadge } from "@/components/Badge";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = getAllPosts().some((p) => p.slug === slug);
  if (!exists) notFound();

  const post = await getPostBySlug(slug);

  return (
    <article className="px-[5%] pt-40 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm font-semibold text-accent-dark hover:underline">
          ← All articles
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <TrackBadge track={post.track} />
          <time className="text-sm text-secondary" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">{post.title}</h1>

        <div className="mt-2 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-bg-light px-3 py-1 text-xs text-secondary">
              #{tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-slate mt-10 max-w-none prose-headings:text-primary prose-a:text-accent-dark prose-strong:text-primary"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
