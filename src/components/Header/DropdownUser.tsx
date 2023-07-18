"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SignInButton from "../auth/SignInButton";
import MenuUser from "./MenuUser";

const DropdownUser = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return "loading...";
  }
  return (
    <div className="flex items-center justify-center relative">
      {status === "authenticated" ? (
        <button
          className="flex items-center justify-center  w-14 h-14 "
          onClick={() => setOpen(!open)}
        >
          <p className="text-sky-600">{session?.user?.username}</p>
        </button>
      ) : (
        <SignInButton />
      )}
      <MenuUser open={open} />
    </div>
  );
};

export default DropdownUser;
