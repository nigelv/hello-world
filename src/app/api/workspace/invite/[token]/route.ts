import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { acceptInviteSchema } from "@/lib/validators";
import { handleRouteError, jsonError, jsonOk } from "@/lib/api";
import { getCurrentSession } from "@/lib/workspace";
import { createUserWithPassword } from "@/lib/workspace-service";

type RouteContext = { params: { token: string } };

async function findValidInvite(token: string) {
  const invite = await prisma.workspaceInvite.findUnique({
    where: { token },
    include: {
      workspace: { select: { id: true, name: true, slug: true } },
      invitedBy: { select: { name: true, email: true } },
    },
  });

  if (!invite || invite.expiresAt < new Date()) {
    return null;
  }

  return invite;
}

export async function GET(_request: Request, context: RouteContext) {
  try {
    const invite = await findValidInvite(context.params.token);
    if (!invite) {
      return jsonError("Invite not found or expired", 404);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: invite.email },
      select: { id: true },
    });

    return jsonOk({
      invite: {
        email: invite.email,
        role: invite.role,
        expiresAt: invite.expiresAt,
        workspace: invite.workspace,
        invitedBy: invite.invitedBy,
      },
      existingUser: Boolean(existingUser),
    });
  } catch (error) {
    return handleRouteError(error);
  }
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const invite = await findValidInvite(context.params.token);
    if (!invite) {
      return jsonError("Invite not found or expired", 404);
    }

    const body = acceptInviteSchema.parse(await request.json().catch(() => ({})));
    const session = await getCurrentSession();

    let userId: string;
    let emailForLogin: string | null = null;
    let passwordForLogin: string | null = null;

    if (session?.user?.id) {
      const sessionUser = await prisma.user.findUnique({
        where: { id: session.user.id },
      });
      if (!sessionUser || sessionUser.email.toLowerCase() !== invite.email) {
        return jsonError("Sign in with the invited email to accept this invite", 403);
      }
      userId = sessionUser.id;
    } else {
      const existing = await prisma.user.findUnique({
        where: { email: invite.email },
      });

      if (existing) {
        if (!body.password) {
          return jsonError("Password is required to accept this invite", 400);
        }
        if (!existing.passwordHash) {
          return jsonError("This account uses Google sign-in. Sign in first, then accept.", 400);
        }
        const valid = await compare(body.password, existing.passwordHash);
        if (!valid) {
          return jsonError("Incorrect password", 401);
        }
        userId = existing.id;
        emailForLogin = existing.email;
        passwordForLogin = body.password;
      } else {
        if (!body.name || !body.password) {
          return jsonError("Name and password are required to create your account", 400);
        }
        const user = await createUserWithPassword({
          name: body.name,
          email: invite.email,
          password: body.password,
        });
        userId = user.id;
        emailForLogin = user.email;
        passwordForLogin = body.password;
      }
    }

    const alreadyMember = await prisma.workspaceMember.findUnique({
      where: {
        workspaceId_userId: {
          workspaceId: invite.workspaceId,
          userId,
        },
      },
    });

    if (!alreadyMember) {
      await prisma.workspaceMember.create({
        data: {
          workspaceId: invite.workspaceId,
          userId,
          role: invite.role,
        },
      });
    }

    await prisma.workspaceInvite.delete({ where: { id: invite.id } });

    return jsonOk({
      workspace: invite.workspace,
      credentials:
        emailForLogin && passwordForLogin
          ? { email: emailForLogin, password: passwordForLogin }
          : null,
    });
  } catch (error) {
    return handleRouteError(error);
  }
}
