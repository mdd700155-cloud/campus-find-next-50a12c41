import { CheckCircle2, Search, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ItemStatus } from "@/lib/mock-data";

const config: Record<ItemStatus, { label: string; className: string; icon: typeof Search }> = {
  lost: {
    label: "Lost",
    className: "bg-warning-soft text-warning-foreground",
    icon: Search,
  },
  found: {
    label: "Found",
    className: "bg-primary-soft text-primary",
    icon: Sparkles,
  },
  claimed: {
    label: "Claimed",
    className: "bg-success-soft text-success",
    icon: CheckCircle2,
  },
};

export function StatusBadge({
  status,
  className,
  size = "sm",
}: {
  status: ItemStatus;
  className?: string;
  size?: "sm" | "lg";
}) {
  const { label, className: tone, icon: Icon } = config[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold tracking-tight",
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3.5 py-1.5 text-sm",
        tone,
        className,
      )}
    >
      <Icon className={size === "sm" ? "size-3" : "size-4"} />
      {label}
    </span>
  );
}
