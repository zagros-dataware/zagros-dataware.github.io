import { services } from "@/lib/site";
import SectionTitle from "./SectionTitle";

export default function Services() {
  return (
    <section id="services" className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>What We Deliver</SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary">
            Concrete, scoped engagements that translate our core pillars into
            outcomes on the ground.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-bg-light p-7 transition-colors hover:bg-primary/5"
            >
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {service.title}
              </h3>
              <p className="text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
