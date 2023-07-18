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
  await updateTotalAbdomene(nrAbdomene, userId);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi, userId: userId },
    data: { abdomens: { increment: nrAbdomene } },
  });

  return NextResponse.json("updated");
}
