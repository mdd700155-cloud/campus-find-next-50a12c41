import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  tone = "primary",
  className,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  tone?: "primary" | "success" | "warning";
  className?: string;
}) {
  const tones = {
    primary: "bg-primary-soft text-primary",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning-foreground",
  } as const;

  return (
    <div
      className={cn(
        "card-hover rounded-2xl border border-border bg-card p-5 shadow-soft",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", tones[tone])}>
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">{value}</p>
      {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
