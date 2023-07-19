import work1 from "@/public/hero/workout1.jpg";
import work2 from "@/public/hero/workout2.jpg";
import work3 from "@/public/hero/workout3.jpg";
import work4 from "@/public/hero/workout4.jpg";
import Image from "next/image";
export const revalidate = 0;
export default async function Home() {
  return (
    <div className="flex   ">
      <div
        className="flex w-full "
        id="hero"
      >
        <div className="flex justify-center items-center w-1/3">
          {" "}
          <h1 className="text-3xl">Welcome to your workout tracker</h1>{" "}
        </div>
        <div className="flex w-2/3">
          <div
            className="flex "
            id="img-container"
          >
            <Image
              alt="workout-img-1"
              className="w-1/4"
              src={work1}
            />
            <Image
              alt="workout-img-2"
              className="w-1/4"
              src={work2}
            />
            <Image
              alt="workout-img-3"
              className="w-1/4"
              src={work3}
            />
            <Image
              alt="workout-img-4"
              className="w-1/4"
              src={work4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
