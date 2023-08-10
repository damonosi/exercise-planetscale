import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { cache } from "react";
import getTodayDate from "../utils/getDate";
import prisma from "./prisma";
export async function getUserId() {
  const session = await getServerSession(authOptions);
  const userId = String(session?.user?.id);

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
  const toateZilele = await prisma.exerciseDay.findMany({
    where: { userId: userId },
  });

  return toateZilele;
});

export const getDayByUser = cache(async () => {
  const today = getTodayDate();
  const todayDate = getTodayDate();
  const userId = await getUserId();
  if (!userId) {
    return NextResponse.json("Must be logged in");
  }
  let dayByUser = await prisma.exerciseDay.findFirst({
    where: { userId: userId, date: today },
    include: {
      exercises: true,
    },
  });
  if (!dayByUser) {
    let dayByUser = await prisma.exerciseDay.create({
      data: {
        userId: String(userId),
        date: todayDate,
      },
      include: {
        exercises: true,
      },
    });
    return dayByUser;
  } else {
    return dayByUser;
  }
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