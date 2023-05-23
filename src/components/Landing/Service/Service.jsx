import React from "react";
import student from "Assets/images/Service/1.svg";
import { Data } from "../Service/Data/Data";

const Service = () => {
  return (
    <>
      <div className="container mx-auto mt-[3rem] lg:mt-16 xl:mt-28">
        <div className="flex items-center relative">
          <div className="relative right-8">
            <img src={student} alt="" className="w-32" />
          </div>
          <div className="absolute right-[8rem]">
            <h2 className="text-[19px]  text-[#333] dark:text-white">چهار گام موفقیت</h2>
          </div>
        </div>

        <div className="md:flex md:justify-center lg:block">
          <div className="Se_boxWrapper flex-col  flex md:grid grid-cols-2  lg:flex lg:flex-row  justify-evenly items-center gap-8 lg:gap-0   mt-8  ">
            {Data.map((item) => {
              return (
                <div className="Se_box " key={item.id}>
                  <div className="Se_img relative z-[48px] hidden md:block ">
                    <img
                      src={item.img}
                      alt=""
                      className="opacity-100 duration-[0.2s] "
                    />
                  </div>
                  <div className="Se_boxHover 
                                  bg-gradient-to-l from-[#fbfbfb] to-[#fff] 
                                  dark:bg-gradient-to-l dark:from-[#001E3C] dark:to-[#001E3C] 
                                  mt-[-3rem]  absolute  text-center
                                 w-[36%]  sm:w-[30%]  md:w-[22%] lg:w-[18%] xl:w-[12%] lg:p-[0.7rem] z-50">
                    <p className="text-[0.8rem]  xl:text-justify  text-[#333] dark:text-white ">
                      {item.dec}
                    </p>
                  </div>

                  <p className=" text-base xl:text-[20px] text-[#0eb582] mt-12 pt-12 md:pt-0 ">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
