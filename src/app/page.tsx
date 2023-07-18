import AdaugaExercitii from "@/components/AdaugaExercitii";
import ExercitiiTotaleComponent from "@/components/ExercitiiTotale";
import TotalAzi from "@/components/TotalAzi";
import YoutubeComponent from "@/components/youtube/YoutubeComponent";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { GoArrowSwitch } from "react-icons/go";
export const revalidate = 0;
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session?.user) {
    redirect("/auth/login");
  }

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
