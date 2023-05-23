import React from "react";

import "./Email.css";

const Email = () => {
  return (
    <div className="absolute z-20 left-0 w-full ">
      <div className="Ea-mail bg-[#0eb582] 
      mx-4 mt-[-7rem] md:mx-auto md:mt-[-4rem] md:w-max  rounded-lg py-[2rem] md:px-[10rem] lg:px-8 xl:px-[10rem]	
      dark:bg-[#153353]
      ">
        <div className="grid lg:grid-cols-2  items-center">
          <div className="">
            <h2 className="text-white md:text-2xl text-center md:text-right">برای پیوستن به ما ایمیل خود را وارد کنید</h2>
          </div>
          <div className="Ea-form md:relative mt-4">
            <form className=" flex flex-col justify-center items-center  md:text-end">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="text-black rounded-[1.5rem] border-0 outline-0 px-8 md:px-16 py-4"
              />
              <button className="bg-[#273c66] mt-4 md:mt-0 text-white rounded-[1.5rem] py-[0.5rem] px-8 md:px-5 md:absolute md:left-[3rem] md:top-[0.5rem]">اشتراک</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;



// lg:gap-x-[5rem] xl:gap-x-[16rem]