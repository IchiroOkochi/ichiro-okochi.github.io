import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Ichiro Okochi | Portfolio",
  description: "Production-ready portfolio with dark mode, smooth motion, and project storytelling.",
  openGraph: {
    title: "Ichiro Okochi Portfolio",
    description: "A modern, responsive portfolio built with Next.js and TypeScript."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
