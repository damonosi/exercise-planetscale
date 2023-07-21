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
    data: {
      totalPushups: { increment: nrFlotari },
      total: { increment: nrFlotari },
    },
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

  const today = await prisma.dayOfExercises.findFirst({
    where: { date: dataAzi, userId: userId },
  });
  if (!today) {
    await prisma.dayOfExercises.create({
      data: {
        date: dataAzi,
        pushups: nrFlotari,
        abdomens: 0,
        jumpingJacks: 0,
        dumbbellLifts: 0,
        userId: userId,
      },
    });
    await updateTotalFlotari(nrFlotari, userId);
  } else {
    await updateTotalFlotari(nrFlotari, userId);
    await prisma.dayOfExercises.updateMany({
      where: { date: dataAzi, userId: userId },
      data: {
        pushups: { increment: nrFlotari },
        total: { increment: nrFlotari },
      },
    });
  }

  return new Response(JSON.stringify("nr flotari updatate"));
}
