"use client";
import { fetcher } from "@/lib/fetcher";
import { useAppSelector } from "@/redux/hooks";
import useSWR from "swr";
import CategorySelector from "./CategorySelector";
import { Stopwatch } from "./Stopwatch";
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
    <section className="flex flex-col justify-between w-96 gap-6">
      <CategorySelector />
      <div className="flex flex-col h-[419px] overflow-scroll">
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
            }) => {
              const percentComplete = (time / timeToBeat) * 100;
              const percentCompleted = `${percentComplete.toFixed(0)}%`;

              console.log(percentCompleted);
              return (
                <div
                  className="group flex w-full justify-between relative"
                  key={name}
                >
                  <div
                    className={`absolute bg-green-600 left-0 right-0 top-0 bottom-0 flex z-50 transition-all -translate-x-full group-hover:-translate-x-[${percentCompleted}]  opacity-50`}
                    id="mask"
                  />
                  <span
                    className="w-3/5 flex 
        items-center border  border-r-0   justify-start relative font-extrabold text-gri font-[800 ]  border-[3px] pl-4  border-[#D35400]  py-4 "
                  >
                    {name}
                  </span>
                  <span
                    className="w-1/3  flex 
        items-center border text-sm  border-x-0  justify-start relative font-extrabold text-gri font-[800 ]  border-[3px] pl-4  border-[#D35400] w-1/3  py-4 "
                  >
                    {time} / {timeToBeat} minutes
                  </span>
                  <Stopwatch name={name} />
                </div>
              );
            },
          )}
      </div>
    </section>
  );
};

export default ExerciseCategory;
