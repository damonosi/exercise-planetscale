import prisma from "@/lib/prisma";
import getTodayDate from "@/utils/getDate";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
interface RequestBody {
  name: string;
  email: string;
  password: string;
}
export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { name, email, password } = body;
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      {
        status: 422,
      },
    );
  }
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return NextResponse.json(
      {
        message: "Email is already used",
      },
      {
        status: 422,
      },
    );
  }
  const today = getTodayDate();
  const newUser = await prisma.user.create({
    data: {
      username: name,
      email: email,
      password: await bcrypt.hash(password, 10),
      history: {
        create: {
          totalPushups: 0,
          totalAbdomens: 0,
          totalJumpingJacks: 0,
          totalDumbbellLifts: 0,
        },
      },
      dayExercise: {
        create: [
          {
            date: today,
            pushups: 0,
            abdomens: 0,
            jumpingJacks: 0,
            dumbbellLifts: 0,
          },
        ],
      },
    },
  });

  return new Response(JSON.stringify(newUser));
}
