import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          Scaffold ready
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          PulseCRM
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Lightweight CRM scaffold is up. Next vertical slice: auth &amp; workspace
          setup, then contacts.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Contacts", href: "/contacts", blurb: "List + quick-add next" },
          { label: "Deals", href: "/deals", blurb: "Kanban pipeline later" },
          { label: "Tasks", href: "/tasks", blurb: "My Tasks view later" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-border bg-card/70 p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
          >
            <h2 className="font-medium text-foreground">{item.label}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{item.blurb}</p>
          </Link>
        ))}
      </section>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/login">Open login (stub)</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/signup">Open signup (stub)</Link>
        </Button>
      </div>
    </div>
  );
}
