import AdaugaExercitii from "@/components/exercitii/AdaugaExercitii";
import TotalAzi from "@/components/exercitii/TotalAzi";
import { GoArrowSwitch } from "react-icons/go";

const WorkoutPage = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <div className="flex items-center">
        <AdaugaExercitii />
        <GoArrowSwitch className="text-4xl text-red-200/20" />
        <TotalAzi />
      </div>
    </div>
  );
};

export default WorkoutPage;
