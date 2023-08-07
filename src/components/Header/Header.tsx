import Link from "next/link";
import Logo from "../logo/Logo";
import DropdownUser from "./DropdownUser";
const Header = () => {
  return (
    <header className="w-full bg-[#162A2C] fixed flex z-20 justify-between border border-[#162A2C] border-b-black items-center h-14  px-80">
      <Link href="/">
        <Logo />
      </Link>{" "}
      <div className="flex gap-4">
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
