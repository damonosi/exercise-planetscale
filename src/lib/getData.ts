import { cache } from "react";
import getTodayDate from "../utils/getDate";
import prisma from "./prisma";

export const GetAllDays = cache(async () => {
  const toateZilele = await prisma.dayOfExercises.findMany({});

  return toateZilele;
});

export const getTotalCount = cache(async () => {
  const totalCount = await prisma.totalExercises.findUnique({
    where: {
      id: 1,
    },
  });

  return totalCount;
});
export const getTodayCount = cache(async () => {
  const today = getTodayDate();

  let todayCount = await prisma.dayOfExercises.findUnique({
    where: { date: today },
  });
  if (!todayCount) {
    await prisma.dayOfExercises.create({
      data: {
        date: today,
        pushups: 0,
        abdomens: 0,
        jumpingJacks: 0,
        dumbbellLifts: 0,
      },
    });
  }

  return todayCount;
});
