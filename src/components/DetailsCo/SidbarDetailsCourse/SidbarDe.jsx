import React from "react";

import { SiCashapp } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { GrCapacity } from "react-icons/gr";
import { BiBook } from "react-icons/bi";
import { Link } from "react-router-dom";

const SidbarDe = ({ detailsCourse }) => {
  return (
    <div className="Si-CourseSidbar ">
      <div className="Si-Price ">
        <SiCashapp className="text-[#0eb582]" />
        <p className="px-2 text-[1.1rem] dark:text-gray-300"> قیمت این دوره : </p>
        <span className="text-base dark:text-white">{detailsCourse.cost}</span>
        <span className="text-base pr-1 dark:text-white">تومان</span>
      </div>

      <div className="Si-border   dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]"></div>

      <div className="Si-courseInformation">
        <div className="Si-courseTeacher ">
            {/* {detailsCourse && detailsCourse?.teacher?.fullName && ( */}
              <div className="flex items-center  px-[1.5rem] pb-3 ">
                <BsFillPersonFill className="text-[#0eb582]" />
                <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  "> مدرس دوره : </p>
                <span className="text-sm !text-[#1e2f38] dark:!text-white ">
                  {detailsCourse?.teacher?.fullName}
                </span>
              </div>
            {/* // )} */}
        </div>

        <div className="Si-courseVideo ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <FiVideo className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  "> تعداد ویدیوها : </p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">100ویدیو </span>
          </div>
        </div>

        <div className="Si-timeCourse ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <BiTimeFive className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71]  dark:text-gray-300 ">
              {" "}
              مدت زمان دوره ها :{" "}
            </p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">29:45:00 </span>
          </div>
        </div>
        <div className="Si-timeCourse ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <BiTimeFive className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  "> زمان شروع دوره : </p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">
              {detailsCourse.startDate}
            </span>
          </div>
        </div>
        <div className="Si-timeCourse ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <BiTimeFive className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  ">
              {" "}
              زمان پایان دوره :{" "}
            </p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">
              {detailsCourse.endDate}
            </span>
          </div>
        </div>

        <div className="Si-CourseLevel ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <BiBook className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  ">سطح دوره:</p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">پیشرفته </span>
          </div>
        </div>
        <div className="Si-CourseLevel ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <GrCapacity className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  ">ظرفیت دوره:</p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">
              {detailsCourse.capacity}{" "}
            </span>
          </div>
        </div>

        <div className="Si-OnPerforming ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <BiBook className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300   ">وضعیت دوره:</p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white">در حال برگزاری </span>
          </div>
        </div>

        <div className="Si-date ">
          <div className="flex items-center  px-[1.5rem] pb-3">
            <BiBook className="text-[#0eb582]" />
            <p className="px-2  text-sm text-[#686e71] dark:text-gray-300  ">
              تاریخ آخرین بروزرسانی:
            </p>
            <span className="text-sm !text-[#1e2f38] dark:!text-white"> 1401/3/5 </span>
          </div>
        </div>

        <Link to="">
          <div className="Si-btnCourse mx-[3rem] my-8">
            <button>ثبت نام دوره</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidbarDe;
