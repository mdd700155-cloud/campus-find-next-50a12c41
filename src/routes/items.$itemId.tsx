import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Share2,
  Tag,
  UserRound,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { ItemCard } from "@/components/item-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { formatDate, getItem, similarItems, type ItemStatus } from "@/lib/mock-data";

export const Route = createFileRoute("/items/$itemId")({
  loader: ({ params }) => {
    const item = getItem(params.itemId);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Item not found — CampusFind" }, { name: "robots", content: "noindex" }],
      };
    }
    const { item } = loaderData;
    const title = `${item.name} — CampusFind`;
    return {
      meta: [
        { title },
        { name: "description", content: `${item.status} at ${item.location}. ${item.description}` },
        { property: "og:title", content: title },
        { property: "og:description", content: `${item.status} at ${item.location}.` },
      ],
    };
  },
  component: ItemDetails,
});

function ItemDetails() {
  const { item } = Route.useLoaderData();
  const [status, setStatus] = useState<ItemStatus>(item.status);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const facts = [
    { icon: Tag, label: "Category", value: item.category },
    { icon: MapPin, label: "Location", value: item.location },
    { icon: CalendarDays, label: "Date reported", value: formatDate(item.date) },
    { icon: UserRound, label: "Reported by", value: item.reportedBy },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="animate-rise mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Button asChild variant="ghost" className="mb-6 rounded-full pl-2">
          <Link to="/browse">
            <ArrowLeft /> Back to browse
          </Link>
        </Button>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <img
                src={item.image}
                alt={item.name}
                width={768}
                height={576}
                className="aspect-4/3 w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={status} size="lg" />
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  Ref #{item.id.replace("cf-", "")}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl">
                {item.name}
              </h1>
              <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-border bg-card p-4 shadow-soft"
                  >
                    <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      <fact.icon className="size-3.5 text-primary" />
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-base font-bold text-foreground">Contact card</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Reach out to arrange a verified hand-off on campus.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.contactName
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-foreground">{item.contactName}</p>
                  <p className="flex items-center gap-1 text-xs text-success">
                    <BadgeCheck className="size-3.5" /> Verified campus member
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <span className="truncate">{item.contactEmail}</span>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <span className="truncate">{item.contactPhone}</span>
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <Button
                  className="w-full rounded-xl"
                  disabled={status === "claimed"}
                  onClick={() => setConfirmOpen(true)}
                >
                  <CheckCircle2 />
                  {status === "claimed" ? "Already claimed" : "Mark as claimed"}
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl"
                  onClick={() => toast.success("Listing link copied to clipboard")}
                >
                  <Share2 /> Share listing
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/50 p-6">
              <h3 className="text-sm font-bold text-foreground">Claim safely</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Meet at a campus help desk, never off campus.</li>
                <li>Be ready to describe a detail that isn't in the photo.</li>
                <li>Bring your student ID for verification.</li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-extrabold text-foreground">Similar items</h2>
          <p className="mt-2 text-muted-foreground">Other listings that might be what you need.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similarItems(item).map((similar) => (
              <ItemCard key={similar.id} item={similar} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Mark "{item.name}" as claimed?</AlertDialogTitle>
            <AlertDialogDescription>
              This closes the listing and lets everyone know the item has been returned to its
              owner. You can reopen it from the dashboard if something's off.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="rounded-xl"
              onClick={() => {
                setStatus("claimed");
                toast.success("Item marked as claimed", {
                  description: "Nice work — one more happy student on campus.",
                });
              }}
            >
              Yes, mark as claimed
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
