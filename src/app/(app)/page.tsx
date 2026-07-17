import Link from "next/link";
import { getCurrentSession } from "@/lib/workspace";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await getCurrentSession();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          {session?.user?.workspaceName || "Workspace"}
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground">
          Welcome{session?.user?.name ? `, ${session.user.name.split(" ")[0]}` : ""}
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Auth and workspace invites are live. Next up: contacts list with quick-add.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Contacts", href: "/contacts", blurb: "Next vertical slice" },
          { label: "Members", href: "/settings/members", blurb: "Invite teammates" },
          { label: "Workspace", href: "/settings/workspace", blurb: "Rename your team" },
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

      <Button variant="outline" asChild>
        <Link href="/settings/members">Invite a teammate</Link>
      </Button>
    </div>
  );
}
