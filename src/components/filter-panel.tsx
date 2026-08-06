import { cn } from "@/lib/utils";
import { CATEGORIES, type ItemCategory, type ItemStatus } from "@/lib/mock-data";

export type StatusFilter = ItemStatus | "all";

export function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-glow"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "lost", label: "Lost" },
  { value: "found", label: "Found" },
  { value: "claimed", label: "Claimed" },
];

export function FilterPanel({
  status,
  onStatusChange,
  category,
  onCategoryChange,
}: {
  status: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
  category: ItemCategory | "all";
  onCategoryChange: (value: ItemCategory | "all") => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Status
        </span>
        {STATUS_OPTIONS.map((option) => (
          <Chip
            key={option.value}
            active={status === option.value}
            onClick={() => onStatusChange(option.value)}
          >
            {option.label}
          </Chip>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Category
        </span>
        <Chip active={category === "all"} onClick={() => onCategoryChange("all")}>
          All
        </Chip>
        {CATEGORIES.map((item) => (
          <Chip key={item} active={category === item} onClick={() => onCategoryChange(item)}>
            {item}
          </Chip>
        ))}
      </div>
    </div>
  );
}
