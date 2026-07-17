"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type InvitePayload = {
  invite: {
    email: string;
    role: string;
    workspace: { id: string; name: string; slug: string };
    invitedBy: { name: string | null; email: string };
  };
  existingUser: boolean;
};

export function AcceptInviteForm({ token }: { token: string }) {
  const router = useRouter();
  const { data: session, update } = useSession();
  const [payload, setPayload] = useState<InvitePayload | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(`/api/workspace/invite/${token}`);
      const data = await res.json().catch(() => ({}));
      if (cancelled) return;
      if (!res.ok) {
        setLoadError(data.error || "Invite not found or expired");
        return;
      }
      setPayload(data);
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!payload) return;
    setError(null);
    setPending(true);

    const res = await fetch(`/api/workspace/invite/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name || undefined, password: password || undefined }),
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setPending(false);
      setError(data.error || "Could not accept invite");
      return;
    }

    if (data.credentials) {
      const result = await signIn("credentials", {
        email: data.credentials.email,
        password: data.credentials.password,
        redirect: false,
      });
      if (result?.error) {
        setPending(false);
        setError("Joined workspace, but sign-in failed. Try logging in.");
        return;
      }
    } else {
      await update();
    }

    setPending(false);
    router.push("/");
    router.refresh();
  }

  if (loadError) {
    return (
      <div className="max-w-sm space-y-2 text-center">
        <h1 className="font-display text-3xl font-semibold">Invite unavailable</h1>
        <p className="text-sm text-muted-foreground">{loadError}</p>
      </div>
    );
  }

  if (!payload) {
    return (
      <div className="max-w-sm space-y-3 text-center animate-pulse">
        <div className="mx-auto h-8 w-48 rounded-md bg-muted" />
        <div className="mx-auto h-4 w-64 rounded-md bg-muted" />
      </div>
    );
  }

  const sessionMatches =
    session?.user?.email?.toLowerCase() === payload.invite.email.toLowerCase();
  const needsAccountForm = !sessionMatches && !payload.existingUser;
  const needsPasswordOnly = !sessionMatches && payload.existingUser;

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="font-display text-3xl font-semibold">Join {payload.invite.workspace.name}</h1>
        <p className="text-sm text-muted-foreground">
          Invited as <span className="font-medium text-foreground">{payload.invite.email}</span>
          {payload.invite.invitedBy.name ? ` by ${payload.invite.invitedBy.name}` : ""}
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="space-y-3 rounded-lg border border-border bg-card/80 p-6 shadow-sm"
      >
        {needsAccountForm ? (
          <>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="name">
                Your name
              </label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="password">
                Create password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>
          </>
        ) : null}
        {needsPasswordOnly ? (
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              You already have an account — enter your password to join.
            </p>
          </div>
        ) : null}
        {sessionMatches ? (
          <p className="text-sm text-muted-foreground">
            You&apos;re signed in as {session?.user?.email}. Accept to join this workspace.
          </p>
        ) : null}
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button className="w-full" type="submit" disabled={pending}>
          {pending ? "Joining…" : "Accept invite"}
        </Button>
      </form>
    </div>
  );
}
