"use client";
import getError from "@/utils/getError";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FieldValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>();

  const submitHandler = async ({ name, email, password }: FieldValues) => {
    try {
      await axios.post("/api/auth/register", { name, email, password });
      const result = await signIn("credentials", {
        redirect: true,
        email,
        password,
      });

      if (result?.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form
        className="mx-auto shadow-xl shadow-red-700/60 px-6 py-4 max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-4">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            {...register("name", {
              required: "Please enter name",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]/i,
                message: "Please enter valid name",
              },
            })}
            className="w-full"
            id="name"
            autoFocus
          ></input>
          {errors.name && (
            <div className="text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            className="w-full"
            id="email"
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Please enter password",
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            className="w-full"
            id="password"
          ></input>
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Please enter confirm password",
              validate: (value) => value === getValues("password"),
              minLength: { value: 6, message: "password is more than 5 chars" },
            })}
            className="w-full"
          />
          {errors.confirmPassword && (
            <div className="text-red-500 ">
              {errors.confirmPassword.message}
            </div>
          )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <div className="text-red-500 ">Passwords do not match</div>
            )}
        </div>
        <div className="inline-block px-7 text-center py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
          <button className="primary-button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
