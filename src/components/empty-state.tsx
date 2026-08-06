import { PackageSearch } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmptyState({
  title = "No items match your search",
  description = "Try a different keyword, or clear the filters to see everything on the board.",
  actionLabel,
  onAction,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
      <div className="grid size-14 place-items-center rounded-2xl bg-primary-soft text-primary">
        <PackageSearch className="size-7" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionLabel && onAction ? (
        <Button variant="outline" className="mt-6 rounded-xl" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
