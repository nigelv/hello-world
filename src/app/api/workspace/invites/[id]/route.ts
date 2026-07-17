import { prisma } from "@/lib/prisma";
import { handleRouteError, jsonError, jsonOk } from "@/lib/api";
import { requireActiveWorkspace, requireAdmin } from "@/lib/workspace";

type RouteContext = { params: { id: string } };

export async function DELETE(_request: Request, context: RouteContext) {
  try {
    const { user, workspace } = await requireActiveWorkspace();
    await requireAdmin(workspace.id, user.id);

    const invite = await prisma.workspaceInvite.findFirst({
      where: { id: context.params.id, workspaceId: workspace.id },
    });
    if (!invite) {
      return jsonError("Invite not found", 404);
    }

    await prisma.workspaceInvite.delete({ where: { id: invite.id } });
    return jsonOk({ ok: true });
  } catch (error) {
    return handleRouteError(error);
  }
}
