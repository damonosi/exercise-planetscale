"use client";
import SignInButton from "@/components/auth/SignInButton";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
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
      className="flex flex-col  leading-normal font-bold  uppercase  items-start text-[#E4E2D6] text-6xl text-start"
    >
      <motion.span
        className="text-start "
        variants={item}
      >
        Welcome
      </motion.span>
      <motion.span
        className="text-start "
        variants={item}
      >
        to your
      </motion.span>
      <motion.span
        className=" text-start "
        variants={item}
      >
        workout tracker
      </motion.span>
    </motion.div>
  );
};

const SplashScreen = () => {
  const { data: session } = useSession();
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
      className="flex w-full h-screen-minusHeader items-end pb-14"
      id="hero"
    >
      <div className="flex flex-col gap-16 ">
        <AnimatedText />
        {!session?.user && <SignInButton />}{" "}
      </div>
    </motion.div>
  );
};

export default SplashScreen;
