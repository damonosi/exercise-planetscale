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
} from "./ContainereExercitiu";
const Gantere = ({ dataAzi }: { dataAzi: string }) => {
  const [nrRidicari, setNrRidicari] = useState(0);

  const router = useRouter();
  async function handleClick() {
    try {
      await axios.post("/api/add/add-gantere", { nrRidicari, dataAzi });
      toast.success("Ridicari adaugate");
      setNrRidicari(0);
      router.refresh();
    } catch (err) {
      toast.error(getError(err));
    }
  }
  return (
    <ContainerExercitiu className="  ">
      <h2 className="w-28">Gantere</h2>
      <ContainerButoane>
        <button onClick={() => setNrRidicari(nrRidicari - 5)}>-</button>
        <span className="min-w-[25px] flex items-center justify-center">
          {nrRidicari}
        </span>
        <button onClick={() => setNrRidicari(nrRidicari + 5)}>+</button>
      </ContainerButoane>
      <ButonValidare onClick={handleClick} />
    </ContainerExercitiu>
  );
};

export default Gantere;
