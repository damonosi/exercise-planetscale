"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsBoxArrowDown } from "react-icons/bs";
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
          <span className="flex gap-2 text-sky-600 items-center">
            <p className="">{session?.user?.username} </p>
            <BsBoxArrowDown className="group-active:scale-90 group-hover:scale-95" />
          </span>{" "}
        </button>
      ) : null}
      <MenuUser open={open} />
    </div>
  );
};

export default DropdownUser;
