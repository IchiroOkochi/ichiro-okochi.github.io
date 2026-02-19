export type ExperienceItem = {
  organization: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    organization: "Aurora Systems",
    title: "Senior Frontend Engineer",
    dateRange: "2023 — Present",
    bullets: [
      "Led interface architecture for telemetry dashboards used by 50+ field operators.",
      "Improved page performance by 42% with rendering and asset optimization.",
      "Established accessibility checklist and CI checks for keyboard and contrast compliance."
    ]
  },
  {
    organization: "Nexis Labs",
    title: "Product Engineer",
    dateRange: "2021 — 2023",
    bullets: [
      "Shipped internal tooling for FPGA verification workflows and reporting.",
      "Partnered with designers to create reusable UI tokens and components.",
      "Mentored junior developers on TypeScript and testing fundamentals."
    ]
  }
];
