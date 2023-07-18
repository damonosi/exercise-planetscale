import ExerciseHistory from "@/components/ExerciseHistory";
import Legend from "./Legend";

const HistoryPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center gap-5 py-7 px-12">
      <div className="flex w-full items-center justify-center ">
        <h1 className="text-5xl">History of your workouts</h1>
      </div>

      <ExerciseHistory />
      <Legend />
    </div>
  );
};

export default HistoryPage;
