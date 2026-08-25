import type { Metadata } from "next";
import PricingHero from "@/components/pricing/PricingHero";
import Pricing from "@/components/track/Pricing";
import EngagementTracks from "@/components/pricing/EngagementTracks";
import PricingCTA from "@/components/pricing/PricingCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-price Web Design packages starting at $500, plus how Enterprise process work and Startup engagements are scoped and quoted.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Pricing />
      <EngagementTracks />
      <PricingCTA />
    </>
  );
}
