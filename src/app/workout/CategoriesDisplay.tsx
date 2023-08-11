import { fetcher } from "@/lib/fetcher";
import { useAppSelector } from "@/redux/hooks";
import useSWR from "swr";
import { Stopwatch } from "./Stopwatch";

const CategoriesDisplay = () => {
  const cat = useAppSelector((state) => state.categoryReducer.value);
  const {
    data: today,
    error,
    isLoading,
  } = useSWR("/api/exercise/get-today", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div className="flex flex-col h-[419px] gap-6 overflow-y-scroll">
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
            const percentCompleted = String(percentComplete.toFixed(0));
            return (
              <div
                className="group flex w-full  items-center h-28 justify-between border-[3px] overflow-hidden border-[#D35400] relative rounded-full"
                key={name}
              >
                <div
                  className={`absolute bg-green-600   top-0 bottom-0 flex z-50 transition-all h-full   opacity-50`}
                  id="mask"
                />

                <span
                  className="w-2/5 flex 
        items-center   h-full  justify-start relative font-extrabold text-gri font-[800 ]   pl-4    py-4 "
                >
                  {name}
                </span>
                <span
                  className="w-1/3  flex 
        items-center  text-sm    justify-start relative font-extrabold text-gri font-[800 ]   pl-4   w-1/3  py-4 "
                >
                  {time} / {timeToBeat} minutes
                </span>
                <Stopwatch name={name} />
              </div>
            );
          },
        )}
    </div>
  );
};

export default CategoriesDisplay;
