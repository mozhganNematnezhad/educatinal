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
















// *********************
// *********************
// *********************

// state all
//  const [allCourseData, setAllCourseData] = useState([]);

// useEffect(() => {
//   const allDataCourse = async () => {
//     try {
//       const response = await getAllCourses();
//       // console.log("iiii", response);
//       setAllCourseData(response.data.result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   allDataCourse();
// }, []);

// *********************
// *********************
// *********************

// ما دو تا یوزافکت نیاز داریم
// یوز افکت اول برای زمانیکه دیتا کامل فچ شود

// یوزافکت دوم برای زمانیکه وضغیت نمایش تعییر کنه
// یا رایگان یا عیر رایگان بشه

// ----------------

// رایگان و عیر رایگان
// برای وفتی که چند تا تب داشته باشیم
// ویا چند تا دیتا داشته باشیم که فقط در حا حاضر یکی نمایش داده شود
// میتونیم از شمارش عددی استفاده کنیم
// مثلا رایکان صفر
// عیر رایگان1
// پیشنهاد2
// میتونیم شرط بزاریم که
// موقعی که میخوایم فیلتر کنیم که
// اگر
// statusData =1
// ّبود باید دوره های رایگان
// اگر صفربود غیر رایگان
// const [statusData, setStatusData] = useState(0);

// -------------------

// البته یوز افکت دوم که اول گفتیم نیاز نیست چون
//هر بار که
// استیت statusData
// ما میخواد تغییر کنه به  ازاش یه تابعی رو صدا میزنیم

// *********************
// *********************
// *********************
// ** نتیجه کلی:::::::
// ما یه دیتای کلی داریم یه دیتای فیلتر
// اگر من بیام دیتای کلی
// به نام
// getAllCourses
// بیام فیلتر کنم و فقط
//عیر رایگان داخلش ست کنم
// بعد ازاین که تعییر پیدا میکنه و کاربر میزنه رایگان
// دیگه من داخل استیتم رایگان ها رو ندارم
// وفقط همون عیر رایگان رو دارم
// عملا دیتامون کاملا پاک میشه
// میتونیم بیایم یه استیت دوم تعریف کنیم
// میتونیم با یه تابع این کارو انجام بدیم
// که ما راه تابع روانتخاب کردیم

// *********************
// *********************
// *********************

// ***نکته***
// if (statusData === 0) {
//   const freeCourse = allCourseData.filter((item) => item.cost === 0)
// setAllCourseData(freeCourse)   /// این غلط است نباید باشه ---دلیلشو پاببن گفتم
//   return freeCourse
// }

// اگردوره های رایگان و یا عیر رایگان ما بریزیم
// در داخل کل استیتمون
// بعداکه تعییر میکنه
// فقط همونا رو داریم
// نمی تونیم  به کل دیتا دسترسی پیدا کنیم

// ***نکته****--return
// هرجایی تابع  یه چیزی روریترن کنه دیگه عملا ادامه خط های بعد از اون دیگه اجرا نمیشه
// مثلا اگر
// statusData === 0
// سریعااا یه مقدار ریترن میشه وادامه شرط دیگه بررسی نمیشه
// بنابراین اینجا فرقی نمیکته ما
// else if
// بنویسم یا
// if
// بنویسم

// ***نکته***
//  return allCourseData.filter((item) => item.students.length > 3);
// چون مطمین هستیم وقتی قبلی ها اجرا نشدن
// یعنی شرط سوم برقرار هست دیگه نیازی به شرط نداریم

// *********************
// *********************
// *********************

// *****filterCourse()
// خروجی این تابع یه ارایه هست
// چون قیلتر زدیم و داریم ریترن میکنیم
// ومتد فیلتر هم به ما یه ارایه میدهد

// وقتی تابع رواجرا میکنیم
// وپرانتز بازوبسته جلوش میزاریم یعنی ما چیزی که تابع ریترن میکنه
// وبهمون برمیگردونه رو
// اینجا داریم
// توی تابع ما چه چیزی ریترن کردیم؟
// یه ارایه ای که ما روش فیلترزدیم

// این تابعی که نوشتیم کارش اینه که ما داخل رندر دیگه شرطی ننویسم

// این تابع میاد شرط هایی که ما توی رندر گزاشتیم مثلا گفنیم اگر یک بود فلان بشه
// کلا حدف میکنه
// کلا دیتای  مارو شفاف سازی میکنه
// دیگه ما نمیایم
// allcourseData
// داخل رندر بنویسم
// گلا با استیت اصلی کاری نداریم
// همه چیز دست این تایع هست
// هرچیزیکه به ما ریترن کنه و برگردونه همان را داریم رندر میکنیم

// *********************
// *********************
// *********************

// ما در ان واحد و حاضر باید یکی از دیتاها رونمایش دهیم
// یا رایگان یا غیر رایکان یا مقدار سوم
// مااومدیم گفتیم دیتامون متفاوت هست
// اون اسکلنی که داریم برای هر سه تا یکی هست
