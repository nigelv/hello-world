"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  Kanban,
  CheckSquare,
  Building2,
  Settings,
  UserPlus,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/contacts", label: "Contacts", icon: Users },
  { href: "/companies", label: "Companies", icon: Building2 },
  { href: "/deals", label: "Deals", icon: Kanban },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/settings/workspace", label: "Workspace", icon: Settings },
  { href: "/settings/members", label: "Members", icon: UserPlus },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside className="flex h-full w-56 shrink-0 flex-col border-r border-border bg-sidebar px-3 py-4">
      <div className="mb-6 px-2">
        <Link href="/" className="font-display text-xl tracking-tight text-foreground">
          PulseCRM
        </Link>
        <p className="mt-0.5 truncate text-xs text-muted-foreground">
          {session?.user?.workspaceName || "Simple sales pipeline"}
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                active
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-2 border-t border-border pt-3">
        <div className="px-2">
          <p className="truncate text-sm font-medium">{session?.user?.name || "Signed in"}</p>
          <p className="truncate text-xs text-muted-foreground">{session?.user?.email}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-muted-foreground"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Button>
        <p className="px-2 text-[11px] text-muted-foreground">Press ⌘K to search</p>
      </div>
    </aside>
  );
}
