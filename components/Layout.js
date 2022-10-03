import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Navbar } from "./Narbar";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}
