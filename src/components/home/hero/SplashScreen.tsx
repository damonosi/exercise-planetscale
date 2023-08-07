"use client";
import SignInButton from "@/components/auth/SignInButton";
import ButtonGeneral from "@/components/buttons/ButtonGeneral";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
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
      className="flex w-full h-screen-minusHeader relative items-end pb-14"
      id="hero"
    >
      {session?.user && (
        <div className="flex flex-col w-full  ">
          <div className="flex  gap-14 absolute top-1/3 right-0">
            <Link href="/workout">
              <ButtonGeneral className="bg-[#162A2C] text-3xl hover:bg-portocaliu">
                WORKOUT
              </ButtonGeneral>
            </Link>
            <Link href="/history">
              <ButtonGeneral className="bg-[#162A2C] text-3xl hover:bg-portocaliu">
                HISTORY
              </ButtonGeneral>
            </Link>
            <Link href="/friends">
              <ButtonGeneral className="bg-[#162A2C] text-3xl hover:bg-portocaliu">
                FRIENDS
              </ButtonGeneral>
            </Link>
          </div>
          <AnimatedText />
        </div>
      )}
      {!session?.user && (
        <div className="flex flex-col gap-16 ">
          <AnimatedText />
          <SignInButton />{" "}
        </div>
      )}{" "}
    </motion.div>
  );
};

export default SplashScreen;
