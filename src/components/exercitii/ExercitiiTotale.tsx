import { getTotalCount } from "@/lib/getData";

const ExercitiiTotaleComponent = async () => {
  const data = await getTotalCount();
  if (!data) {
    return <h1>no data</h1>;
  }
  const {
    totalPushups,
    totalAbdomens,
    totalJumpingJacks,
    totalDumbbellLifts,
    totalPlank,
    total,
  } = data;

  return (
    <section className="flex flex-col items-center gap-7  px-4 py-2 ">
      <div className="flex flex-col rounded-full px-4 py-2 justify-center items-center shadow-lg shadow-[#FFC300]">
        <h1>Total exercises</h1>
        <span className="  text-base text-[#FFC300]">{total}</span>
      </div>
      <div className="grid grid-cols-3 gap-8 text-[#FFC300]">
        <span className=" flex justify-center rounded-full px-4 py-4 text-center  shadow-xl shadow-[#003566]/50">
          pushups <br /> {totalPushups}
        </span>
        <span className=" flex justify-center items-center text-center rounded-full px-4 py-4 shadow-xl shadow-[#003566]/50">
          abdominal crunches <br /> {totalAbdomens}
        </span>
        <span className=" flex justify-center rounded-full px-4 py-4 text-center  shadow-xl shadow-[#003566]/50">
          jumping jacks <br /> {totalJumpingJacks}
        </span>
        <span className=" flex justify-center rounded-full px-4 py-4 text-center  shadow-xl shadow-[#003566]/50">
          dumbbell lifts <br /> {totalDumbbellLifts}
        </span>
        <span className=" flex justify-center rounded-full px-4 py-4 text-center  shadow-xl shadow-[#003566]/50">
          plank (minutes) <br /> {totalPlank}
        </span>
      </div>
    </section>
  );
};

export default ExercitiiTotaleComponent;
