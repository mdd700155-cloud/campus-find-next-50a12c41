import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock3, FilePlus2, PackageSearch, TrendingUp } from "lucide-react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchBar } from "@/components/search-bar";
import { FilterPanel, type StatusFilter } from "@/components/filter-panel";
import { ItemCard } from "@/components/item-card";
import { EmptyState } from "@/components/empty-state";
import { StatCard } from "@/components/stat-card";
import { items, stats, type ItemCategory } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — CampusFind" },
      {
        name: "description",
        content:
          "Track your reports, monitor active listings and follow claim activity across campus from the CampusFind dashboard.",
      },
      { property: "og:title", content: "Dashboard — CampusFind" },
      {
        property: "og:description",
        content: "Track your reports, active listings and claim activity across campus.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState<ItemCategory | "all">("all");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTerm =
        !term ||
        [item.name, item.category, item.location].some((field) =>
          field.toLowerCase().includes(term),
        );
      const matchesStatus = status === "all" || item.status === status;
      const matchesCategory = category === "all" || item.category === category;
      return matchesTerm && matchesStatus && matchesCategory;
    });
  }, [query, status, category]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-border glass-panel">
            <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
              <SidebarTrigger />
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search your campus board…"
                className="max-w-md"
              />
              <div className="flex items-center gap-2">
                <ThemeToggle className="rounded-full" />
                <Button asChild className="hidden rounded-full sm:inline-flex">
                  <Link to="/report">
                    <FilePlus2 /> New report
                  </Link>
                </Button>
              </div>
            </div>
          </header>

          <main className="animate-rise flex-1 px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
              <div>
                <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  Welcome back, Ananya
                </h1>
                <p className="mt-1.5 text-muted-foreground">
                  Here's what's moving on the CampusFind board today.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  icon={PackageSearch}
                  label="Active listings"
                  value={stats.active.toLocaleString()}
                  hint="Across 8 campus locations"
                />
                <StatCard
                  icon={CheckCircle2}
                  label="Recovered"
                  value={stats.recovered.toLocaleString()}
                  hint="Since the board opened"
                  tone="success"
                />
                <StatCard
                  icon={Clock3}
                  label="Pending claims"
                  value="17"
                  hint="Awaiting desk verification"
                  tone="warning"
                />
                <StatCard
                  icon={TrendingUp}
                  label="Match rate"
                  value={`${stats.matchRate}%`}
                  hint="Matched within 7 days"
                />
              </div>

              <FilterPanel
                status={status}
                onStatusChange={setStatus}
                category={category}
                onCategoryChange={setCategory}
              />

              {filtered.length ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  actionLabel="Reset filters"
                  onAction={() => {
                    setQuery("");
                    setStatus("all");
                    setCategory("all");
                  }}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
