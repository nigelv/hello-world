import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/validators";
import { createUserWithPassword, createWorkspaceWithDefaults } from "@/lib/workspace-service";
import { handleRouteError, jsonError, jsonOk } from "@/lib/api";

export async function POST(request: Request) {
  try {
    const body = signupSchema.parse(await request.json());
    const email = body.email.toLowerCase();

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return jsonError("An account with this email already exists", 409);
    }

    const user = await createUserWithPassword({
      name: body.name,
      email,
      password: body.password,
    });

    const workspace = await createWorkspaceWithDefaults({
      name: body.workspaceName,
      ownerId: user.id,
    });

    return jsonOk(
      {
        user: { id: user.id, email: user.email, name: user.name },
        workspace: { id: workspace.id, name: workspace.name, slug: workspace.slug },
      },
      { status: 201 }
    );
  } catch (error) {
    return handleRouteError(error);
  }
}
