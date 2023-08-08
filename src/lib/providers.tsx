"use client";

import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface IProviders {
  children: JSX.Element | JSX.Element[];
  session: any;
}

const Providers = ({ children, session }: IProviders) => {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
};

export default Providers;
