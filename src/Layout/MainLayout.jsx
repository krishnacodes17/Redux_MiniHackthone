import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div>
      <div className="sticky top-0 z-90 ">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
