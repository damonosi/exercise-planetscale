import SplashScreen from "@/components/home/hero/SplashScreen";

export const revalidate = 0;
export default async function Home() {
  return (
    <div className="flex flex-col  ">
      <SplashScreen />
    </div>
  );
}
