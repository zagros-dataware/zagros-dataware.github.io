import { site } from "@/lib/site";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary px-[5%] py-24 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <SectionTitle light>Let&apos;s Partner Together</SectionTitle>
        <p className="mt-6 text-white/90">
          Ready to revamp your system architecture, implement a
          high-performing product, or transition to a true Agile culture?
        </p>
        <div className="mt-6 text-xl font-semibold">
          Inquiries:{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
