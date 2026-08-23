import { buildTiers, carePlans } from "@/lib/pricing";
import SectionTitle from "../SectionTitle";
import Reveal from "../motion/Reveal";
import { StaggerGroup, StaggerItem } from "../motion/Stagger";

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-local-dark" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5 6.5 12 13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExcludedIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary/40" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <SectionTitle>Pricing</SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
              A one-time build fee gets your site designed and launched.
              Ongoing content management is optional, billed separately, and
              scales with how much your site needs to change month to month.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {buildTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`flex h-full flex-col rounded-xl border p-6 ${
                  tier.featured
                    ? "border-local/40 bg-local/5 shadow-lg shadow-local/10"
                    : "border-black/5 bg-white shadow-sm shadow-black/[0.03]"
                }`}
              >
                {tier.featured && (
                  <span className="mb-3 w-fit rounded-full bg-local px-3 py-1 text-xs font-semibold text-white">
                    Most Common
                  </span>
                )}
                <h3 className="text-lg font-semibold text-primary">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-primary">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-xs text-secondary">{tier.priceNote}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-secondary">{tier.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-secondary">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                  {tier.excludes?.map((excluded) => (
                    <li key={excluded} className="flex gap-2 text-sm text-secondary/60">
                      <ExcludedIcon />
                      {excluded}
                    </li>
                  ))}
                  <li className="flex gap-2 text-sm text-secondary/60">
                    <ExcludedIcon />
                    Hosting &amp; email not included
                  </li>
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.15}>
          <div className="mt-16 rounded-xl bg-bg-light p-8">
            <h3 className="text-lg font-semibold text-primary">
              Ongoing Care &amp; Content Management
              <span className="ml-2 text-sm font-normal text-secondary">— optional, cancel anytime</span>
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {carePlans.map((plan) => (
                <div key={plan.name}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-primary">{plan.name}</span>
                    <span className="text-sm font-semibold text-local-dark">{plan.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-secondary">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-secondary">
            Prices reflect typical project scope — final quotes depend on your
            specific requirements. Hosting and email are not included in any
            plan; we can point you to a provider, or you can use one you
            already have. Local businesses in Armenia: ask about custom
            quotes in AMD.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
