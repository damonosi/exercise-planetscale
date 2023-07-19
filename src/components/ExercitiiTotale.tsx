import { getTotalCount } from "@/lib/getData";

const ExercitiiTotaleComponent = async () => {

  const data = await getTotalCount();
  if (!data) {
    return <h1>no data</h1>;
  }
  const { totalPushups, totalAbdomens, totalJumpingJacks, totalDumbbellLifts } =
    data;

  const total =
    totalPushups + totalAbdomens + totalJumpingJacks + totalDumbbellLifts;
  return (
    <section className="flex flex-col items-center gap-7  px-4 py-2">
      <div className="flex flex-col rounded-full px-4 py-2 justify-center items-center shadow-lg shadow-[#FFC300]">
        <h1>Exercitii facute in total</h1>
        <span className="  text-base text-[#FFC300]">{total}</span>
      </div>
      <div className="grid grid-cols-2 gap-5 text-[#FFC300]">
        <span className=" flex justify-center rounded-full px-2 py-2 shadow-xl shadow-[#003566]/50">
          {totalPushups} flotari
        </span>
        <span className=" flex justify-center rounded-full px-2 py-2 shadow-xl shadow-[#003566]/50">
          {totalAbdomens} Abdomene
        </span>
        <span className=" flex justify-center rounded-full px-2 py-2 shadow-xl shadow-[#003566]/50">
          {totalJumpingJacks} Sarituri
        </span>
        <span className=" flex justify-center rounded-full px-2 py-2 shadow-xl shadow-[#003566]/50">
          {totalDumbbellLifts} Gantere
        </span>
      </div>
    </section>
  );
};

export default ExercitiiTotaleComponent;
