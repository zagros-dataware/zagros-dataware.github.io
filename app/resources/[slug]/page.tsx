import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllResources, getResourceBySlug } from "@/lib/content";
import { TrackBadge, TypeBadge } from "@/components/Badge";

export function generateStaticParams() {
  return getAllResources().map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getAllResources().find((r) => r.slug === slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = getAllResources().some((r) => r.slug === slug);
  if (!exists) notFound();

  const resource = await getResourceBySlug(slug);

  return (
    <article className="px-[5%] pt-40 pb-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/resources" className="text-sm font-semibold text-accent-dark hover:underline">
          ← Resource library
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <TypeBadge type={resource.type} />
          <TrackBadge track={resource.track} />
          <time className="text-sm text-secondary" dateTime={resource.date}>
            {formatDate(resource.date)}
          </time>
        </div>

        <h1 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">{resource.title}</h1>

        {resource.illustrative && (
          <p className="mt-4 rounded-lg border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-secondary">
            This is a representative scenario illustrating a typical
            engagement pattern, not a disclosed client case study.
          </p>
        )}

        <div
          className="prose prose-slate mt-10 max-w-none prose-headings:text-primary prose-a:text-accent-dark prose-strong:text-primary prose-blockquote:border-accent prose-blockquote:text-secondary"
          dangerouslySetInnerHTML={{ __html: resource.contentHtml }}
        />
      </div>
    </article>
  );
}
