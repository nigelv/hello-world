"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SignupForm() {
  const router = useRouter();
  const { data: session, status, update } = useSession();
  const needsWorkspaceOnly =
    status === "authenticated" && Boolean(session?.user?.id) && !session?.user?.workspaceId;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);

    if (needsWorkspaceOnly) {
      const res = await fetch("/api/workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: workspaceName }),
      });
      const data = await res.json().catch(() => ({}));
      setPending(false);
      if (!res.ok) {
        setError(data.error || "Could not create workspace");
        return;
      }
      await update();
      router.push("/");
      router.refresh();
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, workspaceName }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setPending(false);
      setError(data.error || "Could not create account");
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setPending(false);

    if (result?.error) {
      setError("Account created, but sign-in failed. Try logging in.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="font-display text-3xl font-semibold">
          {needsWorkspaceOnly ? "Create workspace" : "Create workspace"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {needsWorkspaceOnly
            ? "Finish setup by naming your workspace"
            : "Get productive in under 5 minutes"}
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="space-y-3 rounded-lg border border-border bg-card/80 p-6 shadow-sm"
      >
        {!needsWorkspaceOnly ? (
          <>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="name">
                Your name
              </label>
              <Input
                id="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </>
        ) : null}
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="workspace">
            Workspace name
          </label>
          <Input
            id="workspace"
            placeholder="Acme Inc"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            required
          />
        </div>
        {!needsWorkspaceOnly ? (
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
            <p className="text-xs text-muted-foreground">At least 8 characters</p>
          </div>
        ) : null}
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <Button className="w-full" type="submit" disabled={pending}>
          {pending ? "Creating…" : needsWorkspaceOnly ? "Create workspace" : "Create account"}
        </Button>
      </form>
      {!needsWorkspaceOnly ? (
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary underline-offset-2 hover:underline">
            Sign in
          </Link>
        </p>
      ) : null}
    </div>
  );
}
