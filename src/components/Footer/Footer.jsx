import React from "react";
import { useLocation } from "react-router-dom";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import logo from "Assets/images/Touritor/white-logo.png";

const Footer = () => {
  // console.log(useLocation().pathname)

  const {pathname} = useLocation() //{pathname: '/courses', search: '', hash: '', state: null, key: 'qbw2r40e'}
  // console.log(location);  //  /

  const isBottom = ["/"].includes(pathname);
  //  console.log(isBottom);

  return (
    <>
      <div
        className="bg-[#273c66]  relative dark:bg-[#0A1929] border-t-0 
       dark:border-t dark:border-solid dark:border-[#3b82f640] dark:w-[95%] dark:m-auto"
      >
        {/* <div className="container mx-auto"> */}
        <div className={`container mx-auto ${isBottom && "pt-[6rem]"}`}>
          <div className="grid md:grid-cols-5 lg:grid-cols-4 items-center">
            <div className="TwIN-logo col-span-1 p-8 flex justify-center md:justify-start  ">
              <img src={logo} alt="" className="w-[8rem]" />
            </div>
            <div className="md:col-span-3 lg:col-span-2 p-4 md:p-8 flex items-center">
              <AiOutlineCopyrightCircle className=" text-white ml-2" />
              <span className="text-white">
                تمامی حقوق این سایت مربوط به تیم توریتور می باشد
              </span>
            </div>

            <div className="footer-Socails col-span-1 p-4 md:p-8 flex items-center justify-center gap-4">
              <AiOutlineLinkedin className=" w-8 h-8 ft-facebook dark:text-white " />
              <AiOutlineInstagram className=" w-8 h-8 ft-facebook dark:text-white " />
              <BsTelegram className=" w-8 h-8 ft-facebook dark:text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
