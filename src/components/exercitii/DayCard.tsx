import { MdOutlineArrowRightAlt } from "react-icons/md";

interface IDayCard {
  date: string;
  total: number;
  pushups: number;
  abdomens: number;
  jumpingJacks: number;
  dumbbellLifts: number;
}

const DayCard = ({
  date,
  total,
  pushups,
  abdomens,
  jumpingJacks,
  dumbbellLifts,
}: IDayCard) => {
  return (
    <div
      className="flex items-center "
      key={date}
    >
      <div
        className={`${total >= 0 && 50 >= total && "shadow-red-300"} ${
          total > 50 && total <= 100 && "shadow-yellow-300"
        }  ${total > 100 && total <= 200 && "shadow-green-300"} ${
          total > 200 && "shadow-green-700"
        } shadow-lg flex flex-col items-start justify-between pb-2 rounded-lg gap-5 px-4 border border-black`}
      >
        <h1 className="border-b-2 py-2 px-4 rounded-b-xl border-black border-l-2 border-r-2">
          {date}
        </h1>
        <span className="flex justify-between w-full">
          <p>flotari</p>
          <p>-</p>
          <p>{pushups}</p>
        </span>
        <span className="flex justify-between w-full">
          {" "}
          <p>abdomene</p>
          <p>-</p>
          <p>{abdomens}</p>
        </span>
        <span className="flex justify-between w-full">
          {" "}
          <p>sarituri</p>
          <p>-</p>
          <p>{jumpingJacks}</p>
        </span>
        <span className="flex justify-between w-full">
          {" "}
          <p>gantere</p>
          <p>-</p>
          <p>{dumbbellLifts}</p>
        </span>

        <span className="flex justify-between w-full border-black border-t-2 pt-2">
          {" "}
          <p>total</p>
          <p>-</p>
          <p>{total}</p>
        </span>
      </div>
      <MdOutlineArrowRightAlt className="text-6xl -mx-2" />
    </div>
  );
};

export default DayCard;
