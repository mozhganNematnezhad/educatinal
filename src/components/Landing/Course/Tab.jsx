import React, { useState, useEffect } from "react";

import { ConsumeAllDataState } from "Context/AllData/AllData";
import CourseTab from "./CourseTab/CourseTab";

import "../Course/Tab.css";

// import animation
import "aos/dist/aos.css";
import Aos from "aos";

import 'animate.css';


const Tab = () => {
  const { data } = ConsumeAllDataState();

  // state freecourse-- andprice course tab
  const [statusData, setStatusData] = useState(0);
  // console.log("statusData", statusData);

  const filterCourse = () => {
    // freecourse
    if (statusData === 0) {
      const freeCourse = data.course.filter((item) => item.cost === 0);
      // console.log("freeCourse", freeCourse);
      return freeCourse;
    }
    //price course
    if (statusData === 1) {
      return data.course.filter((item) => item.cost > 0);
    }

    // special offer
    return data.course.filter((item) => item.students.length > 3);

    // return [];
    // console.log("test test");
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="course Co_back mt-28 xl:min-h-[1200px] relative">
      <div>
        <img src="" alt="" />
      </div>

      <h3 className=" text-3xl text-center py-20 text-white">
        پیشنهادات ما برای شما
      </h3>

      <div className="container-tab  ">
        {/* tabs */}
          <div className="bloc-tabs flex flex-col items-center justify-center 
                          md:flex md:flex-row xl:w-[65rem] xl:mx-auto 
                           dark:bg-[#0A1929]  ">
            <button
              className={statusData === 0 ? "tabs active-tabs  animate__animated animate__fadeIn dark:text-white  " : "tabs dark:text-white "}
              onClick={() => setStatusData(0)}
            >
              دوره های رایگان
            </button>
            <button
              className={statusData === 1 ? "tabs active-tabs animate__animated animate__fadeIn dark:text-white " : "tabs dark:text-white"}
              onClick={() => setStatusData(1)}
            >
              دوره های نقدی
            </button>
            <button
              className={statusData === 2 ? "tabs active-tabs animate__animated animate__fadeIn dark:text-white " : "tabs dark:text-white"}
              onClick={() => setStatusData(2)}
            >
              پیشنهاد ویژه ما
            </button>
          </div>
       
        {/* content */}
        <div className="content-tabs">

          <div
            className={statusData === 0 ? "content  active-content" : "content"}
          >
            <div className="grid md:grid-cols-2 xl:grid-cols-3  mx-auto gap-4 ">
              {/* {console.log("filtercourse", filterCourse())} */}
              {filterCourse()
                .slice(0, 6)
                .map((item) => (
                  <React.Fragment key={item._id}>
                    <CourseTab item={item} />
                  </React.Fragment>
                ))}
            </div>
          </div>

      
        </div>
        {/* end content tab */}
      </div>
    </div>
  );
};

export default Tab;











