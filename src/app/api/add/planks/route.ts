import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
interface RequestBody {
  plankTime: number;
  dataAzi: string;
}

async function updateTotalPlank(plankTime: number, userId: number) {
  return await prisma.totalExercises.update({
    where: { userId: userId },
    data: {
      totalPlank: { increment: plankTime },
      total: { increment: plankTime },
    },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  let { plankTime, dataAzi } = body;

  if (!plankTime) {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      {
        status: 422,
      },
    );
  }
  let plankTimeMinutes = plankTime / 60;
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
        dumbbellLifts: 0,
        plank: plankTimeMinutes,
        userId: userId,
      },
    });
    await updateTotalPlank(plankTimeMinutes, userId);
  } else {
    await updateTotalPlank(plankTimeMinutes, userId);
    await prisma.dayOfExercises.updateMany({
      where: { date: dataAzi, userId: userId },
      data: {
        plank: { increment: plankTimeMinutes },
        total: { increment: plankTimeMinutes },
      },
    });
  }

  return new Response(JSON.stringify("sarituri updatate"));
}
