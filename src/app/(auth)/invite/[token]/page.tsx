export default function InvitePage({ params }: { params: { token: string } }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-sm space-y-2 text-center">
        <h1 className="font-display text-3xl font-semibold">Join workspace</h1>
        <p className="text-sm text-muted-foreground">
          Invite token <code className="text-xs">{params.token}</code> — accept flow next.
        </p>
      </div>
    </div>
  );
}
