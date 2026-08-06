import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Compass, FilePlus2, LayoutDashboard, Menu, Radar, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { to: "/browse", label: "Browse Items", icon: Compass },
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/report", label: "Report Item", icon: FilePlus2 },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow">
        <Radar className="size-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-foreground">
        Campus<span className="text-gradient-brand">Find</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 glass-panel">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-foreground bg-accent" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="rounded-full" />
          <Button asChild className="hidden rounded-full md:inline-flex">
            <Link to="/report">Report Lost Item</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-card px-4 py-3 md:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                <link.icon className="size-4 text-primary" />
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="mt-2 w-full rounded-xl">
            <Link to="/report" onClick={() => setOpen(false)}>
              Report Lost Item
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
