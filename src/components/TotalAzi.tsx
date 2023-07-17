import { getTodayCount } from "@/lib/getData";

const TotalAzi = async () => {
  const today = await getTodayCount();
  if (!today) {
    return <h1>no data</h1>;
  }
  const { pushups, abdomens, jumpingJacks, dumbbellLifts } = today;

  const total = pushups + abdomens + jumpingJacks + dumbbellLifts;
  return (
    <div
      className={` ${total >= 0 && 50 >= total && "bg-red-300"} ${
        total > 50 && total <= 100 && "bg-yellow-300"
      }  ${total > 100 && total <= 200 && "bg-green-300"} ${
        total > 200 && "bg-green-700"
      } flex flex-col items-start justify-between pb-2 gap-5 px-4 border border-black`}
    >
      <h1 className="border-b-2 py-2 px-4 rounded-b-xl border-black border-l-2 border-r-2">
        Exercitii facute azi
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
  );
};

export default TotalAzi;
