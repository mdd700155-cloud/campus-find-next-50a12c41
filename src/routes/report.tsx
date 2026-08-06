import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { ImagePlus, Info, Loader2, MapPin, Send, UserRound } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { CATEGORIES, LOCATIONS } from "@/lib/mock-data";

export const Route = createFileRoute("/report")({
  head: () => ({
    meta: [
      { title: "Report a Lost or Found Item — CampusFind" },
      {
        name: "description",
        content:
          "Post a lost or found item on the CampusFind board in under a minute: photo, category, location, date and contact details.",
      },
      { property: "og:title", content: "Report a Lost or Found Item — CampusFind" },
      {
        property: "og:description",
        content: "Post a lost or found item on the CampusFind board in under a minute.",
      },
    ],
  }),
  component: Report;
});

function Section({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: typeof Info;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function Report() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Report posted to the campus board", {
        description: "We'll alert you the moment a matching item shows up.",
      });
      navigate({ to: "/browse" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="animate-rise">
        <section className="surface-gradient border-b border-border">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">Report an item</h1>
            <p className="mt-3 text-muted-foreground">
              The more detail you add, the faster the match. Nothing here is public until you submit.
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6 px-4 py-10 sm:px-6">
          <Section
            icon={ImagePlus}
            title="Photo"
            description="A clear photo doubles the chance of a match."
          >
            <label
              htmlFor="photo"
              className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border bg-secondary/40 px-6 py-12 text-center transition-colors hover:border-primary/50 hover:bg-primary-soft/40"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Selected item preview"
                  className="max-h-56 rounded-xl object-contain"
                />
              ) : (
                <>
                  <span className="grid size-12 place-items-center rounded-2xl bg-card text-primary shadow-soft">
                    <ImagePlus className="size-6" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    Click to upload a photo
                  </span>
                  <span className="text-xs text-muted-foreground">PNG or JPG, up to 5 MB</span>
                </>
              )}
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </Section>

          <Section
            icon={Info}
            title="Item details"
            description="Tell us what it is and which board it belongs on."
          >
            <div className="space-y-2">
              <Label>Is this item lost or found?</Label>
              <RadioGroup defaultValue="lost" className="flex flex-wrap gap-3">
                {["lost", "found"].map((value) => (
                  <Label
                    key={value}
                    htmlFor={`kind-${value}`}
                    className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-border px-4 py-3 text-sm font-medium capitalize transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-soft"
                  >
                    <RadioGroupItem id={`kind-${value}`} value={value} />
                    I {value === "lost" ? "lost" : "found"} an item
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Item name</Label>
              <Input
                id="name"
                required
                placeholder="e.g. Black Sony earbuds case"
                className="h-11 rounded-xl"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category" className="h-11 rounded-xl">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" required className="h-11 rounded-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                required
                rows={4}
                placeholder="Colour, brand, stickers, contents — anything only the owner would know."
                className="rounded-xl"
              />
            </div>
          </Section>

          <Section
            icon={MapPin}
            title="Location"
            description="Where it was last seen or handed in."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Campus location</Label>
                <Select>
                  <SelectTrigger id="location" className="h-11 rounded-xl">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATIONS.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="spot">Exact spot (optional)</Label>
                <Input id="spot" placeholder="Near the window study pods" className="h-11 rounded-xl" />
              </div>
            </div>
          </Section>

          <Section
            icon={UserRound}
            title="Contact information"
            description="Shown on the listing so the other side can reach you."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Full name</Label>
                <Input id="contact-name" required placeholder="Ananya Rao" className="h-11 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Campus email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@campus.edu"
                  className="h-11 rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone (optional)</Label>
              <Input id="contact-phone" type="tel" placeholder="+1 (415) 000-0000" className="h-11 rounded-xl" />
            </div>
          </Section>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-7"
              onClick={() => navigate({ to: "/browse" })}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="h-12 rounded-full px-7 text-base shadow-glow"
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" /> Posting report…
                </>
              ) : (
                <>
                  <Send /> Submit report
                </>
              )}
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
