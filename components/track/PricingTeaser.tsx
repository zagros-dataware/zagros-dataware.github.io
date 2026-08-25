import Link from "next/link";
import { buildTiers } from "@/lib/pricing";

export default function PricingTeaser() {
  const cheapest = buildTiers[0];

  return (
    <section className="bg-white px-[5%] py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">Pricing</h2>
        <p className="mt-4 text-secondary">
          Fixed packages starting at {cheapest.price}, plus an optional
          monthly plan for ongoing content management. Full breakdown —
          alongside how Enterprise and Startup engagements are scoped — lives
          on one page.
        </p>
        <Link
          href="/pricing"
          className="mt-6 inline-block rounded-md bg-local px-8 py-3 font-semibold text-white transition-colors hover:bg-local-dark"
        >
          See Pricing
        </Link>
      </div>
    </section>
  );
}
