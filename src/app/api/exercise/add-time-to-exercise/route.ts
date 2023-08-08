import { getDayByUser } from "@/lib/getData";
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
  const today = await getDayByUser();

  if (!today) {
    return;
  }

  const exerciseToUpdate = today.exercises.filter(({ name }) =>
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
