import React, { useState } from "react";
import { Link, NavLink ,useNavigate } from "react-router-dom";
// import components
import NavButton from "./NavButton/NavButton";

// import icon
import {BiHomeHeart, BiShoppingBag } from "react-icons/bi";
import { BsChatSquareText, BsSunFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { IoExit, IoNotificationsOutline } from "react-icons/io5";
import { HiMenuAlt3, HiOutlineMenuAlt1 } from "react-icons/hi";

// import img
import icon from "../../../Assets/images/Admin/adminDashImg/avatar.jpg";
import SidbarAd from "./../SidbarAd/SidbarAd";
import { ConsumeAuthAdState } from "Context/Admin/AuthAdmin/AuthStateAdmin";

const NavbarAd = ({ setShowMenu }) => {
  const {admin,setAdmin} = ConsumeAuthAdState()
  // console.log("admin",admin)
  const navigate=useNavigate()

  const [showSidbar, setShowSidbar] = useState(false);


  const logOut=()=>{
    setAdmin({})
    localStorage.removeItem("admin-data")
    navigate("/admindashboard/login")

  }
  return (
    <div
      className="shadow-md bg-white relative py-4 
    dark:bg-Dark-MainBg 
     md:flex md:justify-between md:items-center  "
    >
      <div className="css-rightNav flex flex-wrap md:flex-nowrap ">
        {/*  mobile hambermenu*/}
        <div className=" ">
          <button
            onClick={() => setShowSidbar(!showSidbar)}
            className="flex items-center justify-center text-[2rem] text-[rgb(13,148,136)] m-[0.5rem] lg:hidden"
          >
            <HiMenuAlt3 />
          </button>
        </div>
        <div className="lg:block">
          {showSidbar && (
            <>
            <SidbarAd />
          </>)}
        </div>

        {/* admin name */}
        <Link to="/admindashboard/acount">
          <div className="mr-5 flex items-center ml-5 text-gray-500 cursor-pointer hover:text-teal-600">
            <img
              src={admin.profile}
              className=" w-11 h-11 rounded-full border-2  border-teal-400 "
              alt="admib"
            />

            <span className=" mr-2 pt-2"> {admin.fullName} </span>
            <span className=" pt-2">
              {" "}
              <FaAngleDown />
            </span>
          </div>
        </Link>
        {/* rightNav */}
        <div className="navButton hidden md:flex">
          <NavButton icon={<BiShoppingBag />} color="rgb(13 148 136 ) " />
          <NavButton
            icon={<BsChatSquareText />}
            color="rgb(13 148 136 ) "
            dotColor="rgb(252, 102, 92)"
            customClass={"right-2 top-2"}
          />
          <NavButton
            icon={<IoNotificationsOutline />}
            color="rgb(13 148 136 ) "
            dotColor="rgb(254, 201, 15)"
            customClass={"right-4 top-3"}
          />
        </div>
      </div>
      {/* leftnav */}
      <div className="css-leftNav flex gap-2 items-center flex-row-reverse  pl-2 md:pl-0">
        <div onClick={() => setShowMenu((prev) => !prev)} className=" hidden lg:block">
          <NavButton icon={<HiOutlineMenuAlt1 />} color="rgb(13 148 136 )" />
        </div>

        <div className="text-2xl text-teal-600 cursor-pointer">
          <BsSunFill />
        </div>

        <NavLink to={"/"}>
          <BiHomeHeart className="text-2xl text-teal-600 cursor-pointer ml-3" />
        </NavLink>

        <div  onClick={logOut}>
          <IoExit className="text-2xl text-teal-600 cursor-pointer ml-3" />
        </div>
      </div>
    </div>
  );
};

export default NavbarAd;
