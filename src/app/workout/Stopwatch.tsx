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
      intervalId = setInterval(() => {
        setTime((timer) => timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);

  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = Math.floor(time / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const seconds = Number(getSeconds);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
  const hours = Number(getHours);
  const formatTime = () => {
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="text-sm border-l-0 relative  flex flex-col  gap-2 items-center w-1/3 font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-0 py-4 uppercase">
      {" "}
      <button
        onClick={() => {
          setIsRunning(!isRunning);
          if (isRunning) {
            axios.post("/api/exercise/add-time-to-exercise", {
              seconds,
              minutes,
              hours,
              name,
            });

            setTime(0);
          }
        }}
        className="border rounded-full  transition-all  "
      >
        {isRunning ? (
          <span className="flex rounded-full w-full py-1 px-4 hover:bg-red-600">
            Stop
          </span>
        ) : (
          <span className="flex rounded-full w-full py-1 px-4 hover:bg-green-600">
            Start
          </span>
        )}
      </button>
      <span className=" text-sm">{formatTime()}</span>
    </div>
  );
};
