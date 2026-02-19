import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Ichiro Okochi | Full-Stack Developer",
  description: "Modern portfolio website featuring projects, skills, experience, and contact details."
};

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
