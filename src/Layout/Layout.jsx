import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/commen/Navbar/Navbar";
import { useLocation, Outlet } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  // console.log(pathname); // /login

  const hideheaderPath = ["/login", "/siqnup", "/forgetpassword"];

  if (!hideheaderPath.includes(pathname))
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  return <>{<Outlet />}</>;
};

export default Layout;






