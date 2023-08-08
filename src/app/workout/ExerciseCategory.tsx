import { getTodayCount } from "@/lib/getData";
import CategorySelector from "./CategorySelector";

const ExerciseCategory = async () => {
  const today = await getTodayCount();
  if (!today) {
    return null;
  }

  return (
    <section className="flex flex-col justify-between w-96 ">
      <CategorySelector />
      {today.exercises
        .filter(({ category }) => category.includes("endurance"))
        .map(({ name, time, timeToBeat }) => (
          <div className="flex w-full justify-between gap-5">
            <span className="w-1/3">{name}</span>
            <span>{time} </span>
            <span>{timeToBeat} minutes</span>
          </div>
        ))}
    </section>
  );
};

export default ExerciseCategory;
