export default function LoopIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="480" height="280" rx="16" className="fill-startup/5" />

      <circle
        cx="240"
        cy="140"
        r="86"
        className="stroke-startup/30"
        strokeWidth="2"
      />
      <circle
        cx="240"
        cy="140"
        r="86"
        className="stroke-startup animate-dash"
        strokeWidth="2.5"
        strokeDasharray="10 14"
        strokeLinecap="round"
      />

      {/* arrowheads along the loop */}
      <path d="M240,50 L232,64 L248,64 Z" className="fill-startup" />
      <path d="M330,140 L316,132 L316,148 Z" className="fill-startup" />
      <path d="M150,140 L164,132 L164,148 Z" className="fill-startup" />

      {/* nodes */}
      <g>
        <circle cx="240" cy="54" r="30" className="fill-startup" />
        <text x="240" y="59" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          Build
        </text>
      </g>
      <g>
        <circle cx="326" cy="196" r="30" className="fill-primary" />
        <text x="326" y="201" textAnchor="middle" className="fill-white text-[10px] font-semibold">
          Measure
        </text>
      </g>
      <g>
        <circle cx="154" cy="196" r="30" className="fill-accent" />
        <text x="154" y="201" textAnchor="middle" className="fill-white text-[11px] font-semibold">
          Learn
        </text>
      </g>
    </svg>
  );
}
