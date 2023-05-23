import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const SidbarItemsAd = ({ MenuItem }) => {
  const [closeBtn, setCloseBtn] = useState(false);

  const handelClose = () => {
    setCloseBtn(!closeBtn);
  };

  return (
    <div className="gap-y-12">
      {/* title asli and icon*/}
      <p onClick={handelClose} key={MenuItem.title} className="subbarTitle">
        <span>{MenuItem.title}</span> 
        {closeBtn ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </p>

      {/* submenus*/}
      <ul
        className={
          closeBtn
            ? "transition-all duration-500 h-auto ease-in-out shadow-lg  bg-[#264067]  rounded-lg"
            : "transition-all  duration-500 h-0 ease-in-out  overflow-hidden "
        }
      >
        {MenuItem.subMenus.map((it ,index) => (
          <li key={index} className="text-white  py-2 px-3">
            <NavLink
              to={`${it.path}`}
              // className="flex items-center"
              className={({ isActive }) =>
                isActive
                  ? " flex items-center bg-[#4a7bc4] transition duration-200 pr-2 rounded p-1"
                  : " flex items-center hover:bg-blue-800 transition duration-200 rounded p-1 hover:pr-2"
              }
            >
              <span className="ml-2">{it.icon}</span>
              {it.titlesub}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidbarItemsAd;
