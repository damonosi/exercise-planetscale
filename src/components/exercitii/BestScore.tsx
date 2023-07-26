import { getBestScore } from "@/lib/getData";
import BestDayCard from "./BestDayCard";

const BestScore = async () => {
  const bestScore = await getBestScore();
 
   
  const { date, pushups, abdomens, jumpingJacks, dumbbellLifts, plank, total } =
    bestScore || {
      pushups: 0,
      abdomens: 0,
      jumpingJacks: 0,
      dumbbellLifts: 0,
      plank: 0,
      total: 0,
    };

  return (
    <div>
      <BestDayCard
        date={`${date} `}
        pushups={pushups}
        abdomens={abdomens}
        jumpingJacks={jumpingJacks}
        dumbbellLifts={dumbbellLifts}
        plank={typeof plank === "number" ? plank : plank.toNumber()}
        total={total}
      />
    </div>
  );
};

export default BestScore;
