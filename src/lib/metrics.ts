export const PROOF_METRICS = [
  { id: "adoption", value: "65%", label: "Increase in AI adoption across engineering teams" },
  { id: "scaleup", value: "5×", label: "Scale-up of an AI-enabled solution in 8 weeks" },
  {
    id: "capacity",
    value: "31",
    label: "Engineer-years of annual capacity from 560 hours of effort",
  },
  {
    id: "ratio",
    value: "100:1",
    label: "Hours of capacity per hour of focused transformation effort",
  },
  { id: "reach", value: "74k", label: "Employees in scope of a global transformation program" },
  { id: "roadmap", value: "255", label: "Strategic roadmap items governed across 20 workstreams" },
] as const;

export const BUILDING_METRIC_IDS = ["adoption", "scaleup", "capacity"] as const;
