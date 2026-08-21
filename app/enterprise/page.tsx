import type { Metadata } from "next";
import { tracks } from "@/lib/tracks";
import TrackHero from "@/components/track/TrackHero";
import TrackCapabilities from "@/components/track/TrackCapabilities";
import Sectors from "@/components/Sectors";
import RelatedContent from "@/components/track/RelatedContent";
import TrackCTA from "@/components/track/TrackCTA";

const track = tracks.enterprise;

export const metadata: Metadata = {
  title: track.name,
  description: track.description,
};

export default function EnterprisePage() {
  return (
    <>
      <TrackHero track={track} />
      <TrackCapabilities track={track} />
      <Sectors />
      <RelatedContent track={track.id} />
      <TrackCTA track={track} />
    </>
  );
}
