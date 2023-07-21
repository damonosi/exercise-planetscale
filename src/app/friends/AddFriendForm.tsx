"use client";

import getError from "@/lib/getError";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type FieldValues = {
  name: string;
};
const AddFriendForm = () => {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<FieldValues>();

  const submitHandler = async ({ name }: FieldValues) => {
    try {
      await axios.post("/api/friends/add-new-friend", { name });
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div className="flex flex-col justify-center items-center shadow-xl gap-6 shadow-red-700 px-6 pb-6 w-fit">
      <span className="shadow-xl shadow-red-700">Add new friend</span>
      <form
        className="flex flex-col mx-auto max-w-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        {" "}
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
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
