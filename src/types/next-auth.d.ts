import { DefaultSession } from "next-auth";
import type { WorkspaceRole } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      workspaceId?: string;
      workspaceName?: string;
      workspaceRole?: WorkspaceRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    workspaceId?: string;
    workspaceName?: string;
    workspaceRole?: WorkspaceRole;
  }
}
