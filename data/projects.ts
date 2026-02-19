export type Project = {
  slug: string;
  name: string;
  description: string;
  details: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "signal-dashboard",
    name: "Signal Dashboard",
    description: "Operations dashboard for monitoring industrial IoT devices in real time.",
    details:
      "Built a responsive monitoring interface with focus states, keyboard shortcuts, and low-latency updates to keep operators aware of issues.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    githubUrl: "https://github.com/ichiro-okochi/signal-dashboard",
    demoUrl: "https://example.com/signal-dashboard",
    featured: true
  },
  {
    slug: "fpga-vision-workbench",
    name: "FPGA Vision Workbench",
    description: "Tooling portal for configuring and testing FPGA-based computer vision pipelines.",
    details:
      "Designed a workflow-focused UX with clear architecture diagrams, step-by-step validation states, and guided troubleshooting.",
    tech: ["Next.js", "Framer Motion", "MDX", "Shadcn-inspired UI"],
    githubUrl: "https://github.com/ichiro-okochi/fpga-vision-workbench",
    featured: true
  },
  {
    slug: "teamboard-studio",
    name: "Teamboard Studio",
    description: "Collaborative product planning workspace for distributed engineering teams.",
    details:
      "Implemented drag-and-drop planning cards, animated transitions, and role-based views for PM, design, and engineering.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/ichiro-okochi/teamboard-studio",
    demoUrl: "https://example.com/teamboard"
  }
];
