import { GetAllDays } from "@/lib/getData";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const ExerciseHistory = async () => {
  const toateZilele = await GetAllDays();
  if (!toateZilele) {
    return <h1>no data</h1>;
  }
  const dayCount = toateZilele.length;
  return (
    <div className="flex flex-col w-full px-14 py-4 items-center border  ">
      <span className=" py-2 px-4 border-b-0 rounded-t-xl border-black border-t-2 border-l-2 border-r-2">
        {dayCount} days
      </span>
      <div className=" flex  border border-black px-4  w-full py-6 rounded-lg">
        {toateZilele.map(
          ({ date, pushups, abdomens, jumpingJacks, dumbbellLifts }) => {
            const total = pushups + abdomens + jumpingJacks + dumbbellLifts;
            return (
              <div
                className="flex items-center "
                key={date}
              >
                <div
                  className={` ${total >= 0 && 50 >= total && "bg-red-300"} ${
                    total > 50 && total <= 100 && "bg-yellow-300"
                  }  ${total > 100 && total <= 200 && "bg-green-300"} ${
                    total > 200 && "bg-green-600"
                  } flex flex-col items-start justify-between pb-2 rounded-lg gap-5 px-4 border border-black`}
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
          },
        )}
      </div>
    </div>
  );
};

export default ExerciseHistory;
