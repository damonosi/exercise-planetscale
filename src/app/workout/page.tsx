import TotalAzi from "@/components/exercitii/TotalAzi";
import getTodayDate from "@/utils/getDate";

const WorkoutPage = () => {
  const today = getTodayDate();
  return (
    <div className="flex w-full h-screen-minusHeader items-center justify-center z-20 py-36 ">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-linear"></div>
      <section className="flex items-start w-1/2 h-full z-20">
        <div className="flex flex-col ">
          <span className="flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase">
            WORKOUT
          </span>
          <span className="flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase">
            {today}
          </span>
        </div>
      </section>
      <section className="flex items-end justify-end w-1/2 h-full z-20">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
          saepe, nemo quaerat nesciunt, ipsum ut fugit repellendus voluptate et
          modi veritatis culpa molestiae? Quia recusandae reiciendis, aliquid
          sit mollitia quos adipisci obcaecati molestias, consequuntur veritatis
          praesentium voluptatem, quaerat asperiores reprehenderit eligendi
          similique cum natus ratione rerum. Maxime illo dolor sed commodi
          tempora labore ullam quae non magnam expedita.{" "}
        </span>
        <TotalAzi />
      </section>
    </div>
  );
};

export default WorkoutPage;
