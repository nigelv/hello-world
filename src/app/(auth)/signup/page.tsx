import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-1 text-center">
          <h1 className="font-display text-3xl font-semibold">Create workspace</h1>
          <p className="text-sm text-muted-foreground">Get productive in under 5 minutes</p>
        </div>
        <form className="space-y-3 rounded-lg border border-border bg-card/80 p-6 shadow-sm">
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="name">
              Your name
            </label>
            <Input id="name" disabled />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" disabled />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="workspace">
              Workspace name
            </label>
            <Input id="workspace" placeholder="Acme Inc" disabled />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input id="password" type="password" disabled />
          </div>
          <Button className="w-full" type="button" disabled>
            Create account (wired in next slice)
          </Button>
        </form>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary underline-offset-2 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
