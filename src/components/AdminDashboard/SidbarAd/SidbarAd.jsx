import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import components
import { MenuItemsAd } from "../Data/Data";
import SidbarItemsAd from "./SidbarItemsAd/SidbarItemsAd";

// import icon
import { AiOutlineCloseCircle } from "react-icons/ai";

const SidbarAd = ({ setShowMenu,showMenu }) => {
  // console.log("setShowMenu-1",setShowMenu)

  const [dark, setDark] = useState(false);
  return (
    <>
    
        {/* {dark && (
          <div
            className="mx-auto fixed top-0 right-0 bg-black/70 
            flex justify-center items-center w-full h-full 
            z-[90] lg:hidden"
            onClick={() => setDark(!dark)}
          ></div>
        ) 
} */}
        <div className="sidbarAd h-full fixed top-0 right-0 z-[100] w-[300px] lg:w-full lg:relative  lg:block  ">
          {/* logo-admin */}
          <div className=" flex justify-between  border-b border-teal-500 pb-4 py-8 px-4">
            <NavLink to={"/"}>
              <img
                src={require("../../../Assets/images/Admin/Touritor/white-logo.png")}
                className=" w-28 text-white"
                alt=""
              />
            </NavLink>

            <button
             onClick={() => setShowMenu(false)}
              className=" ml-1  text-2xl  text-white/80 hover:text-white/100"
            >
              <AiOutlineCloseCircle />
            </button>
            
          </div>

          {/* link page asli  */}
          <ul className="flex  flex-col  text-white mx-3 mt-4">
            {MenuItemsAd.map((MenuItem, index) => {
              // menu asli title page
              return (
                <div key={index}>
                  <li>
                    <SidbarItemsAd MenuItem={MenuItem} />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
   
    </>
  );
};

export default SidbarAd;








