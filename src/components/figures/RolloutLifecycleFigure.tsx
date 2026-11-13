/**
 * Inline SVG so it picks up the site's fonts and color tokens.
 * Drawn from the playbook repo; no data here beyond what the caption states.
 */
export function RolloutLifecycleFigure() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[480px]"
      viewBox="0 0 480 580"
      role="img"
      aria-labelledby="lc-t lc-d"
    >
      <title id="lc-t">The five moves of an AI coding rollout</title>
      <desc id="lc-d">
        Five steps in order. 1 Align: who owns the rollout, what problem are we solving, and how
        will we know if it worked. 2 Enable: how does each role get from access to a useful first
        week. 3 Embed: which useful behaviors should become repeatable team practices. 4 Measure:
        what should we measure, and where can the numbers mislead us. 5 Expand: should we expand,
        hold, or fix the rollout first.
      </desc>
      <style>{`
      .lc-bg{fill:var(--background,#f8f7f3)}
      .lc-rail{stroke:var(--rule,#bbb9b4);stroke-width:1.5}
      .lc-ring{fill:var(--background,#f8f7f3);stroke:var(--accent,#a32451);stroke-width:2}
      .lc-n{font:500 15px "JetBrains Mono",ui-monospace,monospace;fill:var(--accent,#a32451)}
      .lc-h{font:400 32px "Instrument Serif",Georgia,serif;fill:var(--ink,#14110d)}
      .lc-q{font:400 16px Inter,system-ui,sans-serif;fill:var(--muted-foreground,#504d47)}
      `}</style>
      <rect className="lc-bg" width="480" height="580" />
      <line className="lc-rail" x1="44" y1="42" x2="44" y2="490" />
      <g textAnchor="middle">
        <circle className="lc-ring" cx="44" cy="42" r="18" />
        <text className="lc-n" x="44" y="47.5">
          1
        </text>
        <circle className="lc-ring" cx="44" cy="154" r="18" />
        <text className="lc-n" x="44" y="159.5">
          2
        </text>
        <circle className="lc-ring" cx="44" cy="266" r="18" />
        <text className="lc-n" x="44" y="271.5">
          3
        </text>
        <circle className="lc-ring" cx="44" cy="378" r="18" />
        <text className="lc-n" x="44" y="383.5">
          4
        </text>
        <circle className="lc-ring" cx="44" cy="490" r="18" />
        <text className="lc-n" x="44" y="495.5">
          5
        </text>
      </g>
      <text className="lc-h" x="84" y="52">
        Align
      </text>
      <text className="lc-q" x="84" y="78">
        Who owns the rollout, what problem are we
        <tspan x="84" dy="21">
          solving, and how will we know if it worked?
        </tspan>
      </text>
      <text className="lc-h" x="84" y="164">
        Enable
      </text>
      <text className="lc-q" x="84" y="190">
        How does each role get from access
        <tspan x="84" dy="21">
          to a useful first week?
        </tspan>
      </text>
      <text className="lc-h" x="84" y="276">
        Embed
      </text>
      <text className="lc-q" x="84" y="302">
        Which useful behaviors should become
        <tspan x="84" dy="21">
          repeatable team practices?
        </tspan>
      </text>
      <text className="lc-h" x="84" y="388">
        Measure
      </text>
      <text className="lc-q" x="84" y="414">
        What should we measure, and where
        <tspan x="84" dy="21">
          can the numbers mislead us?
        </tspan>
      </text>
      <text className="lc-h" x="84" y="500">
        Expand
      </text>
      <text className="lc-q" x="84" y="526">
        Should we expand, hold, or fix the
        <tspan x="84" dy="21">
          rollout first?
        </tspan>
      </text>
    </svg>
  );
}
