import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
type RequestBody = {
  name: string;
};
export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const session = await getServerSession(authOptions);
  const userId = String(session?.user?.id);
  const username = session?.user?.username;
  const { name } = body;
  async function findFriendId() {
    const friend = await prisma.user.findFirst({
      where: { username: name },
    });
    const friendId = friend?.id;
    return friendId;
  }
  const friendId = await findFriendId();
  if (!friendId) {
    return NextResponse.json(
      {
        message: "Add a valid username",
      },
      {
        status: 422,
      },
    );
  }
  await prisma.user.update({
    where: { username: name },
    data: { friends: { connect: { id: userId } } },
  });

  await prisma.user.update({
    where: { username: username },
    data: { friends: { connect: { id: friendId } } },
  });

  return NextResponse.json("added friend");
}
