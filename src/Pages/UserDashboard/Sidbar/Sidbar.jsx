import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {MenuSidbars } from "./MenuItemSidbar/MenuSidbar";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import { ConsumeCartState } from "Context/CartItemsContext/CartItemsState";

import { IoMdExit } from "react-icons/io";
import { BiEdit } from "react-icons/bi";

const Sidbar = () => {
  const navigate = useNavigate();

  const { userData, setUserData } = ConsumeAuthState();

  const { Clear_Cart } = ConsumeCartState();
  // console.log("dashborad",myobject);
  // console.log("dashborad-sidebar",userData);

  const logOutHandler = () => {
    localStorage.removeItem("user-data");
    localStorage.removeItem("user-token")
    setUserData({});
    Clear_Cart();

    setTimeout(() => {
      navigate("/");
    }, 600);
  };
  return (
    <>
      <div className="flex flex-col	 xl:flex xl:flex-row  xl:justify-around items-center 
      mt-8 lg:my-16 mx-8 bg-white py-4 px-4 rounded-lg 
      dark:bg-[rgb(27,52,77)]  dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]  ">
        <div className="flex flex-col ">
          <div>
            <img src={userData.profile} alt="" className="w-28 rounded-lg" />
          </div>
          <div className="pt-4">
            <h1 className="dark:text-white "> {userData.fullName} </h1>
          </div>
        </div>

        <div className="lg:flex-row lg:items-baseline xl:flex xl:flex-col">
          <Link to="/userdashboard/editprofile" className="text-green-400">
            <BiEdit className="text-[2rem]" />
          </Link>
          <button className="text-red-600 mt-4">
            <IoMdExit className="text-[2rem]" onClick={logOutHandler} />
          </button>
        </div>
      </div>

      <div className=" mt-8 lg:mt-20 mx-8 text-white">
        <ul className=" flex-wrap flex justify-between mb-4 lg:mb-0 lg:block xl:mb-[3rem]">
          {MenuSidbars.map((sidbar, index) => {
            // menu asli
            return (
              <div key={index}>
                <li className="xl:text-lg lg:text-base flex items-center my-4 ">
                  <span className=" pl-3 lg:pl-2">{sidbar.icon}</span>
                  <Link to={sidbar.path} className={sidbar.cName}>
                    {sidbar.name}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidbar;


















