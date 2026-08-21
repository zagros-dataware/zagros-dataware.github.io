import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="bg-white px-[5%] py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <SectionTitle>Who We Are</SectionTitle>
        <p className="mt-6 text-lg text-secondary">
          Registered in Armenia, Zagros Dataware is a premier IT products,
          consultancy, and business process optimization firm. We specialize
          in bridging the gap between complex technical requirements and
          high-level institutional goals, empowering modern organizations to
          thrive.
        </p>
      </div>
    </section>
  );
}
