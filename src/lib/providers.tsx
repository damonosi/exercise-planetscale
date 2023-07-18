"use client";

import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
  return (
    <SessionProvider>
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
