import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export const Navbar = () => (
  <header className="sticky top-3 z-40 rounded-xl border border-border bg-surface/90 p-3 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <Link href="#home" className="font-semibold tracking-wide">
        Ichiro Okochi
      </Link>
      <nav aria-label="Primary" className="hidden gap-5 text-sm md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-accent">
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </div>
  </header>
);
