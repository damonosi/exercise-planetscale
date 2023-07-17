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
    <section className="flex flex-col items-center gap-7 border  border-black px-4 py-2">
      <h1>Exercitii facute in total</h1>
      <hr className="w-4/5 h-3 bg-black" />

      <div className="grid grid-cols-3 gap-5">
        <span>Exercitii {total}</span>
        <span>Flotari {totalPushups}</span>
        <span>Abdomene {totalAbdomens}</span>
        <span>Sarituri {totalJumpingJacks}</span>
        <span>Gantere {totalDumbbellLifts}</span>
      </div>
    </section>
  );
};

export default ExercitiiTotaleComponent;
