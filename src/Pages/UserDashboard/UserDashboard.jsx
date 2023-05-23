import React from "react";
import Sidbar from "./Sidbar/Sidbar";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  
  return (
    // xl:h-screen
    <div className=" grid lg:grid-cols-12 ">
      <div className="lg:col-span-3  bg-gradient-to-t from-[#264067] to-[#14b8a6] 
       dark:bg-gradient-to-t dark:from-[#264067] dark:to-bg-gray-900">
        <Sidbar />
      </div>

      
      <div className="lg:col-span-9  ">
        <Outlet />
      </div>

    
    </div>
  );
};

export default UserDashboard;
