import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
interface RequestBody {
  nrSarituri: number;
  dataAzi: string;
}

async function updateTotalSarituri(nrSarituri: number) {
  return await prisma.totalExercises.update({
    where: { id: 1 },
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

  await updateTotalSarituri(nrSarituri);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi },
    data: { jumpingJacks: { increment: nrSarituri } },
  });

  return new Response(JSON.stringify("sarituri updatate"));
}
