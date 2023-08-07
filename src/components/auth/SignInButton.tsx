import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      className="flex w-fit font-extrabold text-gri font-[800 ] text-3xl border-[3px]  border-[#D35400] px-8 py-4 uppercase"
      onClick={() => signIn("credentials", { callbackUrl: "/" })}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
