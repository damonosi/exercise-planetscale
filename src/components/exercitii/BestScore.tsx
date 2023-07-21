import { getBestScore } from "@/lib/getData";
import DayCard from "./DayCard";

const BestScore = async () => {
  const bestScore = await getBestScore();

  const { pushups, abdomens, jumpingJacks, dumbbellLifts, total } =
    bestScore || {
      pushups: 0,
      abdomens: 0,
      jumpingJacks: 0,
      dumbbellLifts: 0,
      total: 0,
    };
  console.log(bestScore);
  return (
    <div>
      <DayCard
        date="Best day of workout"
        pushups={pushups}
        abdomens={abdomens}
        jumpingJacks={jumpingJacks}
        dumbbellLifts={dumbbellLifts}
        total={total}
      />
    </div>
  );
};

export default BestScore;
