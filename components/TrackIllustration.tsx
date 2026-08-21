import ProcessFlowIllustration from "./illustrations/ProcessFlowIllustration";
import LoopIllustration from "./illustrations/LoopIllustration";
import StorefrontIllustration from "./illustrations/StorefrontIllustration";
import type { TrackId } from "@/lib/tracks";

export default function TrackIllustration({
  track,
  className,
}: {
  track: TrackId;
  className?: string;
}) {
  if (track === "enterprise") return <ProcessFlowIllustration className={className} />;
  if (track === "startup") return <LoopIllustration className={className} />;
  return <StorefrontIllustration className={className} />;
}
