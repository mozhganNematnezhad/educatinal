import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const HeaderPage = ({ btn, title,link}) => {
  const [searchItem, setSearchItem] = useState("");

  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };
  return (
    <div className=" flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center mt-8">
      <button className="bg-[#0eb582] px-4 py-2 rounded-lg text-white ">
        <Link to={link} className="flex items-center flex-row-reverse">
          {btn}
          <AiOutlinePlus />
        </Link>
      </button>

      <div className="py-4">
        <p> {title}</p>
      </div>

      <div className="flex md:justify-end">
        <form className="flex  md:p-4  rounded-[1.5rem] w-full md:w-[80%] dark:bg-[#001E3C]">
          <input
            type="text"
            className="border-2 border-solid border-[#0eb582] text-[#333]
          outline-0 rounded-lg w-full px-[1.3rem] py-[0.4rem]
          dark:bg-[#1B314C] dark:text-white"
            placeholder="دنبال چی میگردی؟؟"
            value={searchItem}
            onChange={inputChangeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default HeaderPage;
