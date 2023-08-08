"use client";

import getError from "@/lib/getError";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { categoryOptions } from "./exerciseTypesByCategory";
type FieldValues = {
  name: string;
  timeToBeat: number;
  category: string;
};

const NewExerciseForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const submitHandler = async ({ name, timeToBeat, category }: FieldValues) => {
    try {
      const res = await axios.post("/api/exercise/add-new-exercise", {
        name,
        timeToBeat,
        category,
      });

      if (res.status === 201) {
        toast.warn(res.data);
      } else {
        toast.success(res.data);
      }
      reset();
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const recastedOptions: any = categoryOptions;
  return (
    <div className="flex flex-col w-full z-20">
      <span
        className="flex 
        items-center border  border-x-0 w-fit  justify-between relative font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-b-0 px-5 rounded-l-xl rounded-r-xl  border-[#D35400]  pb-8 pt-4  uppercase"
      >
        add new exercise
      </span>
      <div className="flex items-center border  border-b-0 w-full  py-8 justify-between relative font-extrabold text-gri font-[800 ] text-3xl border-[3px] pl-4  border-[#D35400]  py-4 uppercase">
        <span className="w-1/3">category</span>
        <span className="w-1/3">exercise name</span>
        <div className="w-1/3 flex flex-col">
          <span>target </span> <span className="text-xl">(minutes)</span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex 
        items-center border  border-r-0 w-full  justify-start relative font-extrabold text-gri font-[800 ] text-3xl border-[3px] pl-4  border-[#D35400]  py-4 uppercase"
      >
        <div className="flex w-1/3">
          <select
            id="category"
            defaultValue=""
            {...register("category")}
            className=" bg-black rounded-lg text-2xl flex  w-full mr-16 bg-transparent float-left  hover:cursor-pointer "
          >
            <option
              className="text-black capitalize "
              value=""
            >
              select category
            </option>
            <option
              onClick={() => setSelectedCategory("endurance")}
              value="endurance"
              className="text-black  capitalize"
            >
              endurance
            </option>
            <option
              onClick={() => setSelectedCategory("strength")}
              value="strength"
              className="text-black  capitalize "
            >
              strength
            </option>

            <option
              onClick={() => setSelectedCategory("balance")}
              value="balance"
              className="text-black  capitalize "
            >
              balance
            </option>
            <option
              onClick={() => setSelectedCategory("flexibility")}
              value="flexibility"
              className="text-black capitalize "
            >
              flexibility
            </option>
          </select>
        </div>
        <div className="flex w-1/3  overflow-visible">
          <select
            id="name"
            defaultValue=""
            {...register("name")}
            disabled={selectedCategory === "" ? true : false}
            className={` rounded-lg text-2xl flex  w-full bg-transparent float-left ${
              selectedCategory === "" ? "cursor-not-allowed" : ""
            } `}
          >
            <option
              className="text-black capitalize"
              value=""
            >
              select exercise
            </option>
            {selectedCategory === ""
              ? ""
              : recastedOptions[selectedCategory].map((name: any) => (
                  <option
                    className="text-black capitalize"
                    value={name}
                  >
                    {name}
                  </option>
                ))}
          </select>
        </div>
        <div className="w-1/3 px-6 bg-transparent ">
          <input
            type="text"
            placeholder="10 minutes"
            className="w-3/5 bg-transparent "
            id="timeToBeat"
            {...register("timeToBeat", {
              required: "Please enter time to beat",
            })}
          />
        </div>
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
