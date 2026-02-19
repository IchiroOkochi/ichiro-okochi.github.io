import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const SiteShell = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4">
    <Navbar />
    <main className="flex-1 py-10">{children}</main>
    <Footer />
  </div>
);
