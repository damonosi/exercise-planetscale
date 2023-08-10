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
      className={`text-sm  flex flex-col border-l-0 gap-2 items-center w-1/3 font-extrabold text-gri  px-0 py-4 uppercase`}
    >
      <span
        className={`absolute bg-yellow-700 bg-opacity-50 w-full -z-10 top-0 bottom-0 left-0 translate-x-full transition-transform ${
          isRunning ? " translate-x-0" : ""
        }  `}
        id="running-mask"
      />
      <button
        onClick={handleClick}
        className="border rounded-full  transition-all  "
      >
        {isRunning ? (
          <span className="flex rounded-full h-8 items-center justify-center w-full py-2 px-4 hover:bg-red-600">
            Stop
          </span>
        ) : (
          <span className="flex rounded-full h-8 items-center justify-center w-full py-2 px-4 hover:bg-green-600">
            Start
          </span>
        )}
      </button>
      <span className=" text-sm">{formatTime()}</span>
    </div>
  );
};
