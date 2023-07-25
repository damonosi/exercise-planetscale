import { GetAllDays } from "@/lib/getData";
import DayCard from "./DayCard";
const ExerciseHistory = async () => {
  const toateZilele = await GetAllDays();
  if (!toateZilele) {
    return <h1>no data</h1>;
  }
  const dayCount = toateZilele.length;
  return (
    <div className="flex flex-col w-full px-14 py-4 items-center   ">
      <span className=" py-2 px-4 border-b-0 rounded-t-xl border-black border-t-2 border-l-2 border-r-2">
        {dayCount} days
      </span>
      <div className=" flex border  border-black px-12  w-full py-16 rounded-lg overflow-x-auto">
        {toateZilele.map(
          ({
            date,
            pushups,
            abdomens,
            jumpingJacks,
            dumbbellLifts,
            plank,
            total,
          }) => {
            return (
              <DayCard
                key={date}
                date={date}
                pushups={pushups}
                abdomens={abdomens}
                jumpingJacks={jumpingJacks}
                dumbbellLifts={dumbbellLifts}
                plank={plank}
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
