import React from "react";
import Drawer from "./drawer";
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-5 ">
        <div className="col-span-1">
          <Drawer />
        </div>
        <div className="col-span-4 bg-gray-100 h-screen px-4 flex flex-col gap-4 ">
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
}
