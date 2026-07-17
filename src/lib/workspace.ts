import { getServerSession } from "next-auth";
import { WorkspaceRole } from "@prisma/client";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getCurrentSession() {
  return getServerSession(authOptions);
}

export async function requireUser() {
  const session = await getCurrentSession();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  return session.user;
}

/** Ensure the user belongs to the workspace; returns membership + role. */
export async function requireMembership(workspaceId: string, userId: string) {
  const membership = await prisma.workspaceMember.findUnique({
    where: {
      workspaceId_userId: { workspaceId, userId },
    },
  });

  if (!membership) {
    throw new Error("Forbidden");
  }

  return membership;
}

export async function requireAdmin(workspaceId: string, userId: string) {
  const membership = await requireMembership(workspaceId, userId);
  if (membership.role !== WorkspaceRole.ADMIN) {
    throw new Error("Forbidden");
  }
  return membership;
}

export async function getDefaultWorkspaceForUser(userId: string) {
  return prisma.workspaceMember.findFirst({
    where: { userId },
    include: { workspace: true },
    orderBy: { createdAt: "asc" },
  });
}

/** Resolve the active workspace for API routes (from session). */
export async function requireActiveWorkspace() {
  const user = await requireUser();
  const session = await getCurrentSession();
  const workspaceId = session?.user.workspaceId;

  if (workspaceId) {
    const membership = await requireMembership(workspaceId, user.id);
    const workspace = await prisma.workspace.findUniqueOrThrow({
      where: { id: workspaceId },
    });
    return { user, workspace, membership };
  }

  const fallback = await getDefaultWorkspaceForUser(user.id);
  if (!fallback) {
    throw new Error("No workspace found");
  }

  return {
    user,
    workspace: fallback.workspace,
    membership: fallback,
  };
}
