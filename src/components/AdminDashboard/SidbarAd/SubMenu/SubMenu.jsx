import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ MenuItem }) => {
  return (
    <div className="TwIN-subMenu">
      <li className="TwIN-navItem ">
        <Link to="">{MenuItem.name}</Link>
      </li>
      <div className="TwIN-subContainer absolute min-w-[12rem] z-[500] rounded-lg  flex flex-col  bg-white text-center mt-8 right-[-4rem] text-black  ">
        <ul className="dark:bg-[rgb(27,52,77)]">
          {MenuItem.subMenus.map((subMenu) => {
            return (
              <li
                key={subMenu.name}
                className="TwIN-subLink  px-4 py-[0.5rem] w-full border-b border-dashed border-[#dfdfdf] flex justify-start items-center text-[#333]
                dark:text-white
                "
              >
                <span className="pl-3">{subMenu.icon}</span>
                <Link to={subMenu.path} className="text-[14px]">
                  {subMenu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
