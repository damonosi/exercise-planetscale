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
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push("/");
  }

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
        redirect: false,
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
  return (
    <div>
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Name</h1>
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
        <div className="mb-4 ">
          <button className="primary-button">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
