export default function StorefrontIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="480" height="280" rx="16" className="fill-local/5" />

      <path
        d="M100,140 L200,140 L260,140 L380,140"
        className="stroke-local animate-dash"
        strokeWidth="2.5"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />

      {/* storefront */}
      <g>
        <rect x="56" y="112" width="88" height="56" rx="6" className="fill-primary" />
        <path d="M56,112 L100,90 L144,112" className="stroke-primary" strokeWidth="6" strokeLinejoin="round" />
        <rect x="88" y="140" width="24" height="28" className="fill-white/90" />
      </g>

      {/* cart */}
      <g>
        <circle cx="240" cy="140" r="34" className="fill-local" />
        <path
          d="M226,128 h6 l6,24 h16 l6,-18 h-24"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="234" cy="156" r="3" className="fill-white" />
        <circle cx="252" cy="156" r="3" className="fill-white" />
      </g>

      {/* confirmation */}
      <g>
        <circle cx="392" cy="140" r="24" className="fill-accent animate-pulse-slow" />
        <path
          d="M382,140 L389,147 L403,131"
          className="stroke-white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <text x="100" y="196" textAnchor="middle" className="fill-primary text-[11px] font-semibold">
        Browse
      </text>
      <text x="240" y="196" textAnchor="middle" className="fill-primary text-[11px] font-semibold">
        Order
      </text>
      <text x="392" y="196" textAnchor="middle" className="fill-primary text-[11px] font-semibold">
        Fulfilled
      </text>
    </svg>
  );
}
