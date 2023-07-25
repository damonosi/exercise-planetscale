import getTodayDate from "@/utils/getDate";
import Abdomene from "./types/Abdomene";
import Flotari from "./types/Flotari";
import Gantere from "./types/Gantere";
import Plank from "./types/Plank";
import Sarituri from "./types/Sarituri";

const AdaugaExercitii = () => {
  const dataAzi = getTodayDate();
  return (
    <div className="flex flex-col border pb-4 w-fit border-black items-center gap-4 shadow-lg shadow-red-500/50">
      <span className="border-b-2 py-2 px-4 rounded-b-xl border-black border-l-2 border-r-2">
        {dataAzi}
      </span>

      <Flotari dataAzi={dataAzi} />
      <Abdomene dataAzi={dataAzi} />
      <Sarituri dataAzi={dataAzi} />
      <Gantere dataAzi={dataAzi} />
      <Plank dataAzi={dataAzi} />
    </div>
  );
};

export default AdaugaExercitii;
