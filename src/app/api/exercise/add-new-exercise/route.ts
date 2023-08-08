import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
type RequestBody = {
  name: string;
  timeToBeat: number;
  category: string;
};
export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const session = await getServerSession(authOptions);
  const userId = Number(session?.user?.id);
  const username = session?.user?.username;

  const { name, timeToBeat, category } = body;
  console.log(name, timeToBeat, category);

  return NextResponse.json(name);
}
