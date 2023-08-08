import { GradientMast } from "@/components/masks/GradientMask";
import getTodayDate from "@/utils/getDate";
import ExerciseCategory from "./ExerciseCategory";
import NewExerciseForm from "./NewExerciseForm";

const WorkoutPage = () => {
  const today = getTodayDate();
  return (
    <section className="flex flex-col w-full min-h-screen-minusHeader items-center justify-center gap-32 z-20 py-36 ">
      <GradientMast />
      <div className="flex w-full  items-center justify-center z-20 ">
        <section className="flex items-start flex-col w-1/2 h-full gap-28 z-20">
          <div className="flex flex-col gap-3">
            <span className="flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase">
              WORKOUT
            </span>
            <span className="flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase">
              {today}
            </span>
          </div>
          <ExerciseCategory />
        </section>
        <section className="flex items-end justify-end w-1/2 h-full z-20">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corporis
            saepe, nemo quaerat nesciunt, ipsum ut fugit repellendus voluptate
            et modi veritatis culpa molestiae? Quia recusandae reiciendis,
            aliquid sit mollitia quos adipisci obcaecati molestias, consequuntur
            veritatis praesentium voluptatem, quaerat asperiores reprehenderit
            eligendi similique cum natus ratione rerum. Maxime illo dolor sed
            commodi tempora labore ullam quae non magnam expedita.{" "}
          </span>
        </section>
      </div>
      <NewExerciseForm />
    </section>
  );
};

export default WorkoutPage;
