/**
 * Real output of the public adoption scorecard, run on the simulated worked
 * example in the playbook repo (week 6, compared with week 3). Excerpt only:
 * the funnel and the by-team table. The numbers are invented.
 *
 * If the repo's output format changes, re-run the command below and replace
 * OUTPUT. Do not edit the numbers by hand.
 */
const COMMAND = [
  "python -m tools.adoption_scorecard \\",
  "    data/worked_example_week6.csv \\",
  "    --previous data/worked_example_week3.csv",
].join("\n");

const OUTPUT = `# Adoption scorecard: worked_example_week6.csv

As of: 2025-03-14
Users read: 12. Rows skipped: 0.

## 1. Funnel

| Stage | Users | Share of licensed |
| --- | --- | --- |
| Licensed | 12 | 100% |
| Activated (any use) | 11 | 92% |
| Weekly active (last 7 days) | 7 | 58% |
| Sustained | 6 | 50% |

## 2. By team

| Team | Users | Sustained | Sustained rate | Median active days | Trend |
| --- | --- | --- | --- | --- | --- |
| team-api | 7 | 5 | 71% | 12 | up |
| team-tools | 5 | 1 | 20% | 3 | down |`;

export function ScorecardTerminal() {
  return (
    <figure className="min-w-0">
      <div
        role="region"
        aria-label="Scorecard command and output, scrollable"
        tabIndex={0}
        className="overflow-x-auto border border-rule bg-muted/50 p-4 font-mono text-xs leading-relaxed text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-5 sm:text-[13px]"
      >
        <pre className="whitespace-pre">
          <span className="text-muted-foreground">$ </span>
          {COMMAND}
          {"\n\n"}
          {OUTPUT}
        </pre>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Real output of the open-source scorecard on the simulated worked example in the playbook
        repo, shortened to the funnel and team table. The full report adds depth, a status panel and
        what each metric can hide. Invented numbers. No real organization.
      </figcaption>
    </figure>
  );
}
