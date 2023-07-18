import Link from "next/link";

import SignOutButton from "../auth/SignOutButton";

const MenuUser = ({ open }: { open: boolean }) => {
  return (
    <>
      {open && (
        <div
          className="absolute bg-[#003249] bottom-0  top-full text-[#89998A]   flex flex-col items-center justify-center gap-6 pt-6 px-3 pb-3 h-fit "
          id="menuUser"
        >
          <Link href="/history">history</Link>

          <SignOutButton />
        </div>
      )}
    </>
  );
};

export default MenuUser;