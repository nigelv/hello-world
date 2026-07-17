"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type WorkspaceResponse = {
  workspace: { id: string; name: string; slug: string };
  role: "ADMIN" | "MEMBER";
};

export function WorkspaceSettingsForm() {
  const queryClient = useQueryClient();
  const { update } = useSession();
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  const { data, isLoading } = useQuery<WorkspaceResponse>({
    queryKey: ["workspace"],
    queryFn: async () => {
      const res = await fetch("/api/workspace");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load workspace");
      return json;
    },
  });

  useEffect(() => {
    if (data?.workspace.name) {
      setName(data.workspace.name);
    }
  }, [data?.workspace.name]);

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/workspace", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Save failed");
      return json;
    },
    onSuccess: async () => {
      setSaved(true);
      await queryClient.invalidateQueries({ queryKey: ["workspace"] });
      await update();
      setTimeout(() => setSaved(false), 2000);
    },
  });

  if (isLoading || !data) {
    return <div className="h-32 animate-pulse rounded-lg bg-muted" />;
  }

  const isAdmin = data.role === "ADMIN";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold">Workspace</h1>
        <p className="text-sm text-muted-foreground">
          Slug <code className="text-xs">{data.workspace.slug}</code> · pipeline stages come later
        </p>
      </div>
      <form
        className="max-w-md space-y-3 rounded-lg border border-border bg-card/60 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (isAdmin) mutation.mutate();
        }}
      >
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="ws-name">
            Workspace name
          </label>
          <Input
            id="ws-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isAdmin}
            required
          />
        </div>
        {isAdmin ? (
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Saving…" : "Save"}
            </Button>
            {saved ? <span className="text-sm text-primary">Saved</span> : null}
            {mutation.isError ? (
              <span className="text-sm text-destructive">
                {mutation.error instanceof Error ? mutation.error.message : "Error"}
              </span>
            ) : null}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Only admins can rename the workspace.</p>
        )}
      </form>
    </div>
  );
}
