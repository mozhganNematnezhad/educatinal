import React from "react";
import { Link } from "react-router-dom";

import student from "Assets/images/Service/1.svg";
import LessonAvailable from "./LessonAvailable/LessonAvailable";
import { ConsumeAllDataState } from "Context/AllData/AllData";
// imoprt icon
import { AiOutlineArrowLeft } from "react-icons/ai";

const AvailableCourses = () => {
  const { data } = ConsumeAllDataState();
  //  console.log("data",data)
  // console.log("state",state)

  return (
    <div className="Av-CourseS">
      <div className="flex items-center relative">
        <div className="relative right-8">
          <img src={student} alt="" className="w-32" />
        </div>

        <div>
          <div className="md:absolute md:right-[8rem]">
            <h2 className=" text-base md:text-[19px]   text-[#333] dark:text-white">
              {" "}
              دوره های موجود توریتور
            </h2>
          </div>

          <div className="mt-2 md:mt-0 absolute left-0 md:left-[3rem] md:top-[3rem] ">
            <Link to="/courses" className="flex items-center">
              <p className="pl-2 dark:text-white">مشاهده همه دوره ها</p>
              <AiOutlineArrowLeft className="dark:text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {data && data.course && data.course.length > 0 ? (

          data.course.slice(0, 4).map((lesson) => (
            <React.Fragment key={lesson._id}>
             <LessonAvailable lesson={lesson} />
            </React.Fragment>
          ))
        ) : (
          <>data is empty</>
        )}
      </div>
    </div>
  );
};

export default AvailableCourses;









// ****************
// ****************
// ****************

// ما الان این کورس و لسن رو فقط در صفحات خودش میخوایم دیگه درجای دیگه ای نمیخوایم
// چیزی رو در کانتکس میگزاریم که یه چیز گلوبال باشه
// همه جا نیاز بهش داشته باشی
// وقتی که تعیررش بدیم جاهای مختلف هم تعییر کنه
// این دو تا فقط تو صفحات خودش هستن
// و وقتی میریم داخل صفحاتشون
// یه درخواست میزنیم ومیگزاریم داخل استیت
// نیاز به کانتکس نداریم

// ****************
// ****************
// ****************

// useEffect(() => {
//   const fetchallData = async () => {
//     try {
//       const response = await getAllCourses();
//       // console.log(response.data.result);
//       setAvailableCourse(response.data.result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   fetchallData();
// }, []);
