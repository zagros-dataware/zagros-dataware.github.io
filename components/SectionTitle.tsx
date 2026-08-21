export default function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`relative inline-block text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-primary"}`}
    >
      {children}
      <span className="mx-auto mt-3 block h-[3px] w-12 bg-accent" />
    </h2>
  );
}
