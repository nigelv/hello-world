import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(128),
  workspaceName: z.string().trim().min(1, "Workspace name is required").max(100),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export const inviteSchema = z.object({
  email: z.string().trim().email("Valid email is required").max(255),
  role: z.enum(["ADMIN", "MEMBER"]).optional().default("MEMBER"),
});

export const acceptInviteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100).optional(),
  password: z.string().min(8, "Password must be at least 8 characters").max(128).optional(),
});

export const updateWorkspaceSchema = z.object({
  name: z.string().trim().min(1).max(100),
});
