import { site } from "@/lib/site";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary px-[5%] py-24 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <SectionTitle light>Let&apos;s Partner Together</SectionTitle>
        <p className="mt-6 text-white/90">
          Ready to redesign a workflow, validate a new product, or take your
          business online? Tell us which of the three tracks fits, and
          we&apos;ll take it from there.
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
