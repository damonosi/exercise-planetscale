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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main> {children}</main>
        </Providers>
      </body>
    </html>
  );
}
