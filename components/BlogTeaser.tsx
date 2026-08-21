import Link from "next/link";
import { getAllPosts } from "@/lib/content";
import SectionTitle from "./SectionTitle";
import PostCard from "./PostCard";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

export default function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle>From the Blog</SectionTitle>
          <Link
            href="/blog"
            className="font-semibold text-accent-dark hover:underline"
          >
            View all articles →
          </Link>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
