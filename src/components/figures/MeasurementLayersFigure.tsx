/**
 * Inline SVG so it picks up the site's fonts and color tokens.
 * Drawn from the playbook repo; no data here beyond what the caption states.
 */
export function MeasurementLayersFigure() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[480px]"
      viewBox="0 0 480 560"
      role="img"
      aria-labelledby="ml-t ml-d"
    >
      <title id="ml-t">Five measurement layers, kept apart</title>
      <desc id="ml-d">
        Five layers, each answering a different question. Access: who holds a license. Activation:
        who has used it at all. Adoption: who keeps coming back. Depth: how do active users work
        with it. Outcomes: is anything about the engineering work improving. Between the layers:
        licenses do not prove use; one sign-in is not repeat use; use does not prove depth; depth
        does not prove productivity.
      </desc>
      <style>{`
      .ml-bg{fill:var(--background,#f8f7f3)}
      .ml-band{fill:var(--muted,#edebe7)}
      .ml-bar{fill:var(--accent,#a32451)}
      .ml-n{font:500 14px "JetBrains Mono",ui-monospace,monospace;fill:var(--accent,#a32451)}
      .ml-h{font:400 28px "Instrument Serif",Georgia,serif;fill:var(--ink,#14110d)}
      .ml-q{font:400 16px Inter,system-ui,sans-serif;fill:var(--muted-foreground,#504d47)}
      .ml-g{font:italic 400 19px "Instrument Serif",Georgia,serif;fill:var(--accent,#a32451)}
      .ml-a{fill:none;stroke:var(--accent,#a32451);stroke-width:1.5}
      `}</style>
      <rect className="ml-bg" width="480" height="560" />
      <g id="ml-b">
        <rect className="ml-band" x="20" y="16" width="440" height="68" />
        <rect className="ml-bar" x="20" y="16" width="4" height="68" />
        <text className="ml-n" x="42" y="46">
          01
        </text>
        <text className="ml-h" x="84" y="48">
          Access
        </text>
        <text className="ml-q" x="84" y="72">
          Who holds a license?
        </text>
      </g>
      <path className="ml-a" d="M44 94v22m-5-5l5 5l5-5" />
      <text className="ml-g" x="84" y="111">
        Licenses do not prove use.
      </text>
      <rect className="ml-band" x="20" y="130" width="440" height="68" />
      <rect className="ml-bar" x="20" y="130" width="4" height="68" />
      <text className="ml-n" x="42" y="160">
        02
      </text>
      <text className="ml-h" x="84" y="162">
        Activation
      </text>
      <text className="ml-q" x="84" y="186">
        Who has used it at all?
      </text>
      <path className="ml-a" d="M44 208v22m-5-5l5 5l5-5" />
      <text className="ml-g" x="84" y="225">
        One sign-in is not repeat use.
      </text>
      <rect className="ml-band" x="20" y="244" width="440" height="68" />
      <rect className="ml-bar" x="20" y="244" width="4" height="68" />
      <text className="ml-n" x="42" y="274">
        03
      </text>
      <text className="ml-h" x="84" y="276">
        Adoption
      </text>
      <text className="ml-q" x="84" y="300">
        Who keeps coming back?
      </text>
      <path className="ml-a" d="M44 322v22m-5-5l5 5l5-5" />
      <text className="ml-g" x="84" y="339">
        Use does not prove depth.
      </text>
      <rect className="ml-band" x="20" y="358" width="440" height="68" />
      <rect className="ml-bar" x="20" y="358" width="4" height="68" />
      <text className="ml-n" x="42" y="388">
        04
      </text>
      <text className="ml-h" x="84" y="390">
        Depth
      </text>
      <text className="ml-q" x="84" y="414">
        How do active users work with it?
      </text>
      <path className="ml-a" d="M44 436v22m-5-5l5 5l5-5" />
      <text className="ml-g" x="84" y="453">
        Depth does not prove productivity.
      </text>
      <rect className="ml-band" x="20" y="472" width="440" height="68" />
      <rect className="ml-bar" x="20" y="472" width="4" height="68" />
      <text className="ml-n" x="42" y="502">
        05
      </text>
      <text className="ml-h" x="84" y="504">
        Outcomes
      </text>
      <text className="ml-q" x="84" y="528">
        Is the engineering work improving?
      </text>
    </svg>
  );
}
