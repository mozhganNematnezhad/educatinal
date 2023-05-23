import React from "react";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const EmailPhoneContact = () => {
  return (
    <>
      <div className="C-emailPhone  ">
        <h4 className="text-[#1e2f38] md:text-xl dark:text-[#6e8ea4]">شماره تماس و ایمیل :</h4>
        <div className="flex items-center mt-4 ">
          <BsTelephoneForward className="text-[#0eb582]" />
          <p className="text-[#1e2f38] pr-3 dark:text-white">011-33458760</p>
        </div>
        <div className="flex items-center mt-4 ">
          <AiOutlineMail className="text-[#0eb582]" />
          <p className="text-[#1e2f38] pr-3 dark:text-white ">turitor@gmail.com</p>
        </div>
      </div>

      <div className="address mt-4">
        <div>
          <p className="text-[#1e2f38] dark:text-white">
            ساری - خیابان فرهنگ - فرهنگ 10- آموزشگاه توریتور
          </p>
        </div>
      </div>
    </>
  );
};

export default EmailPhoneContact;
