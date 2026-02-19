export type SkillCategory = {
  category: "Languages" | "Frameworks" | "Tools" | "Concepts";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "C/C++"] },
  { category: "Frameworks", items: ["Next.js", "React", "Node.js", "Tailwind CSS"] },
  { category: "Tools", items: ["GitHub Actions", "Figma", "Docker", "Vercel"] },
  { category: "Concepts", items: ["Accessibility", "System Design", "Performance", "DX"] }
];
