import { getTodayCount } from "@/lib/getData";

const TotalAzi = async () => {
  const today = await getTodayCount();
  const exercises = today?.exercises;
  console.log(exercises);

  return <></>;
};

export default TotalAzi;
