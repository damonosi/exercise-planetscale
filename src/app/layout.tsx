import Header from "@/components/Header/Header";
import Providers from "@/lib/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exercise Tracker",
  description:
    "Track your workout . Made with nextjs tailwindcss, planetscale, prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex bg-[#000814] text-[#9EA3B0] flex-col">
            <Header />
            <div className="mt-14"> {children} </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
