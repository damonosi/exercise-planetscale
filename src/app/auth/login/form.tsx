"use client";

import ButtonGeneral from "@/components/buttons/ButtonGeneral";
import getError from "@/lib/getError";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type FieldValues = {
  username: string;

  password: string;
};
export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<FieldValues>();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const submitHandler = async ({ username, password }: FieldValues) => {
    try {
      setLoading(true);

      const result = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
        callbackUrl,
      });

      setLoading(false);

      if (result?.error) {
        toast.error("Wrong Credentials");
      } else {
        router.push("/");
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const input_style =
    " block w-full px-4 py-5 border-[3px] bg-transparent  border-[#D35400] text-sm font-normal text-gray-700   rounded transition ease-in-out m-0 text-gri focus:outline-none focus:ring-2 focus:ring-[#D35400]";

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          {...register("username", {
            required: "Please enter  username",
          })}
          className={`${input_style}  `}
        />

        {errors.username && (
          <div className="text-red-500">{errors.username.message}</div>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Please enter password",
          })}
          className={`${input_style}`}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="flex w-full gap-8 justify-between">
        <ButtonGeneral
          type="submit"
          style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
          disabled={loading}
          className="text-xl"
        >
          {loading ? "loading..." : "Sign In"}
        </ButtonGeneral>
        <Link href="/auth/register">
          <ButtonGeneral className="text-xl">Register</ButtonGeneral>
        </Link>
      </div>
    </form>
  );
};
