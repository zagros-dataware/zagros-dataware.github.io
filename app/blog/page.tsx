import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import BlogList from "@/components/blog/BlogList";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Perspectives on BPM, Agile-BPM, BABOK, and ERP for enterprises, Lean Startup and Design Sprints for founders, and process-minded web design for local business.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="px-[5%] pt-40 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>The Blog</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Practical writing on process, product, and validation — across
            enterprise, startup, and local-business work.
          </p>
        </div>
        <div className="mt-12">
          <BlogList posts={posts} />
        </div>
      </div>
    </section>
  );
}
