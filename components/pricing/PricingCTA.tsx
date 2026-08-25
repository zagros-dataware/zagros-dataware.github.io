import Link from "next/link";
import { site } from "@/lib/site";

export default function PricingCTA() {
  return (
    <section className="bg-primary px-[5%] py-20 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Not sure which track fits?
        </h2>
        <p className="mt-4 text-white/90">
          Tell us what you&apos;re trying to get done, and we&apos;ll point
          you at the right starting point — no obligation.
        </p>
        <Link
          href={`mailto:${site.email}?subject=${encodeURIComponent("Pricing question")}`}
          className="mt-8 inline-block rounded-md bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Email Us
        </Link>
      </div>
    </section>
  );
}
