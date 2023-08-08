"use client";

import getError from "@/lib/getError";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
type FieldValues = {
  name: string;
  timeToBeat: number;
  category: string;
};
const NewExerciseForm = () => {
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm<FieldValues>();

  const submitHandler = async ({ name, timeToBeat, category }: FieldValues) => {
    try {
      await axios.post("/api/exercise/add-new-exercise", {
        name,
        timeToBeat,
        category,
      });
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div className="flex flex-col w-full z-20">
      <span
        className="flex 
        items-center border  border-r-0 w-fit  justify-between relative font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-b-0 px-5 rounded-r-xl  border-[#D35400]  pb-8 pt-4  uppercase"
      >
        add new exercise
      </span>
      <div className="flex items-center border  border-b-0 w-full  py-8 justify-between relative font-extrabold text-gri font-[800 ] text-4xl border-[3px] pl-1  border-[#D35400]  py-4 uppercase">
        <span className="w-1/3">exercise name</span>
        <div className="w-1/3 flex flex-col">
          <span>time to beat </span> <span className="text-xl">(minutes)</span>
        </div>
        <span className="w-1/3">category</span>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex 
        items-center border  border-r-0 w-full  justify-start relative font-extrabold text-gri font-[800 ] text-3xl border-[3px] pl-1  border-[#D35400]  py-4 uppercase"
      >
        <input
          type="text"
          placeholder="name"
          className="w-1/3  bg-transparent "
          {...register("name", {
            required: "Please enter exercise name",
          })}
        />

        <input
          type="text"
          placeholder="10 mins"
          className="w-1/3  bg-transparent "
          id="timeToBeat"
          {...register("timeToBeat", {
            required: "Please enter time to beat",
          })}
        />

        <select
          id="category"
          defaultValue=""
          {...register("category")}
          className="  rounded-lg  flex  w-fit bg-transparent float-left  focus:text-gray-600"
        >
          <option value="endurance">endurance</option>
          <option value="strength">strength</option>
          <option value="balance">balance</option>
          <option value="flexibility">flexibility</option>
        </select>
        <button
          className="absolute  right-0 flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] transition-all duration-700 hover:bg-portocaliu px-8 py-4 uppercasepr-2 border-y-0"
          type="submit"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default NewExerciseForm;
