import { getDayByUser } from "@/lib/getData";
import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import getTodayDate from "@/utils/getDate";
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
  const todayDate = getTodayDate();
  if (!session) return;
  const userId = session.user.id;

  const today = await getDayByUser();
  if (!today) {
    await prisma.exerciseDay.create({
      data: {
        userId: String(userId),
        date: todayDate,
      },
    });
  } else {
    const existingExercise = await prisma.exercise.findFirst({
      where: {
        name: name,
        dayId: today.id,
      },
    });
    if (existingExercise) {
      return NextResponse.json("Exercise already exists", { status: 201 });
    } else {
      await prisma.exercise.create({
        data: {
          dayId: today.id,
          name: name,
          category: category,
          timeToBeat: Number(timeToBeat),
        },
      });
    }
  }

  return NextResponse.json("Exercise Added", { status: 200 });
}
