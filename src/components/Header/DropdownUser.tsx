"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ArrowDown from "../svgs/ArrowDown";
import MenuUser from "./MenuUser";

const DropdownUser = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return "loading...";
  }
  return (
    <div className="flex items-center justify-center relative ">
      {status === "authenticated" ? (
        <button
          className="group flex items-center justify-center  w-14 h-14 "
          onClick={() => setOpen(!open)}
        >
          <span className="flex gap-2 text-sky-600 items-center justify-center">
            <p className="text-gri capitalize">{session?.user?.username} </p>
            <ArrowDown
              className={`w-5 h-5 transition-transform ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        </button>
      ) : null}
      <MenuUser open={open} />
    </div>
  );
};

export default DropdownUser;
