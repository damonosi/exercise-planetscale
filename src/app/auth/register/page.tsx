"use client";
import ButtonGeneral from "@/components/buttons/ButtonGeneral";
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
  const input_style =
    " block w-full px-4 py-5 border-[3px] bg-transparent  border-[#D35400] text-sm font-normal text-gray-700   rounded transition ease-in-out m-0 text-gri focus:outline-none focus:ring-2 focus:ring-[#D35400]";

  return (
    <div className="flex absolute h-screen-minusHeader left-0 right-0 bg-black bg-opacity-70 justify-center items-center">
      <form
        className="mx-auto text-gri  px-6 py-4 w-96"
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
            className={`${input_style}  `}
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
            className={`${input_style}  `}
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
              minLength: {
                value: 6,
                message: "password is more than 5 chars",
              },
            })}
            className={`${input_style}  `}
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
              minLength: {
                value: 6,
                message: "password is more than 5 chars",
              },
            })}
            className={`${input_style}  `}
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

        <ButtonGeneral className="flex w-full justify-center items-center">
          Register
        </ButtonGeneral>
      </form>
    </div>
  );
};

export default RegisterScreen;
