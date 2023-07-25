"use client";

import getError from "@/utils/getError";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  ButonValidare,
  ContainerButoane,
  ContainerExercitiu,
} from "../ContainereExercitiu";
const Plank = ({ dataAzi }: { dataAzi: string }) => {
  const [plankTime, setPlankTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleClick() {
    try {
      setLoading(true);
      await axios.post("/api/add/planks", { plankTime, dataAzi });
      toast.success("Plank time added");
      setPlankTime(0);
      setLoading(false);
      router.refresh();
    } catch (err) {
      toast.error(getError(err));
    }
  }
  return (
    <ContainerExercitiu className=" border-b-2 ">
      <h2 className="w-28">Plank (seconds)</h2>
      <ContainerButoane>
        <button onClick={() => setPlankTime(plankTime - 5)}>-</button>
        <span className="min-w-[25px] flex items-center justify-center">
          {plankTime}
        </span>
        <button onClick={() => setPlankTime(plankTime + 5)}>+</button>
      </ContainerButoane>
      <ButonValidare
        loading={loading}
        onClick={handleClick}
      />
    </ContainerExercitiu>
  );
};

export default Plank;
