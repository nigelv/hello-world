import { prisma } from "@/lib/prisma";
import { updateWorkspaceSchema } from "@/lib/validators";
import { handleRouteError, jsonError, jsonOk } from "@/lib/api";
import {
  getDefaultWorkspaceForUser,
  requireActiveWorkspace,
  requireAdmin,
  requireUser,
} from "@/lib/workspace";
import { createWorkspaceWithDefaults } from "@/lib/workspace-service";

export async function GET() {
  try {
    const { workspace, membership } = await requireActiveWorkspace();
    return jsonOk({
      workspace: {
        id: workspace.id,
        name: workspace.name,
        slug: workspace.slug,
        createdAt: workspace.createdAt,
      },
      role: membership.role,
    });
  } catch (error) {
    return handleRouteError(error);
  }
}

/** Create a workspace for a signed-in user who doesn't have one yet (e.g. Google). */
export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const existing = await getDefaultWorkspaceForUser(user.id);
    if (existing) {
      return jsonError("You already belong to a workspace", 409);
    }

    const body = updateWorkspaceSchema.parse(await request.json());
    const workspace = await createWorkspaceWithDefaults({
      name: body.name,
      ownerId: user.id,
    });

    return jsonOk({ workspace }, { status: 201 });
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function PATCH(request: Request) {
  try {
    const { user, workspace } = await requireActiveWorkspace();
    await requireAdmin(workspace.id, user.id);

    const body = updateWorkspaceSchema.parse(await request.json());
    const updated = await prisma.workspace.update({
      where: { id: workspace.id },
      data: { name: body.name },
    });

    return jsonOk({ workspace: updated });
  } catch (error) {
    return handleRouteError(error);
  }
}
