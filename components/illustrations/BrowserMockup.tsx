type Variant = "retail" | "restaurant" | "services";

function Chrome() {
  return (
    <>
      <rect x="0" y="0" width="400" height="260" rx="12" className="fill-white" />
      <rect x="0" y="0" width="400" height="28" rx="12" className="fill-bg-light" />
      <circle cx="16" cy="14" r="4" className="fill-local/40" />
      <circle cx="30" cy="14" r="4" className="fill-local/40" />
      <circle cx="44" cy="14" r="4" className="fill-local/40" />
      <rect x="64" y="9" width="200" height="10" rx="5" className="fill-primary/10" />
    </>
  );
}

function Retail() {
  return (
    <g>
      <rect x="20" y="44" width="200" height="14" rx="4" className="fill-primary/80" />
      <rect x="340" y="44" width="40" height="24" rx="12" className="fill-local" />
      <text x="360" y="61" textAnchor="middle" className="fill-white text-[11px] font-bold">
        3
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${20 + i * 92}, 80)`}>
          <rect width="80" height="60" rx="6" className="fill-local/10" />
          <rect x="10" y="70" width="60" height="8" rx="4" className="fill-primary/60" />
          <rect x="10" y="84" width="36" height="8" rx="4" className="fill-local" />
        </g>
      ))}
    </g>
  );
}

function Restaurant() {
  return (
    <g>
      <rect x="20" y="44" width="180" height="14" rx="4" className="fill-primary/80" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(20, ${80 + i * 42})`}>
          <rect width="230" height="32" rx="6" className="fill-local/10" />
          <rect x="12" y="10" width="120" height="8" rx="4" className="fill-primary/70" />
          <rect x="12" y="20" width="60" height="6" rx="3" className="fill-secondary/50" />
          <rect x="180" y="8" width="36" height="16" rx="8" className="fill-local" />
        </g>
      ))}
      <rect x="270" y="80" width="110" height="128" rx="8" className="fill-primary" />
      <text x="325" y="105" textAnchor="middle" className="fill-white text-[10px] font-semibold">
        Your Order
      </text>
      <rect x="284" y="118" width="82" height="6" rx="3" className="fill-white/30" />
      <rect x="284" y="130" width="60" height="6" rx="3" className="fill-white/30" />
      <rect x="284" y="188" width="82" height="20" rx="6" className="fill-local" />
      <text x="325" y="202" textAnchor="middle" className="fill-white text-[10px] font-bold">
        Order Now
      </text>
    </g>
  );
}

function Services() {
  return (
    <g>
      <rect x="20" y="44" width="200" height="14" rx="4" className="fill-primary/80" />
      <g transform="translate(20,76)">
        <rect width="230" height="132" rx="8" className="fill-local/10" />
        {Array.from({ length: 7 }).map((_, col) =>
          Array.from({ length: 3 }).map((_, row) => {
            const active = col === 3 && row === 1;
            return (
              <circle
                key={`${col}-${row}`}
                cx={20 + col * 30}
                cy={30 + row * 34}
                r="10"
                className={active ? "fill-local" : "fill-white"}
              />
            );
          }),
        )}
      </g>
      <rect x="270" y="76" width="110" height="132" rx="8" className="fill-primary" />
      <text x="325" y="100" textAnchor="middle" className="fill-white text-[10px] font-semibold">
        2:30 PM
      </text>
      <rect x="284" y="114" width="82" height="6" rx="3" className="fill-white/30" />
      <rect x="284" y="126" width="55" height="6" rx="3" className="fill-white/30" />
      <rect x="284" y="188" width="82" height="20" rx="6" className="fill-local" />
      <text x="325" y="202" textAnchor="middle" className="fill-white text-[10px] font-bold">
        Book Now
      </text>
    </g>
  );
}

export default function BrowserMockup({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 400 260" className={className} xmlns="http://www.w3.org/2000/svg">
      <Chrome />
      {variant === "retail" && <Retail />}
      {variant === "restaurant" && <Restaurant />}
      {variant === "services" && <Services />}
    </svg>
  );
}
