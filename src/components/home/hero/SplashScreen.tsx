"use client";
import work1 from "@/public/hero/workout1.jpg";
import work2 from "@/public/hero/workout2.jpg";
import work3 from "@/public/hero/workout3.jpg";
import work4 from "@/public/hero/workout4.jpg";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const AnimatedImage = ({
  src,
  xOrigin,
  yOrigin,
  xAnimated,
  className,
}: {
  src: StaticImageData;
  xOrigin?: number;
  xAnimated?: number;
  yOrigin?: number;
  className?: string;
}) => {
  const item = {
    hidden: { x: xOrigin, opacity: 0, scale: 0.5 },
    show: {
      x: xAnimated,
      opacity: 1,
      scale: 1,
      transition: { delay: 1.5, duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={item}
      className="w-1/2"
    >
      <Image
        alt="workout-img-1"
        placeholder="blur"
        className={className}
        src={src}
      />
    </motion.div>
  );
};

const AnimatedText = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0.2, scale: 0.2 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col shadow-xl leading-relaxed font-extrabold w-1/5 mx-6 items-center text-6xl text-start"
    >
      <motion.span
        className=" "
        variants={item}
      >
        Welcome
      </motion.span>
      <motion.span
        className=" "
        variants={item}
      >
        to your
      </motion.span>
      <motion.span
        className="  "
        variants={item}
      >
        workout
      </motion.span>
      <motion.span
        className="  "
        variants={item}
      >
        tracker
      </motion.span>
    </motion.div>
  );
};

const SplashScreen = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex w-full min-h-screen justify-center items-center px-14 "
      id="hero"
    >
      <div className="flex justify-center h-full w-2/5 items-center ">
        <AnimatedImage
          xOrigin={-50}
          xAnimated={0}
          className="rounded-s-full overflow-hidden"
          src={work2}
        />
        <AnimatedImage
          xOrigin={-100}
          xAnimated={0}
          className="rounded-s-full overflow-hidden"
          src={work1}
        />
      </div>
      <AnimatedText />
      <div className="flex justify-center w-2/5 items-center ">
        <AnimatedImage
          xOrigin={50}
          xAnimated={0}
          className="rounded-r-full overflow-hidden"
          src={work4}
        />
        <AnimatedImage
          xOrigin={100}
          xAnimated={0}
          className="rounded-r-full overflow-hidden"
          src={work3}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;
