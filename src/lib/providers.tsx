"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProviders {
  children: JSX.Element | JSX.Element[];
  session: any;
}

const Providers = ({ children, session }: IProviders) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer
        theme="light"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </SessionProvider>
  );
};

export default Providers;
