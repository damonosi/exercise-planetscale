"use client";
import { fetcher } from "@/lib/fetcher";
import { useAppSelector } from "@/redux/hooks";
import useSWR from "swr";
import CategorySelector from "./CategorySelector";
const ExerciseCategory = () => {
  const cat = useAppSelector((state) => state.categoryReducer.value);
  const {
    data: today,
    error,
    isLoading,
  } = useSWR("/api/exercise/get-today", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <section className="flex flex-col justify-between w-96 ">
      <CategorySelector />
      {today.exercises
        .filter(({ category }: { category: string }) =>
          category.includes(`${cat}`),
        )
        .map(
          ({
            name,
            time,
            timeToBeat,
          }: {
            name: string;
            time: number;
            timeToBeat: number;
          }) => (
            <div className="flex w-full justify-between gap-5">
              <span className="w-1/3">{name}</span>
              <span>{time} </span>
              <span>{timeToBeat} minutes</span>
            </div>
          ),
        )}
    </section>
  );
};

export default ExerciseCategory;
