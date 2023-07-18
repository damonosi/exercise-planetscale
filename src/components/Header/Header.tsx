"use client";

import Link from "next/link";
import DropdownUser from "./DropdownUser";
const Header = () => {
  return (
    <header className="w-full dark:bg-[#003249] fixed flex z-40 justify-between border border-b-black items-center h-14  px-16">
      <Link href="/">
        <h1 className="text-[#89998A]">Exercise Tracker</h1>
      </Link>{" "}
      <div className="flex gap-4">
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
