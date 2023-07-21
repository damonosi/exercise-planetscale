import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

interface RequestBody {
  nrRidicari: number;
  dataAzi: string;
}

async function updateTotalRidicari(nrRidicari: number, userId: number) {
  return await prisma.totalExercises.update({
    where: { userId: userId },
    data: {
      totalDumbbellLifts: { increment: nrRidicari },
      total: { increment: nrRidicari },
    },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrRidicari, dataAzi } = body;
  if (!nrRidicari) {
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
        pushups: 0,
        abdomens: 0,
        jumpingJacks: 0,
        dumbbellLifts: nrRidicari,
        userId: userId,
      },
    });
    await updateTotalRidicari(nrRidicari, userId);
  } else {
    await updateTotalRidicari(nrRidicari, userId);
    await prisma.dayOfExercises.updateMany({
      where: { date: dataAzi, userId: userId },
      data: {
        dumbbellLifts: { increment: nrRidicari },
        total: { increment: nrRidicari },
      },
    });
  }

  return new Response(JSON.stringify("gantere updatate"));
}
