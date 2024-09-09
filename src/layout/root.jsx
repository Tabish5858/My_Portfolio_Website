import React from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../components/ui/preloader";
import ScrollToTop from "../components/ui/scrollToTop";

const RootLayout = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Outlet />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;
