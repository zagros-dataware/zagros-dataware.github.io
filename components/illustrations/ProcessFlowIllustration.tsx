export default function ProcessFlowIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="480" height="280" rx="16" className="fill-primary/5" />

      {/* swimlanes */}
      <line x1="24" y1="90" x2="456" y2="90" className="stroke-primary/10" strokeWidth="1" />
      <line x1="24" y1="190" x2="456" y2="190" className="stroke-primary/10" strokeWidth="1" />

      {/* connectors */}
      <path
        d="M84,52 L84,52 L200,52 L200,140 L316,140 L316,232 L400,232"
        className="stroke-accent animate-dash"
        strokeWidth="2.5"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />

      {/* nodes */}
      <g>
        <rect x="44" y="32" width="80" height="40" rx="8" className="fill-primary" />
        <text x="84" y="56" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          Intake
        </text>
      </g>
      <g>
        <rect x="160" y="120" width="80" height="40" rx="8" className="fill-primary" />
        <text x="200" y="144" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          Review
        </text>
      </g>
      <g>
        <rect x="276" y="212" width="80" height="40" rx="8" className="fill-accent" />
        <text x="316" y="236" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          Approve
        </text>
      </g>
      <g>
        <circle cx="416" cy="232" r="16" className="fill-accent animate-pulse-slow" />
        <path
          d="M409,232 L414,238 L424,226"
          className="stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
