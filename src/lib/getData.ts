import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { cache } from "react";
import getTodayDate from "../utils/getDate";
import prisma from "./prisma";
export async function getUserId() {
  const session = await getServerSession(authOptions);
  const userId = Number(session?.user?.id);
  if (!userId) {
    return;
  }
  return userId;
}

export const GetAllDays = cache(async () => {
  const userId = await getUserId();
  if (!userId) {
    return;
  }
  const toateZilele = await prisma.dayOfExercises.findMany({
    where: { userId: userId },
  });

  return toateZilele;
});

export const getTotalCount = cache(async () => {
  const userId = await getUserId();
  if (!userId) {
    return;
  }
  const totalCount = await prisma.totalExercises.findFirst({
    where: {
      id: userId,
    },
  });

  return totalCount;
});
export const getBestScore = cache(async () => {
  const userId = await getUserId();
  if (!userId) {
    return;
  }
  const bestScore = await prisma.dayOfExercises.findFirst({
    take: 1,
    where: {
      userId: userId,
    },
    orderBy: {
      total: "desc",
    },
  });

  return bestScore;
});
export const getTodayCount = cache(async () => {
  const today = getTodayDate();
  const userId = await getUserId();
  if (!userId) {
    return;
  }
  let todayCount = await prisma.dayOfExercises.findFirst({
    where: { date: today, userId: userId },
  });

  return todayCount;
});
export const GetFriendsData = cache(async () => {
  const userId = await getUserId();
  if (!userId) {
    return;
  }
  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      friends: true,
    },
  });
  const friends = user?.friends;

  return friends;
});