import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
interface RequestBody {
  nrSarituri: number;
  dataAzi: string;
}

async function updateTotalSarituri(nrSarituri: number, userId: number) {
  return await prisma.totalExercises.update({
    where: { userId: userId },
    data: {
      totalJumpingJacks: { increment: nrSarituri },
      total: { increment: nrSarituri },
    },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrSarituri, dataAzi } = body;
  if (!nrSarituri) {
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
        jumpingJacks: nrSarituri,
        dumbbellLifts: 0,
        userId: userId,
      },
    });
    await updateTotalSarituri(nrSarituri, userId);
  } else {
    await updateTotalSarituri(nrSarituri, userId);
    await prisma.dayOfExercises.updateMany({
      where: { date: dataAzi, userId: userId },
      data: {
        jumpingJacks: { increment: nrSarituri },
        total: { increment: nrSarituri },
      },
    });
  }

  return new Response(JSON.stringify("sarituri updatate"));
}
