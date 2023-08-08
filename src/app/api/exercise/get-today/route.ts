import { getDayByUser } from "@/lib/getData";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const today = await getDayByUser();
  if (!today) {
    return NextResponse.json("Must be logged in", { status: 201 });
  }
  return NextResponse.json(today, { status: 200 });
}
