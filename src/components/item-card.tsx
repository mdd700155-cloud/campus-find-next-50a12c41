import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Tag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate, type Item } from "@/lib/mock-data";

export function ItemCard({ item }: { item: Item }) {
  return (
    <article className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={768}
          height={576}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={item.status} className="shadow-soft" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 text-base font-bold leading-snug text-foreground">{item.name}</h3>
          <span className="shrink-0 rounded-full bg-muted px-2 py-1 text-[11px] font-medium text-muted-foreground">
            #{item.id.replace("cf-", "")}
          </span>
        </div>

        <ul className="space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Tag className="size-3.5 shrink-0 text-primary" />
            <span className="truncate">{item.category}</span>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0 text-primary" />
            <span className="truncate">{item.location}</span>
          </li>
          <li className="flex items-center gap-2">
            <CalendarDays className="size-3.5 shrink-0 text-primary" />
            <span className="truncate">{formatDate(item.date)}</span>
          </li>
        </ul>

        <Button asChild variant="secondary" className="mt-auto w-full rounded-xl">
          <Link to="/items/$itemId" params={{ itemId: item.id }}>
            View Details <ArrowUpRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function ItemCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <Skeleton className="aspect-4/3 w-full rounded-none" />
      <div className="space-y-3 p-5">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3.5 w-1/2" />
        <Skeleton className="h-3.5 w-2/3" />
        <Skeleton className="h-3.5 w-1/3" />
        <Skeleton className="h-9 w-full rounded-xl" />
      </div>
    </div>
  );
}
