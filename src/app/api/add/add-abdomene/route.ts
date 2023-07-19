import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
interface RequestBody {
  nrAbdomene: number;
  dataAzi: string;
}

async function updateTotalAbdomene(nrAbdomene: number, userId: number) {
  return await prisma.totalExercises.update({
    where: { userId: userId },
    data: { totalAbdomens: { increment: nrAbdomene } },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrAbdomene, dataAzi } = body;

  if (!nrAbdomene) {
    return NextResponse.json(
      {
        message: "Nu ai adaugat nr abdomene",
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
        abdomens: nrAbdomene,
        jumpingJacks: 0,
        dumbbellLifts: 0,
        userId: userId,
      },
    });
    await updateTotalAbdomene(nrAbdomene, userId);
  } else {
    await updateTotalAbdomene(nrAbdomene, userId);
    await prisma.dayOfExercises.updateMany({
      where: { date: dataAzi, userId: userId },
      data: { abdomens: { increment: nrAbdomene } },
    });
  }
 

  return NextResponse.json("updated");
}
