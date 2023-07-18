import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
      className="text-red-600"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
