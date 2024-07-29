import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
    <NavBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
