"use client";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { useEffect, useState } from "react";

interface IStopwatch {
  name: string;
}

export const Stopwatch = ({ name }: IStopwatch) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const cat = useAppSelector((state) => state.categoryReducer.value);
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;
  const timeExercised = `${seconds}.${minutes}.${hours}`;
  return (
    <div className="text-sm border-l-0 relative  flex flex-col gap-2 items-center w-1/3 font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-4 py-4 uppercase">
      {" "}
      <button
        onClick={() => {
          setIsRunning(!isRunning);
          if (isRunning) {
            console.log("time exercised", timeExercised);
            axios.post("/api/exercise/add-time-to-exercise", {
              seconds,
              minutes,
              hours,
              name,
            });

            setTime(0);
          }
        }}
        className="border rounded-full p-2"
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <p className=" ">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};
