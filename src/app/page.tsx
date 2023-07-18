import AdaugaExercitii from "@/components/AdaugaExercitii";
import ExercitiiTotaleComponent from "@/components/ExercitiiTotale";
import TotalAzi from "@/components/TotalAzi";
import YoutubeComponent from "@/components/youtube/YoutubeComponent";
import { GoArrowSwitch } from "react-icons/go";
export const revalidate = 0;
export default async function Home() {
  return (
    <div className="flex flex-col mx-auto items-center gap-5 justify-center py-8 ">
      <div className="flex gap-12">
        <YoutubeComponent />
        <ExercitiiTotaleComponent />
      </div>
      <div className="flex items-center">
        <AdaugaExercitii />
        <GoArrowSwitch className="text-6xl" />
        <TotalAzi />
      </div>
    </div>
  );
}
