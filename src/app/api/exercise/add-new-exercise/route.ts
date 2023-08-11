import { getTodayId } from "@/lib/getData";
import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { ExerciseCategory } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
type RequestBody = {
  name: string;
  timeToBeat: number;
  category: ExerciseCategory;
};

export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { name, timeToBeat, category } = body;
  const session = await getServerSession(authOptions);

  if (!session) return;

  const id = await getTodayId();

  const existingExercise = await prisma.exercise.findFirst({
    where: {
      name: name,
      dayId: String(id),
    },
  });
  if (existingExercise) {
    return NextResponse.json("Exercise already exists", { status: 201 });
  } else {
    await prisma.exercise.create({
      data: {
        dayId: String(id),
        name: name,
        category: category,
        timeToBeat: Number(timeToBeat),
      },
    });
    return NextResponse.json("Exercise Added", { status: 200 });
  }
}
