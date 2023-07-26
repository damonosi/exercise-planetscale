import Legend from "@/app/history/Legend";
import { GetAllDays } from "@/lib/getData";
import { BsCardList } from "react-icons/bs";
import { MdOutlineArrowLeft } from "react-icons/md";
import DayCard from "./DayCard";

const ExerciseHistory = async () => {
  const toateZilele = await GetAllDays();
  if (!toateZilele) {
    return <h1>no data</h1>;
  }
  const reversedDays = toateZilele.reverse();
  const dayCount = toateZilele.length;
  return (
    <div className="flex flex-col w-full px-14 py-4 items-center   ">
      <span className=" py-2 px-4 border-b-0 rounded-t-xl border-black border-t-2 border-l-2 border-r-2">
        {dayCount} days
      </span>
      <div className="flex border  border-black   w-full rounded-lg overflow-x-auto relative">
        <div className="group absolute top-0 left-0 cursor-help z-30 m-4">
          <BsCardList className="text-orange-700  text-3xl " />
          <Legend className="hidden  group-hover:flex bg-[#000204]" />
        </div>
        <div className="flex  px-12  w-full py-16 rounded-lg overflow-x-auto relative ">
          {reversedDays.map(
            (
              {
                date,
                pushups,
                abdomens,
                jumpingJacks,
                dumbbellLifts,
                plank,
                total,
              },
              index,
            ) => {
              return (
                <div
                  key={date}
                  className="flex items-center "
                >
                  <DayCard
                    date={date}
                    pushups={pushups}
                    abdomens={abdomens}
                    jumpingJacks={jumpingJacks}
                    dumbbellLifts={dumbbellLifts}
                    plank={plank.toNumber()}
                    total={total}
                  />
                  {index === reversedDays.length - 1 ? (
                    ""
                  ) : (
                    <MdOutlineArrowLeft className="text-6xl " />
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseHistory;
