import { getAllPosts, getAllResources } from "@/lib/content";
import type { TrackId } from "@/lib/tracks";
import SectionTitle from "../SectionTitle";
import PostCard from "../PostCard";
import ResourceCard from "../ResourceCard";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

export default function RelatedContent({ track }: { track: TrackId }) {
  const posts = getAllPosts().filter((p) => p.track === track).slice(0, 2);
  const resources = getAllResources().filter((r) => r.track === track).slice(0, 2);

  if (posts.length === 0 && resources.length === 0) return null;

  return (
    <section className="bg-bg-light px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>Related Reading</SectionTitle>
          </Reveal>
        </div>
        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <PostCard post={post} />
            </StaggerItem>
          ))}
          {resources.map((resource) => (
            <StaggerItem key={resource.slug}>
              <ResourceCard resource={resource} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
