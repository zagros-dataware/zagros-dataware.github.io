import Link from "next/link";
import { getAllResources } from "@/lib/content";
import SectionTitle from "./SectionTitle";
import ResourceCard from "./ResourceCard";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

export default function ResourcesTeaser() {
  const resources = getAllResources().slice(0, 3);
  if (resources.length === 0) return null;

  return (
    <section className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>See It In Practice</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Technical documents and representative use cases from our
            resource library, spanning all three practice areas.
          </p>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <StaggerItem key={resource.slug}>
              <ResourceCard resource={resource} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link
            href="/resources"
            className="font-semibold text-accent-dark hover:underline"
          >
            Browse the full library →
          </Link>
        </div>
      </div>
    </section>
  );
}
