import ExerciseHistory from "@/components/ExerciseHistory";
import ExercitiiTotaleComponent from "@/components/ExercitiiTotale";
import BestScore from "@/components/exercitii/BestScore";
import Legend from "./Legend";

const HistoryPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center gap-16 py-7 px-12">
      <ExercitiiTotaleComponent />
      <BestScore />
      <div className="flex w-full items-center justify-center ">
        <h1 className="text-3xl">History of your workouts</h1>
      </div>

      <ExerciseHistory />
      <Legend />
    </div>
  );
};

export default HistoryPage;
