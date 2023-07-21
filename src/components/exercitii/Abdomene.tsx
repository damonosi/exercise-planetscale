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

const Abdomene = ({ dataAzi }: { dataAzi: string }) => {
  const [nrAbdomene, setNrAbdomene] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleClick() {
    try {
      setLoading(true);

      await axios.post("/api/add/add-abdomene", { nrAbdomene, dataAzi });
      setNrAbdomene(0);
      setLoading(false);
      router.refresh();
      toast.success("Abdomene adaugate");
    } catch (err) {
      toast.error(getError(err));
    }
  }
  return (
    <ContainerExercitiu className="border-b-2 ">
      <h2 className="w-28">Abdomene</h2>
      <ContainerButoane>
        <button onClick={() => setNrAbdomene(nrAbdomene - 5)}>-</button>
        <span className="min-w-[25px] flex items-center justify-center">
          {nrAbdomene}
        </span>
        <button onClick={() => setNrAbdomene(nrAbdomene + 5)}>+</button>
      </ContainerButoane>
      <ButonValidare
        loading={loading}
        onClick={handleClick}
      />
    </ContainerExercitiu>
  );
};

export default Abdomene;
