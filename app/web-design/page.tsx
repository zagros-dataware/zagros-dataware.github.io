import type { Metadata } from "next";
import { tracks } from "@/lib/tracks";
import TrackHero from "@/components/track/TrackHero";
import TrackCapabilities from "@/components/track/TrackCapabilities";
import RelatedContent from "@/components/track/RelatedContent";
import TrackCTA from "@/components/track/TrackCTA";

const track = tracks.local;

export const metadata: Metadata = {
  title: track.name,
  description: track.description,
};

export default function WebDesignPage() {
  return (
    <>
      <TrackHero track={track} />
      <TrackCapabilities track={track} />
      <RelatedContent track={track.id} />
      <TrackCTA track={track} />
    </>
  );
}
