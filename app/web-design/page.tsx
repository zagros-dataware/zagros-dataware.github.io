import type { Metadata } from "next";
import { tracks } from "@/lib/tracks";
import TrackHero from "@/components/track/TrackHero";
import TrackCapabilities from "@/components/track/TrackCapabilities";
import SelectedWork from "@/components/track/SelectedWork";
import PortfolioShowcase from "@/components/track/PortfolioShowcase";
import Pricing from "@/components/track/Pricing";
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
      <SelectedWork />
      <PortfolioShowcase />
      <Pricing />
      <RelatedContent track={track.id} includeResources={false} />
      <TrackCTA track={track} />
    </>
  );
}
