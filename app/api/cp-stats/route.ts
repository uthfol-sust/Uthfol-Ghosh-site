// app/api/cp-stats/route.ts
import { NextResponse } from "next/server";
import { getAllCpStats } from "@/lib/cpStats";

export const dynamic = "force-dynamic";

export async function GET() {
  const stats = await getAllCpStats();
  return NextResponse.json({ stats, fetchedAt: new Date().toISOString() });
}
