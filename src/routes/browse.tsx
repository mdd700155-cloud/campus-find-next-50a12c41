import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { FilterPanel, type StatusFilter } from "@/components/filter-panel";
import { ItemCard, ItemCardSkeleton } from "@/components/item-card";
import { EmptyState } from "@/components/empty-state";
import { Pagination } from "@/components/pagination-bar";
import { items, type ItemCategory } from "@/lib/mock-data";

export const Route = createFileRoute("/browse")({
  head: () => ({
    meta: [
      { title: "Browse Lost & Found Items — CampusFind" },
      {
        name: "description",
        content:
          "Search every lost, found and claimed item reported across campus. Filter by status, category and location.",
      },
      { property: "og:title", content: "Browse Lost & Found Items — CampusFind" },
      {
        name: "og:description",
        content: "Search every lost, found and claimed item reported across campus.",
      },
    ],
  }),
  component: Browse,
});

const PAGE_SIZE = 6;

function Browse() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [category, setCategory] = useState<ItemCategory | "all">("all");
  const [page, setPage] = useState(1);
  const [loading] = useState(false);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesTerm =
        !term ||
        [item.name, item.category, item.location, item.description].some((field) =>
          field.toLowerCase().includes(term),
        );
      const matchesStatus = status === "all" || item.status === status;
      const matchesCategory = category === "all" || item.category === category;
      return matchesTerm && matchesStatus && matchesCategory;
    });
  }, [query, status, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const reset = () => {
    setQuery("");
    setStatus("all");
    setCategory("all");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="animate-rise">
        <section className="surface-gradient border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
              Browse campus items
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              {filtered.length} listing{filtered.length === 1 ? "" : "s"} from help desks, hostels
              and fellow students.
            </p>
            <SearchBar
              value={query}
              onChange={(value) => {
                setQuery(value);
                setPage(1);
              }}
              className="mt-8 max-w-xl"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <FilterPanel
            status={status}
            onStatusChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
            category={category}
            onCategoryChange={(value) => {
              setCategory(value);
              setPage(1);
            }}
          />

          <div className="mt-10">
            {loading ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <ItemCardSkeleton key={index} />
                ))}
              </div>
            ) : visible.length ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {visible.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </div>
                <Pagination
                  page={current}
                  pageCount={pageCount}
                  onPageChange={setPage}
                  className="mt-12"
                />
              </>
            ) : (
              <EmptyState actionLabel="Clear all filters" onAction={reset} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
