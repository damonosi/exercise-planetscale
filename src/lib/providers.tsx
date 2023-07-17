"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}

const Providers = ({ children }: IProviders) => {
  return (
    <>
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
    </>
  );
};

export default Providers;
