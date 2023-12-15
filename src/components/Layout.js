import React from "react";
import Base from "./Base";
import { Outlet } from "react-router-dom";

// Make sure the path is correct
 // Make sure the path is correct



const Layout = () => {
  return (
    <>
      <Base />
      <Outlet/>
    </>
  );
};

export default Layout;