/**
 * Inline SVG so it picks up the site's fonts and color tokens.
 * Drawn from the playbook repo; no data here beyond what the caption states.
 */
export function ScorecardFigure() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[480px]"
      viewBox="0 0 480 540"
      role="img"
      aria-labelledby="sc-t sc-d"
    >
      <title id="sc-t">Adoption scorecard, synthetic six-week pilot</title>
      <desc id="sc-d">
        Synthetic data, week 6 of a simulated pilot with 12 users. Funnel: 12 licensed, 11
        activated, 7 weekly active, 6 sustained. By team, sustained users: team-api 5 of 7, trending
        up; team-tools 1 of 5, trending down. No composite score. No outcome data in this export.
        All numbers are invented.
      </desc>
      <style>{`
      .sc-bg{fill:var(--background,#f8f7f3)}
      .sc-m{font:500 13px "JetBrains Mono",ui-monospace,monospace;fill:var(--muted-foreground,#504d47);letter-spacing:.12em}
      .sc-l{font:400 16px Inter,system-ui,sans-serif;fill:var(--ink,#14110d)}
      .sc-v{font:400 16px Inter,system-ui,sans-serif;fill:var(--muted-foreground,#504d47)}
      .sc-k{font:400 28px "Instrument Serif",Georgia,serif;fill:var(--accent,#a32451)}
      .sc-r{stroke:var(--rule,#bbb9b4);stroke-width:1}
      .sc-g{fill:var(--rule,#bbb9b4)}
      .sc-a{fill:var(--accent,#a32451)}
      .sc-o{fill:none;stroke:var(--rule,#bbb9b4);stroke-width:1.5}
      .sc-up{fill:var(--accent,#a32451)}
      `}</style>
      <rect className="sc-bg" width="480" height="540" />
      <text className="sc-m" x="24" y="34">
        ADOPTION SCORECARD
      </text>
      <text className="sc-m" x="24" y="56">
        SYNTHETIC DATA · WEEK 6 · 12 USERS
      </text>
      <line className="sc-r" x1="24" y1="70" x2="456" y2="70" />
      <text className="sc-l" x="24" y="100">
        Licensed
      </text>
      <text className="sc-v" x="456" y="100" textAnchor="end">
        12
      </text>
      <rect className="sc-g" x="24" y="108" width="432" height="16" />
      <text className="sc-l" x="24" y="154">
        Activated
      </text>
      <text className="sc-v" x="456" y="154" textAnchor="end">
        11
      </text>
      <rect className="sc-g" x="24" y="162" width="396" height="16" />
      <text className="sc-l" x="24" y="208">
        Weekly active
      </text>
      <text className="sc-v" x="456" y="208" textAnchor="end">
        7
      </text>
      <rect className="sc-g" x="24" y="216" width="252" height="16" />
      <text className="sc-l" x="24" y="262">
        Sustained
      </text>
      <text className="sc-k" x="456" y="264" textAnchor="end">
        6
      </text>
      <rect className="sc-a" x="24" y="270" width="216" height="16" />
      <line className="sc-r" x1="24" y1="316" x2="456" y2="316" />
      <text className="sc-m" x="24" y="346">
        SUSTAINED, BY TEAM
      </text>
      <text className="sc-l" x="24" y="382">
        team-api
      </text>
      <circle className="sc-a" cx="168" cy="376" r="7" />
      <circle className="sc-a" cx="190" cy="376" r="7" />
      <circle className="sc-a" cx="212" cy="376" r="7" />
      <circle className="sc-a" cx="234" cy="376" r="7" />
      <circle className="sc-a" cx="256" cy="376" r="7" />
      <circle className="sc-o" cx="278" cy="376" r="6.2" />
      <circle className="sc-o" cx="300" cy="376" r="6.2" />
      <text className="sc-v" x="456" y="382" textAnchor="end">
        5 of 7, up
      </text>
      <text className="sc-l" x="24" y="430">
        team-tools
      </text>
      <circle className="sc-a" cx="168" cy="424" r="7" />
      <circle className="sc-o" cx="190" cy="424" r="6.2" />
      <circle className="sc-o" cx="212" cy="424" r="6.2" />
      <circle className="sc-o" cx="234" cy="424" r="6.2" />
      <circle className="sc-o" cx="256" cy="424" r="6.2" />
      <text className="sc-v" x="456" y="430" textAnchor="end">
        1 of 5, down
      </text>
      <line className="sc-r" x1="24" y1="460" x2="456" y2="460" />
      <text className="sc-v" x="24" y="488">
        No composite score. No outcome data here.
      </text>
      <text className="sc-v" x="24" y="510">
        Invented numbers. No real organization.
      </text>
    </svg>
  );
}
