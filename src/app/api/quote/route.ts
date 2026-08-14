import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(8).max(20),
  email: z.string().trim().max(120).optional(),
  suburb: z.string().trim().min(2).max(80),
  service: z.string().trim().min(2).max(80),
  notes: z.string().trim().max(1000).optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid quote details" }, { status: 400 });
  }

  console.info("[quote-request]", parsed.data);
  return NextResponse.json({ ok: true });
}
