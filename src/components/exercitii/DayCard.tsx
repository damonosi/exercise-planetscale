interface IDayCard {
  date: string;
  total: number;
  pushups: number;
  abdomens: number;
  jumpingJacks: number;
  dumbbellLifts: number;
  plank: number;
}

const DayCard = ({
  date,
  total,
  pushups,
  abdomens,
  jumpingJacks,
  dumbbellLifts,
  plank,
}: IDayCard) => {
  return (
    <div
      className={`${total >= 0 && 50 >= total && "shadow-red-300"} ${
        total > 50 && total <= 100 && "shadow-yellow-300"
      }  ${total > 100 && total <= 200 && "shadow-green-300"} ${
        total > 200 && "shadow-green-700"
      } shadow-lg flex flex-col items-center pb-2 md:w-64 rounded-lg gap-5 px-4`}
    >
      <h1 className="border-b-2 py-2 px-4 rounded-b-xl border-black border-l-2 border-r-2">
        {date}
      </h1>
      <span className="flex  justify-between w-full">
        <p>pushups</p>
        <p>{pushups}</p>
      </span>
      <span className="flex justify-between  w-full">
        <p>abdominal </p>
        <p>{abdomens}</p>
      </span>
      <span className="flex justify-between w-full">
        <p>jumping jacks</p>

        <p>{jumpingJacks}</p>
      </span>
      <span className="flex justify-between w-full">
        <p>dumbbell lifts</p>
        <p>{dumbbellLifts}</p>
      </span>
      <span className="flex justify-between w-full">
        <p>plank (minutes)</p>
        <p>{plank}</p>
      </span>

      <span className="flex justify-between w-full border-black border-t-2 pt-2">
        <p>total</p>
        <p>{total}</p>
      </span>
    </div>
  );
};

export default DayCard;
