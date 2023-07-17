import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface RequestBody {
  nrRidicari: number;
  dataAzi: string;
}

async function updateTotalRidicari(nrRidicari: number) {
  return await prisma.totalExercises.update({
    where: { id: 1 },
    data: { totalDumbbellLifts: { increment: nrRidicari } },
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

  await updateTotalRidicari(nrRidicari);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi },
    data: { dumbbellLifts: { increment: nrRidicari } },
  });

  return new Response(JSON.stringify("gantere updatate"));
}
