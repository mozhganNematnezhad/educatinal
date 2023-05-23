import React from "react";
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
import * as shamsi from "shamsi-date-converter";
import HelmetTitle from "components/commen/Helmet/Helmet";
import { FaRegHandSpock } from "react-icons/fa";

const Account = () => {
  const { userData } = ConsumeAuthState();
  // console.log("userData",userData)

  // convert milady to shamsi
  const date = shamsi.gregorianToJalali(userData.registerDate); //[1401, 8, 9]
  // console.log("date",date)
  const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
    date[2] < 10 ? `0${date[2]}` : date[2]
  }`;
  // console.log("finalDate",finalDate);

  return (
    <>
      <HelmetTitle title="   داشبورد کاربری توریتور  " />

      {userData.email &&
       <h1 className="flex text-xl  text-[#333] mx-9 mt-8  dark:text-white">
        <p>{ userData.fullName } </p>
        {" "}
        {" "}
        عزیز ؛ 
        خوش اومدی
        <FaRegHandSpock className="text-yellow-400"/>
          </h1>
        }



      <div
        className="bg-white  shadow-lg mt-16 mx-8 
    border border-solid border-[#ecf0f4] rounded-lg
     dark:bg-[rgb(27,52,77)]
     dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] 
     "
      >
        <div
          className="Da_Header border-b border-solid border-[#eff2f5] py-[10px] 
        dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]  px-8"
        >
          <h3 className="text-[#333] dark:text-white">اطلاعات حساب کاربری</h3>
        </div>

        <div className="Da_Content text-[#686e71] py-8 px-8">
          <div className="grid lg:grid-cols-2">
            <div className="flex text-[14px]">
              <p className=" dark:text-gray-300">
                نام و نام خانوادگی یا نام کاربری:{" "}
              </p>
              <p className="dark:text-white">{userData.fullName}</p>
            </div>

            <div className="flex text-[14px] pt-8 lg:pt-0">
              <p className=" dark:text-gray-300 "> شماره تماس: </p>
              <p className="dark:text-white">{userData.phoneNumber}</p>
            </div>
            <div className="flex pt-8 text-[14px]">
              <p className=" dark:text-gray-300"> ایمیل : </p>
              <p className="dark:text-white">{userData.email}</p>
            </div>

            <div className="flex pt-8 text-[14px]">
              <p className=" dark:text-gray-300"> تاریخ اولین حضور شما : </p>
              <p className="dark:text-white">{finalDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
