import Link from "next/link";
import DropdownUser from "./DropdownUser";
const Header = () => {
  return (
    <header className="w-full bg-[#001D3D] fixed flex z-40 justify-between border border-[#001D3D] border-b-black items-center h-14  px-16">
      <Link href="/">
        <h1 className="text-white">Exercise Tracker</h1>
      </Link>{" "}
      <div className="flex gap-4">
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
