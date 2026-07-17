import { AcceptInviteForm } from "@/components/auth/accept-invite-form";

export default function InvitePage({ params }: { params: { token: string } }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <AcceptInviteForm token={params.token} />
    </div>
  );
}
