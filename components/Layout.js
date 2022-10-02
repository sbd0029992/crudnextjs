import React from "react";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <h1>Navbar</h1>
      <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
    </React.Fragment>
  );
}
