import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getDefaultWorkspaceForUser } from "@/lib/workspace";

async function workspaceClaims(userId: string) {
  const membership = await getDefaultWorkspaceForUser(userId);
  if (!membership) {
    return {
      workspaceId: undefined,
      workspaceName: undefined,
      workspaceRole: undefined,
    };
  }

  return {
    workspaceId: membership.workspaceId,
    workspaceName: membership.workspace.name,
    workspaceRole: membership.role,
  };
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email.toLowerCase() },
        });

        if (!user?.passwordHash) {
          return null;
        }

        const valid = await compare(credentials.password, user.passwordHash);
        if (!valid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        };
      },
    }),
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        const existing = await prisma.user.findUnique({
          where: { email: user.email.toLowerCase() },
        });

        if (!existing) {
          // Google OAuth without an existing account — create the user shell.
          // They still need a workspace (signup or invite).
          await prisma.user.create({
            data: {
              email: user.email.toLowerCase(),
              name: user.name,
              image: user.image,
              emailVerified: new Date(),
            },
          });
        }
      }
      return true;
    },
    async jwt({ token, user, trigger }) {
      if (user?.id) {
        token.sub = user.id;
      }

      if (token.sub && (user || trigger === "update" || !token.workspaceId)) {
        const claims = await workspaceClaims(token.sub);
        token.workspaceId = claims.workspaceId;
        token.workspaceName = claims.workspaceName;
        token.workspaceRole = claims.workspaceRole;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.workspaceId = token.workspaceId;
        session.user.workspaceName = token.workspaceName;
        session.user.workspaceRole = token.workspaceRole;
      }
      return session;
    },
  },
};
