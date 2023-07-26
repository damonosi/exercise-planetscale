import BestScore from "@/components/exercitii/BestScore";
import ExerciseHistory from "@/components/exercitii/ExerciseHistory";
import ExercitiiTotaleComponent from "@/components/exercitii/ExercitiiTotale";

const HistoryPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center gap-16 py-7 px-12">
      <div className="flex w-full items-center justify-center ">
        <h1 className="text-3xl">History of your workouts</h1>
      </div>
      <div className="flex w-full items-center justify-center gap-16 py-16">
        <ExercitiiTotaleComponent />
        <BestScore />
      </div>

      <ExerciseHistory />
    </div>
  );
};

export default HistoryPage;
