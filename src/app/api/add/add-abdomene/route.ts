import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
interface RequestBody {
  nrAbdomene: number;
  dataAzi: string;
}

async function updateTotalAbdomene(nrAbdomene: number) {
  return await prisma.totalExercises.update({
    where: { id: 1 },
    data: { totalAbdomens: { increment: nrAbdomene } },
  });
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { nrAbdomene, dataAzi } = body;
  console.log(dataAzi);
  console.log(nrAbdomene);
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

  await updateTotalAbdomene(nrAbdomene);
  await prisma.dayOfExercises.update({
    where: { date: dataAzi },
    data: { abdomens: { increment: nrAbdomene } },
  });

  return NextResponse.json("updated");
}
