import { hash } from "bcryptjs";
import { WorkspaceRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { DEFAULT_PIPELINE_STAGES, INVITE_EXPIRY_DAYS } from "@/lib/constants";

export async function uniqueWorkspaceSlug(baseName: string) {
  const base = slugify(baseName) || "workspace";
  let slug = base;
  let attempt = 0;

  while (await prisma.workspace.findUnique({ where: { slug } })) {
    attempt += 1;
    slug = `${base}-${attempt}`;
  }

  return slug;
}

export async function createWorkspaceWithDefaults(params: {
  name: string;
  ownerId: string;
}) {
  const slug = await uniqueWorkspaceSlug(params.name);

  return prisma.workspace.create({
    data: {
      name: params.name,
      slug,
      members: {
        create: {
          userId: params.ownerId,
          role: WorkspaceRole.ADMIN,
        },
      },
      stages: {
        create: DEFAULT_PIPELINE_STAGES.map((stage) => ({ ...stage })),
      },
    },
    include: {
      stages: { orderBy: { position: "asc" } },
      members: true,
    },
  });
}

export async function createUserWithPassword(params: {
  name: string;
  email: string;
  password: string;
}) {
  const passwordHash = await hash(params.password, 10);
  return prisma.user.create({
    data: {
      name: params.name,
      email: params.email.toLowerCase(),
      passwordHash,
    },
  });
}

export function inviteExpiresAt(from = new Date()) {
  const expires = new Date(from);
  expires.setDate(expires.getDate() + INVITE_EXPIRY_DAYS);
  return expires;
}
