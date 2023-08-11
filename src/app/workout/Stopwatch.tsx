"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface IStopwatch {
  name: string;
}

export const Stopwatch = ({ name }: IStopwatch) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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
  const handleClick = () => {
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
  };
  return (
    <div
      className={`flex  w-1/3 flex-col items-center gap-2 border-l-0 px-0 py-4 text-sm  font-extrabold uppercase text-gri`}
    >
      <span
        className={`absolute right-0 top-0 -z-10  h-full w-full origin-top-right translate-x-full bg-yellow-700 bg-opacity-50
         transition-transform duration-500 ${isRunning ? "  -translate-x-0  " : ""}  `}
        id="running-mask"
      />
      <button onClick={handleClick} className="rounded-full border  transition-all  ">
        {isRunning ? (
          <span className="flex h-8 w-full items-center justify-center rounded-full px-4 py-2 hover:bg-red-600">
            Stop
          </span>
        ) : (
          <span className="flex h-8 w-full items-center justify-center rounded-full px-4 py-2 hover:bg-green-600">
            Start
          </span>
        )}
      </button>
      <span className={` text-sm   ${!isRunning ? "hidden" : "flex"}`}>{formatTime()}</span>
    </div>
  );
};
