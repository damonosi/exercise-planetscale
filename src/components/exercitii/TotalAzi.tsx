import { getTodayCount } from "@/lib/getData";

const TotalAzi = async () => {
  const today = await getTodayCount();

  const { pushups, abdomens, jumpingJacks, dumbbellLifts, plank, total } =
    today || {
      pushups: 0,
      abdomens: 0,
      jumpingJacks: 0,
      dumbbellLifts: 0,
      plank: 0,
      total: 0,
    };

  return (
    <div
      className={` ${total >= 0 && 50 >= total && "shadow-red-300"} ${
        total > 50 && total <= 100 && "shadow-yellow-300"
      }  ${total > 100 && total <= 200 && "shadow-green-300"} ${
        total > 200 && "shadow-green-700"
      } shadow-lg flex flex-col items-start justify-between  gap-12 px-14 py-7 border border-black`}
    >
      <span className="flex gap-16 justify-between w-full">
        <p>flotari</p>

        <p>{pushups}</p>
      </span>
      <span className="flex gap-16 justify-between w-full">
        {" "}
        <p>abdomene</p>
        <p>{abdomens}</p>
      </span>
      <span className="flex gap-16 justify-between w-full">
        {" "}
        <p>sarituri</p>
        <p>{jumpingJacks}</p>
      </span>
      <span className="flex gap-16 justify-between w-full">
        {" "}
        <p>gantere</p>
        <p>{dumbbellLifts}</p>
      </span>
      <span className="flex gap-16 justify-between w-full">
        {" "}
        <p>plank (minutes)</p>
        <p>{typeof plank === "number" ? plank : plank.toNumber()}</p>
      </span>

      <span className="flex gap-16 justify-between w-full border-black border-t-2 pt-2">
        {" "}
        <p>total</p>
        <p>{total}</p>
      </span>
    </div>
  );
};

export default TotalAzi;