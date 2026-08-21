import type { Metadata } from "next";
import { getAllResources } from "@/lib/content";
import ResourceList from "@/components/blog/ResourceList";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Resources & Use-Case Library",
  description:
    "Technical documents and representative use cases spanning enterprise process, startup validation, and local business web design.",
};

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <section className="px-[5%] pt-40 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>Resources &amp; Use-Case Library</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Technical documents and representative use cases. Use cases are
            illustrative engagement patterns, not disclosed client work.
          </p>
        </div>
        <div className="mt-12">
          <ResourceList resources={resources} />
        </div>
      </div>
    </section>
  );
}
