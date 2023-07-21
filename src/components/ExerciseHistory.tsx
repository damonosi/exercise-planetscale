import { GetAllDays } from "@/lib/getData";
import DayCard from "./exercitii/DayCard";
const ExerciseHistory = async () => {
  const toateZilele = await GetAllDays();
  if (!toateZilele) {
    return <h1>no data</h1>;
  }
  const dayCount = toateZilele.length;
  return (
    <div className="flex flex-col w-full px-14 py-4 items-center border  ">
      <span className=" py-2 px-4 border-b-0 rounded-t-xl border-black border-t-2 border-l-2 border-r-2">
        {dayCount} days
      </span>
      <div className=" flex  border border-black px-4  w-full py-6 rounded-lg">
        {toateZilele.map(
          ({ date, pushups, abdomens, jumpingJacks, dumbbellLifts, total }) => {
            return (
              <DayCard
                date={date}
                pushups={pushups}
                abdomens={abdomens}
                jumpingJacks={jumpingJacks}
                dumbbellLifts={dumbbellLifts}
                total={total}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default ExerciseHistory;
