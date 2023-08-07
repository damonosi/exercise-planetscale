import Link from "next/link";

import SignOutButton from "../auth/SignOutButton";

const MenuLink = ({ to }: { to: string }) => (
  <Link
    className=" uppercase w-full hover:bg-portocaliu py-4 px-8"
    href={`/${to}`}
  >
    {to}
  </Link>
);

const MenuUser = ({ open }: { open: boolean }) => {
  return (
    <>
      {open && (
        <div
          className="absolute bg-albastru-inchis bottom-0  z-0 top-full text-gri transition-all  flex flex-col items-center justify-center gap-6 text-center h-fit "
          id="menuUser"
        >
          <MenuLink to="workout" />
          <MenuLink to="history" />
          <MenuLink to="friends" />

          <SignOutButton />
        </div>
      )}
    </>
  );
};

export default MenuUser;
