import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import message from "Assets/images/1.svg";

const Ticket = () => {
  return (
    <div className="Da_ticket">
      <div className=" grid grid-cols-12 items-center mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
        <div className="col-span-6 flex">
          <h3 className="text-center pb-4 text-base"> تیکت ها </h3>
        </div>

        <div className="col-span-6 flex justify-end mb-4">
          <button className="text-center text-base text-white bg-[#0eb582] px-4 py-[0.4rem] rounded-lg ">
            <Link to="/userdashboard/addticket">جدید تیکت</Link>
          </button>
        </div>
      </div>

      <div className="rounded-lg  shadow-xl  border border-solid border-[#ecf0f4]  my-8  mx-8">
        <div className="flex flex-col items-center justify-center">
          <img src={message} alt="" />
          <p className="mb-4 text-[#212121] dark:text-white">
            تیکتی یافت نشد
          </p>
        </div>

      </div>
    </div>
  );
};

export default Ticket;
