import type { Metadata } from "next";
import { tracks } from "@/lib/tracks";
import TrackHero from "@/components/track/TrackHero";
import TrackCapabilities from "@/components/track/TrackCapabilities";
import Sectors from "@/components/Sectors";
import EngagementTracks from "@/components/pricing/EngagementTracks";
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
      <EngagementTracks
        trackIds={["enterprise"]}
        title="Pricing"
        description="Enterprise process work isn't a fixed package — scope varies by organization and problem. Here's what's covered and how pricing gets set."
        linkToFullPricing
      />
      <RelatedContent track={track.id} />
      <TrackCTA track={track} />
    </>
  );
}
