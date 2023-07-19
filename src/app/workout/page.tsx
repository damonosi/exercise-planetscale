import AdaugaExercitii from "@/components/AdaugaExercitii";
import TotalAzi from "@/components/TotalAzi";
import { GoArrowSwitch } from "react-icons/go";

const WorkoutPage = () => {
  return (
    <div className="flex w-full items-center justify-center min-h-screen">
      <div className="flex items-center">
        <AdaugaExercitii />
        <GoArrowSwitch className="text-6xl" />
        <TotalAzi />
      </div>
    </div>
  );
};

export default WorkoutPage;
