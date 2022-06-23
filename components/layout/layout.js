import React from "react";
import Loader from "../ui/loader";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <>
      {/* <Loader /> */}
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
