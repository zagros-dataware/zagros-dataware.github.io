import { sectors } from "@/lib/site";
import SectionTitle from "./SectionTitle";

export default function Sectors() {
  return (
    <section id="sectors" className="bg-white px-[5%] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionTitle>Serving Public &amp; Private Sectors</SectionTitle>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {sectors.map((sector) => (
            <div key={sector.title} className="rounded-lg bg-bg-light p-10">
              <h3 className="mb-4 text-2xl font-semibold text-primary">
                {sector.title}
              </h3>
              <p className="text-secondary">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
