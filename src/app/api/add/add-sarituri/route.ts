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
    data: { totalJumpingJacks: { increment: nrSarituri } },
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
  await updateTotalSarituri(nrSarituri, userId);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi, userId: userId },
    data: { jumpingJacks: { increment: nrSarituri } },
  });

  return new Response(JSON.stringify("sarituri updatate"));
}
