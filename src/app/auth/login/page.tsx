"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginForm } from "./form";

export default function LoginPage() {
  const { data: session, status } = useSession();

  const router = useRouter();
  if (status === "loading") {
    return <h1>Loading .....</h1>;
  }
  if (status === "authenticated") {
    return (
      <div className="flex flex-col text-red-600 min-h-screen gap-6 py-7 items-center">
        <h1>You are already logged in</h1>
        <button
          className="border border-yellow-500 px-4 py-2"
          onClick={() => router.push("/")}
        >
          Go to homepage
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
