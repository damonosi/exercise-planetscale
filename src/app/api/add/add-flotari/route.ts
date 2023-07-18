import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
interface RequestBody {
  nrFlotari: number;
  dataAzi: string;
}

async function updateTotalFlotari(nrFlotari: number, userId: number) {
  return await prisma.totalExercises.update({
    where: { userId: userId },
    data: { totalPushups: { increment: nrFlotari } },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrFlotari, dataAzi } = body;
  if (!nrFlotari) {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      {
        status: 422,
      },
    );
  }
  const session = await getServerSession(authOptions);
  const userId = Number(session?.user?.id);
  await updateTotalFlotari(nrFlotari, userId);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi, userId: userId },
    data: { pushups: { increment: nrFlotari } },
  });

  return new Response(JSON.stringify("nr flotari updatate"));
}
