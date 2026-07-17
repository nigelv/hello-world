"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/shared/empty-state";

type MembersResponse = {
  workspace: { id: string; name: string; slug: string };
  role: "ADMIN" | "MEMBER";
  members: Array<{
    id: string;
    role: "ADMIN" | "MEMBER";
    createdAt: string;
    user: { id: string; name: string | null; email: string; image: string | null };
  }>;
  invites: Array<{
    id: string;
    email: string;
    role: "ADMIN" | "MEMBER";
    token: string;
    expiresAt: string;
  }>;
};

export function MembersPanel() {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"MEMBER" | "ADMIN">("MEMBER");
  const [lastInviteUrl, setLastInviteUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const { data, isLoading, error } = useQuery<MembersResponse>({
    queryKey: ["workspace-members"],
    queryFn: async () => {
      const res = await fetch("/api/workspace/members");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load members");
      return json;
    },
  });

  const inviteMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/workspace/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Invite failed");
      return json as { inviteUrl: string };
    },
    onSuccess: (result) => {
      const absolute = `${window.location.origin}${result.inviteUrl}`;
      setLastInviteUrl(absolute);
      setEmail("");
      setCopied(false);
      queryClient.invalidateQueries({ queryKey: ["workspace-members"] });
    },
  });

  const revokeMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/workspace/invites/${id}`, { method: "DELETE" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not revoke invite");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["workspace-members"] }),
  });

  async function copyInvite() {
    if (!lastInviteUrl) return;
    await navigator.clipboard.writeText(lastInviteUrl);
    setCopied(true);
  }

  if (isLoading) {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-8 w-40 rounded-md bg-muted" />
        <div className="h-24 rounded-lg bg-muted" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <EmptyState
        title="Couldn’t load members"
        description={error instanceof Error ? error.message : "Try refreshing."}
      />
    );
  }

  const isAdmin = data.role === "ADMIN";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold">Members</h1>
        <p className="text-sm text-muted-foreground">
          People in {data.workspace.name}. Invitees get a link — no email sending yet.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Team
        </h2>
        <ul className="divide-y divide-border rounded-lg border border-border bg-card/60">
          {data.members.map((m) => (
            <li key={m.id} className="flex items-center justify-between gap-3 px-4 py-3">
              <div>
                <p className="font-medium text-foreground">{m.user.name || m.user.email}</p>
                <p className="text-sm text-muted-foreground">{m.user.email}</p>
              </div>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {m.role}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {isAdmin ? (
        <section className="space-y-3">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Invite teammate
          </h2>
          <form
            className="flex flex-col gap-3 rounded-lg border border-border bg-card/60 p-4 sm:flex-row sm:items-end"
            onSubmit={(e) => {
              e.preventDefault();
              inviteMutation.mutate();
            }}
          >
            <div className="flex-1 space-y-1.5">
              <label className="text-sm font-medium" htmlFor="invite-email">
                Email
              </label>
              <Input
                id="invite-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="teammate@company.com"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="invite-role">
                Role
              </label>
              <select
                id="invite-role"
                className="flex h-10 rounded-md border border-input bg-background px-3 text-sm"
                value={role}
                onChange={(e) => setRole(e.target.value as "MEMBER" | "ADMIN")}
              >
                <option value="MEMBER">Member</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <Button type="submit" disabled={inviteMutation.isPending}>
              {inviteMutation.isPending ? "Creating…" : "Create invite"}
            </Button>
          </form>
          {inviteMutation.isError ? (
            <p className="text-sm text-destructive">
              {inviteMutation.error instanceof Error
                ? inviteMutation.error.message
                : "Invite failed"}
            </p>
          ) : null}
          {lastInviteUrl ? (
            <div className="rounded-lg border border-primary/30 bg-accent/50 p-3 text-sm">
              <p className="font-medium text-foreground">Invite link ready</p>
              <p className="mt-1 break-all text-muted-foreground">{lastInviteUrl}</p>
              <Button variant="outline" size="sm" className="mt-2" type="button" onClick={copyInvite}>
                {copied ? "Copied" : "Copy link"}
              </Button>
            </div>
          ) : null}

          {data.invites.length > 0 ? (
            <ul className="divide-y divide-border rounded-lg border border-border bg-card/60">
              {data.invites.map((invite) => (
                <li key={invite.id} className="flex items-center justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="font-medium">{invite.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {invite.role} · expires {new Date(invite.expiresAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const url = `${window.location.origin}/invite/${invite.token}`;
                        setLastInviteUrl(url);
                        setCopied(false);
                      }}
                    >
                      Show link
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => revokeMutation.mutate(invite.id)}
                    >
                      Revoke
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : (
        <p className="text-sm text-muted-foreground">Only admins can invite teammates.</p>
      )}
    </div>
  );
}
