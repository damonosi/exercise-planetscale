import { GradientMast } from "@/components/masks/GradientMask";
import HistoryStatistic from "./HistoryStatistic";

const HistoryPage = () => {
  return (
    <div className="flex flex-col  items-start h-screen-minusHeader gap-16  py-7 px-12">
      <GradientMast />
      <span className="flex z-20 w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase">
        History
      </span>

      <HistoryStatistic />
    </div>
  );
};

export default HistoryPage;
