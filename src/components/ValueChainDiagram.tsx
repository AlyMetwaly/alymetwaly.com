import { valueChainSteps } from "@/components/AITransformationValueChain";

const shortLabels: Record<(typeof valueChainSteps)[number]["id"], string> = {
  strategy: "Strategy",
  "operating-model": "Ops Model",
  governance: "Governance",
  adoption: "Adoption",
  measurement: "Measure",
  "business-value": "Value",
};

const SIZE = 400;
const CENTER = SIZE / 2;
const RADIUS = 148;
const NODE_R = 36;

function polarToCartesian(angle: number, radius = RADIUS) {
  return {
    x: CENTER + radius * Math.cos(angle),
    y: CENTER + radius * Math.sin(angle),
  };
}

export function ValueChainDiagram() {
  const stepCount = valueChainSteps.length;

  return (
    <figure
      className="mx-auto w-full max-w-[22rem] lg:max-w-none lg:sticky lg:top-28"
      aria-label="AI Transformation Value Chain diagram"
    >
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-auto w-full" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="chain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d95f82" />
            <stop offset="65%" stopColor="#a83a5c" />
            <stop offset="100%" stopColor="#6f5599" />
          </linearGradient>
          <marker id="chain-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--muted-foreground)" opacity="0.45" />
          </marker>
        </defs>

        {/* Outer guide ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--rule)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Flow arcs between steps */}
        {valueChainSteps.map((_, index) => {
          const startAngle = (index / stepCount) * 2 * Math.PI - Math.PI / 2;
          const endAngle = ((index + 1) / stepCount) * 2 * Math.PI - Math.PI / 2;
          const start = polarToCartesian(startAngle, RADIUS - NODE_R * 0.35);
          const end = polarToCartesian(endAngle, RADIUS - NODE_R * 0.35);
          const midAngle = (startAngle + endAngle) / 2;
          const control = polarToCartesian(midAngle, RADIUS + 18);

          return (
            <path
              key={`arc-${index}`}
              d={`M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`}
              fill="none"
              stroke="var(--rule)"
              strokeWidth="1"
              markerEnd="url(#chain-arrow)"
            />
          );
        })}

        {/* Center hub */}
        <circle cx={CENTER} cy={CENTER} r={52} fill="var(--muted)" stroke="var(--rule)" />
        <text
          x={CENTER}
          y={CENTER - 6}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "13px" }}
        >
          AI Value
        </text>
        <text
          x={CENTER}
          y={CENTER + 12}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "13px" }}
        >
          Chain
        </text>

        {/* Step nodes */}
        {valueChainSteps.map((step, index) => {
          const angle = (index / stepCount) * 2 * Math.PI - Math.PI / 2;
          const { x, y } = polarToCartesian(angle);
          const label = shortLabels[step.id];

          return (
            <g key={step.id}>
              <circle
                cx={x}
                cy={y}
                r={NODE_R}
                fill="var(--background)"
                stroke="url(#chain-gradient)"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                fill="var(--accent)"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </text>
              <text
                x={x}
                y={y + 8}
                textAnchor="middle"
                className="fill-foreground"
                style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:text-left">
        Six connected stages · continuous flow
      </figcaption>
    </figure>
  );
}
