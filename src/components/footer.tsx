import { Link } from "@tanstack/react-router";
import { Github, Instagram, Twitter } from "lucide-react";

import { Logo } from "@/components/navbar";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Browse Items", to: "/browse" as const },
      { label: "Report an Item", to: "/report" as const },
      { label: "Dashboard", to: "/dashboard" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              CampusFind helps students reunite with what they lost — one report, one match, one
              happy hand-off at a time.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Twitter, Instagram, Github].map((Icon, index) => (
                <span
                  key={index}
                  className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-bold text-foreground">{column.title}</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-bold text-foreground">Campus Help</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Library Help Desk — Floor 1</li>
              <li>Security Office — Main Gate</li>
              <li>support@campusfind.edu</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CampusFind. Built for students, by students.</p>
          <p>Privacy · Terms · Campus Guidelines</p>
        </div>
      </div>
    </footer>
  );
}
