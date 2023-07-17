import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
interface RequestBody {
  nrFlotari: number;
  dataAzi: string;
}

async function updateTotalFlotari(nrFlotari: number) {
  return await prisma.totalExercises.update({
    where: { id: 1 },
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

  await updateTotalFlotari(nrFlotari);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi },
    data: { pushups: { increment: nrFlotari } },
  });
  revalidatePath("/");
  return new Response(JSON.stringify("nr flotari updatate"));
}
