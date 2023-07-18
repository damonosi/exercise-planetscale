import { signIn } from "next-auth/react";

const SignInButton = async () => {
  return (
    <button
      className="text-green-600"
      onClick={() => signIn("credentials", { callbackUrl: "/my-projects" })}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
