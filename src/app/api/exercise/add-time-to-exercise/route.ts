import { getTodayExercises } from "@/lib/getData";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type RequestBody = {
  seconds: number;
  minutes: number;
  hours: number;
  name: string;
};
export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { seconds, minutes, hours, name: reqName } = body;

  const secondsToMinutes = seconds / 60;
  const hoursToMinutes = hours * 60;
  const timeExercised = secondsToMinutes + minutes + hoursToMinutes;
  const todayExercises = await getTodayExercises();

  if (!todayExercises) {
    return NextResponse.json("NO day made");
  }

  const exerciseToUpdate = todayExercises.filter(({ name }: { name: string }) =>
    name.includes(reqName),
  );
  const todayId = exerciseToUpdate[0].id;

  await prisma.exercise.update({
    where: {
      id: todayId,
    },
    data: {
      time: { increment: timeExercised.toFixed(2) },
    },
  });

  return NextResponse.json(timeExercised, { status: 200 });
}
