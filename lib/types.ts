export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  timeline: string;
  impact: number;
  tags: string[];
  featured: boolean;
  role: string;
  tech: string[];
  cover: string;
};

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export type Highlight = {
  label: string;
  value: number;
  suffix?: string;
};
