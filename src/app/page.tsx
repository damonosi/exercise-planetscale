import SplashScreen from "@/components/home/hero/SplashScreen";

export const revalidate = 0;
export default async function Home() {
  return (
    <div className="flex flex-col  ">
      <SplashScreen />
      <section
        className=""
        id="explicatie1"
      >
        <h2>Workout</h2>
      </section>
      <div
        className=""
        id="explicatie1"
      >
        <h2>History</h2>
      </div>
      <div
        className=""
        id="explicatie1"
      >
        <h2>Friends</h2>
      </div>
    </div>
  );
}
