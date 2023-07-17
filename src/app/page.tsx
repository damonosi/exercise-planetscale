import AdaugaExercitii from "@/components/AdaugaExercitii";
import ExerciseHistory from "@/components/ExerciseHistory";
import ExercitiiTotaleComponent from "@/components/ExercitiiTotale";
import TotalAzi from "@/components/TotalAzi";
import YoutubeComponent from "@/components/youtube/YoutubeComponent";

export default async function Home() {
  return (
    <div className="flex flex-col mx-auto items-center gap-5 justify-center pt-8 ">
      <div className="flex gap-12">
        <ExercitiiTotaleComponent />
        <YoutubeComponent />
      </div>
      <div className="flex">
        <AdaugaExercitii />
        <TotalAzi />
      </div>
      <ExerciseHistory />
    </div>
  );
}
