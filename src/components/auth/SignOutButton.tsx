import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
      className=" uppercase w-full hover:bg-portocaliu py-4 px-8"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
