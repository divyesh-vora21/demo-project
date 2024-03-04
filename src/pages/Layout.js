import React from "react";
import { Navbar } from "../layout/components/Navbar";
import { Sidebar } from "../layout/components/Sidebar";

export const Layout = ({ children }) => {

  return (
    <div className="container p-0">
      <Sidebar/>
      <div className="content">
        <Navbar/>
        <div className="inner_content">{children}</div>
      </div>
    </div>
  );
};
