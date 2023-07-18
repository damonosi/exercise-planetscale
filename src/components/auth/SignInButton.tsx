import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      className="text-green-600"
      onClick={() => signIn("credentials", { callbackUrl: "/" })}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
