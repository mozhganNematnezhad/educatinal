import NavbarAd from "components/AdminDashboard/NavbarAd/NavbarAd";
import SidbarAd from "components/AdminDashboard/SidbarAd/SidbarAd";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useState } from "react";

const LayoutAdmin = () => {
  const { pathname } = useLocation();
  // console.log("pathname",pathname)

  const hideheaderPath = ["/admindashboard/login", "/admindashboard/register"];

  const [showMenu, setShowMenu] = useState(true);
  // console.log("showMenu",showMenu)

  if (!hideheaderPath.includes(pathname))
    return (
      <div className="grid grid-cols-12">
        {/* sidbar */}
        <div
          className={`${
            showMenu ? " " :  " hidden"
          } 
            lg:col-start-1 lg:col-end-4
            xl:col-start-1 xl:col-end-3 
           transition-all duration-100 
         
          	 `}
        >
         {showMenu &&  <SidbarAd setShowMenu={setShowMenu} showMenu={showMenu} />}
        </div>

        {/* navbar pages */}
        <div
          className={`  ${
            showMenu ? " col-start-1 lg:col-start-4  xl:col-start-3" : " col-start-1 "
          } col-end-13`}
        >
          <div>
            <NavbarAd setShowMenu={setShowMenu}/>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );

  return <Outlet />;
};

export default LayoutAdmin;


