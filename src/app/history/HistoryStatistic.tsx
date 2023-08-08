import ButtonGeneral from "@/components/buttons/ButtonGeneral";

const HistoryStatistic = () => {
  return (
    <section className="flex w-full z-20 ">
      <div className="flex">
        <ButtonGeneral>WEEK</ButtonGeneral>
        <ButtonGeneral>MOUNTH</ButtonGeneral>
        <ButtonGeneral>YEAR</ButtonGeneral>
      </div>
    </section>
  );
};

export default HistoryStatistic;
