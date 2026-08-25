import type { Metadata } from "next";
import { tracks } from "@/lib/tracks";
import TrackHero from "@/components/track/TrackHero";
import TrackCapabilities from "@/components/track/TrackCapabilities";
import EngagementTracks from "@/components/pricing/EngagementTracks";
import RelatedContent from "@/components/track/RelatedContent";
import TrackCTA from "@/components/track/TrackCTA";

const track = tracks.startup;

export const metadata: Metadata = {
  title: track.name,
  description: track.description,
};

export default function StartupsPage() {
  return (
    <>
      <TrackHero track={track} />
      <TrackCapabilities track={track} />
      <EngagementTracks
        trackIds={["startup"]}
        title="Pricing"
        description="Startup engagements aren't a fixed package either — scope depends on what you're validating. Here's what's covered and how pricing gets set."
        linkToFullPricing
      />
      <RelatedContent track={track.id} />
      <TrackCTA track={track} />
    </>
  );
}
