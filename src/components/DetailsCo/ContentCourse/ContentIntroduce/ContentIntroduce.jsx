import React from "react";

const ContentIntroduce = ({ detailsCourse }) => {
  return (
    <>
      <div className="flex-col md:flex  md:flex-row md:items-center ">
        <div className="flex  justify-start md:justify-center mr-8 md:mr-0">
          <img
            src={detailsCourse?.lesson?.image}
            alt="react"
            className="rounded-lg w-32"
          />
        </div>

        <div className="text-[#1e2f38] pr-8 mt-8 md:mr-0 dark:text-white">
          <div>
            <h4>{detailsCourse.title}</h4>
          </div>

          <div className="flex items-baseline ">
            <h4 className="text-[15px] pt-4 font-extrabold text-[#686e71] dark:text-white">
              پیش نبازهای این دورره:
            </h4>
            <p className="text-base"> {detailsCourse?.lesson?.lessonName} </p>
          </div>
          {/* <p className="text-base"> 2-آشنایی با جاوا اسکریپت </p> */}
        </div>
      </div>

      <div className="p-4 mt-8 md:mr-0">
        <p className=" text-sm text-[#686e71] leading-7 text-justify dark:text-[rgb(202,207,216)]">
          <span> {detailsCourse?.lesson?.description} </span>
        </p>
      </div>
    </>
  );
};

export default ContentIntroduce;
