import Header from "@/components/Header/Header";
import Providers from "@/lib/providers";
import { authOptions } from "@/utils/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exercise Tracker",
  description:
    "Track your workout . Made with nextjs tailwindcss, planetscale, prisma",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <main className="flex  text-gri flex-col">
            <Image
              alt="site back"
              className="w-full h-screen z-10"
              layout="fill"
              src="/backgr.png"
            />
            <Header />
            <div className="mt-14 z-10 px-56"> {children} </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
