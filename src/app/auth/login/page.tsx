"use client";
import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <>
      <section className="bg-black bg-opacity-70 absolute h-screen-minusHeader left-0 right-0 z-40">
        <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
          <div className="md:w-96 lg:w-96  ">
            <LoginForm />
          </div>
        </div>
      </section>
    </>
  );
}
