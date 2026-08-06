import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Compass,
  Fingerprint,
  MapPinned,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ItemCard } from "@/components/item-card";
import { items, stats } from "@/lib/mock-data";
import heroImage from "@/assets/hero-campusfind.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CampusFind — Campus Lost & Found for Students" },
      {
        name: "description",
        content:
          "Report lost items, browse found items and get them back fast. CampusFind is the modern lost & found board for your college campus.",
      },
      { property: "og:title", content: "CampusFind — Campus Lost & Found for Students" },
      {
        property: "og:description",
        content:
          "Report lost items, browse found items and get them back fast on your campus lost & found board.",
      },
    ],
  }),
  component: Landing,
});

const steps = [
  {
    icon: ScanSearch,
    title: "Report in 30 seconds",
    body: "Snap a photo, pick a category and drop the last place you saw it. That's the whole form.",
  },
  {
    icon: MapPinned,
    title: "We match it on campus",
    body: "Your report is cross-checked against found items from help desks, hostels and labs.",
  },
  {
    icon: CheckCircle2,
    title: "Claim and close",
    body: "Verify with a detail only the owner knows, meet at the desk, mark the item as claimed.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Smart matching",
    body: "Category, location and date signals surface likely matches before you even search.",
  },
  {
    icon: ShieldCheck,
    title: "Verified hand-offs",
    body: "Claims go through a campus desk, so nothing walks away with the wrong person.",
  },
  {
    icon: BellRing,
    title: "Instant alerts",
    body: "Get pinged the moment someone posts an item that looks like yours.",
  },
  {
    icon: MessagesSquare,
    title: "Direct contact cards",
    body: "Every listing carries a contact card so you can arrange a pickup in one message.",
  },
  {
    icon: Fingerprint,
    title: "Private by default",
    body: "Sensitive details stay hidden until a claim is verified by the finder.",
  },
  {
    icon: Compass,
    title: "Campus-wide coverage",
    body: "Library, cafeteria, hostels, labs and shuttle stops — all on one board.",
  },
];

function Landing() {
  const featured = items.filter((item) => item.status !== "claimed").slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="surface-gradient relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-semibold text-primary shadow-soft">
                <Sparkles className="size-3.5" />
                {stats.matchRate}% of reports get matched within a week
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Lost something on campus?{" "}
                <span className="text-gradient-brand">We'll help you find it.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                CampusFind is the shared lost &amp; found board for your college. Report what's
                missing, browse what's been handed in, and get it back before the week is out.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-base shadow-glow">
                  <Link to="/report">
                    Report Lost Item <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full px-7 text-base"
                >
                  <Link to="/browse">Browse Items</Link>
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-success" /> Verified claims
                </span>
                <span className="flex items-center gap-2">
                  <Users className="size-4 text-primary" /> 9.6k students
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="grid-dots absolute -right-6 -top-6 hidden size-40 rounded-3xl opacity-60 lg:block" />
              <img
                src={heroImage}
                alt="Students returning a found backpack on campus with CampusFind listing cards floating alongside"
                width={1408}
                height={1104}
                className="relative w-full rounded-3xl border border-border bg-card shadow-lift"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
            {[
              { value: `${stats.recovered.toLocaleString()}+`, label: "Recovered items" },
              { value: stats.active.toLocaleString(), label: "Active listings" },
              { value: `${(stats.students / 1000).toFixed(1)}k`, label: "Happy students" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold tracking-tight text-gradient-brand sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">How it works</p>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
              Three steps between lost and found
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="card-hover relative rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-primary/10">
                  0{index + 1}
                </span>
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <step.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Built for campus
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
                Everything you need to reunite people with their stuff
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="card-hover rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-success-soft text-success">
                    <feature.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent listings */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Fresh on the board
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground">Latest listings</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/browse">
                See all items <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <div className="surface-gradient overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-lift sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-foreground sm:text-4xl">
              Someone on campus probably has it. Let's find out.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Posting a report takes half a minute and reaches every help desk on campus.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-base shadow-glow">
                <Link to="/report">Report Lost Item</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-7 text-base"
              >
                <Link to="/dashboard">Open Dashboard</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
