export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40" />

      <div className="animate-float absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div
        className="animate-float absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-startup/20 blur-3xl"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="animate-float absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-local/10 blur-3xl"
        style={{ animationDelay: "-4s" }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 800 400"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="white" strokeOpacity="0.4" strokeWidth="1">
          <path
            className="animate-dash"
            d="M40,320 L200,320 L240,200 L420,200 L460,80 L640,80"
            strokeDasharray="6 10"
          />
          <path
            className="animate-dash"
            d="M60,120 L220,120 L260,240 L440,240 L480,340 L720,340"
            strokeDasharray="6 10"
            style={{ animationDelay: "-3s" }}
          />
        </g>
        <g fill="var(--color-accent)">
          <circle className="animate-pulse-slow" cx="200" cy="320" r="4" />
          <circle
            className="animate-pulse-slow"
            cx="420"
            cy="200"
            r="4"
            style={{ animationDelay: "-1s" }}
          />
          <circle
            className="animate-pulse-slow"
            cx="640"
            cy="80"
            r="4"
            style={{ animationDelay: "-2s" }}
          />
        </g>
      </svg>
    </div>
  );
}
