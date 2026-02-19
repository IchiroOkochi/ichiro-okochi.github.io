import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteShell } from "@/components/site-shell";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ichiro Okochi | Product-minded Engineer",
  description: "Portfolio of Ichiro Okochi: embedded systems, web apps, and systems engineering case studies.",
  openGraph: {
    title: "Ichiro Okochi Portfolio",
    description: "Dynamic project storytelling across embedded, web, and systems work."
  }
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const projects = await getProjects();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteShell projects={projects}>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
