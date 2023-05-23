import React from "react";
import { ConsumeAuthAdState } from "Context/Admin/AuthAdmin/AuthStateAdmin";
import * as shamsi from "shamsi-date-converter";


const AcountAd = () => {
  const {admin} = ConsumeAuthAdState()
  // console.log("object-AcountAd",object)

  // convert milady to shamsi
  const date = shamsi.gregorianToJalali(admin.registerDate); //[1401, 8, 9]
  // console.log("date",date)
  const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
    date[2] < 10 ? `0${date[2]}` : date[2]
  }`;
  // console.log("finalDate",finalDate);


  return (
    <div className="acountAd m-8 bg-green-50 rounded-lg">
      <div className="HeaderAd">
        <h3>اطلاعات ادمین</h3>
      </div>

      <div className="ContentAd text-[#686e71] py-8 px-8">
        <div className="grid lg:grid-cols-2">
          <div className="flex text-[14px]">
            <p className=" dark:text-gray-300">نام و نام خانوادگی: </p>
            <p className="dark:text-white">{admin.fullName}</p>
          </div>

          <div className="flex text-[14px] pt-8 lg:pt-0">
            <p className=" dark:text-gray-300 "> شماره تماس: </p>
            <p className="dark:text-white">{admin.phoneNumber}</p>
          </div>
          <div className="flex pt-8 text-[14px]">
            <p className=" dark:text-gray-300"> ایمیل : </p>
            <p className="dark:text-white">{admin.email}</p>
          </div>

          <div className="flex pt-8 text-[14px]">
            <p className=" dark:text-gray-300"> شماره ملی: </p>
            <p className="dark:text-white">{admin.nationalId}</p>
          </div>
          <div className="flex pt-8 text-[14px]">
              <p className=" dark:text-gray-300"> تاریخ اولین حضور شما : </p>
              <p className="dark:text-white">{finalDate}</p>
            </div>
          <div className="flex pt-8 text-[14px]">
              <p className=" dark:text-gray-300"> تاریخ  تولد : </p>
              <p className="dark:text-white">{admin.birthDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcountAd;
