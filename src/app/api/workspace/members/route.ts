import { randomBytes } from "crypto";
import { WorkspaceRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { inviteSchema } from "@/lib/validators";
import { handleRouteError, jsonError, jsonOk } from "@/lib/api";
import { requireActiveWorkspace, requireAdmin } from "@/lib/workspace";
import { inviteExpiresAt } from "@/lib/workspace-service";

function newInviteToken() {
  return randomBytes(24).toString("hex");
}

export async function GET() {
  try {
    const { workspace, membership } = await requireActiveWorkspace();

    const [members, invites] = await Promise.all([
      prisma.workspaceMember.findMany({
        where: { workspaceId: workspace.id },
        include: {
          user: {
            select: { id: true, name: true, email: true, image: true },
          },
        },
        orderBy: { createdAt: "asc" },
      }),
      membership.role === WorkspaceRole.ADMIN
        ? prisma.workspaceInvite.findMany({
            where: {
              workspaceId: workspace.id,
              expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: "desc" },
          })
        : Promise.resolve([]),
    ]);

    return jsonOk({
      workspace: { id: workspace.id, name: workspace.name, slug: workspace.slug },
      role: membership.role,
      members,
      invites,
    });
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function POST(request: Request) {
  try {
    const { user, workspace } = await requireActiveWorkspace();
    await requireAdmin(workspace.id, user.id);

    const body = inviteSchema.parse(await request.json());
    const email = body.email.toLowerCase();

    const alreadyMember = await prisma.workspaceMember.findFirst({
      where: {
        workspaceId: workspace.id,
        user: { email },
      },
    });
    if (alreadyMember) {
      return jsonError("That person is already a member", 409);
    }

    const token = newInviteToken();
    const expiresAt = inviteExpiresAt();

    const invite = await prisma.workspaceInvite.upsert({
      where: {
        workspaceId_email: { workspaceId: workspace.id, email },
      },
      create: {
        email,
        role: body.role,
        token,
        workspaceId: workspace.id,
        invitedById: user.id,
        expiresAt,
      },
      update: {
        role: body.role,
        token,
        invitedById: user.id,
        expiresAt,
      },
    });

    return jsonOk(
      {
        invite,
        inviteUrl: `/invite/${invite.token}`,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleRouteError(error);
  }
}
