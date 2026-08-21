export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-light px-[5%] pt-44 pb-24 text-center text-white">
      <div className="mx-auto max-w-3xl animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Empowering Organizational Excellence
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-white/90">
          Through Data-Driven Strategy, Agile Transformation, and
          World-Class Process Optimization.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-md bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Connect With Us
        </a>
      </div>
    </section>
  );
}
