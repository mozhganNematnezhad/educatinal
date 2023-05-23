import React, { useState, useEffect } from "react";
import CourseAd from "components/AdminDashboard/CourseAd/CourseAd";
import TitleCourse from "components/AdminDashboard/CourseAd/TitleCourse/TitleCourse";
import HeaderPage from "components/AdminDashboard/Commen/HeaderPage/HeaderPage";
import { getCourse } from "Services/Admin";
import PaginationAdmin from "components/AdminDashboard/PaginationAdmin/PaginationAdmin";
import Loading from "components/commen/Loading/Loading";

const PAGE_SIZE = 4;

const CoursesAd = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const [courseData, setCourseData] = useState({
    courses: [],
    count: 0,
  });

  // console.log("MMM", courseData.courses);
  // console.log("count", courseData.count);

  useEffect(() => {
    const courseDate = async () => {
      try {
        setLoading(true);
        const { data } = await getCourse(PAGE_SIZE, pageNumber);
        // console.log("res",response)
        //  console.log("res",response.data.data.result.courses)
        // console.log("res", data);
        setCourseData({
          courses: data.result.courses,
          count: data.result.count,
        });
        setLoading(false);
      } catch (error) {}
    };

    courseDate();
  }, [pageNumber]);

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <HeaderPage
        btn={"افزودن دوره"}
        title={"دوره (ترم های) موجود"}
        link="/admindashboard/adddata/courses"
      />

      <div className="border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>

      <div className="relative overflow-x-auto cssScrolAdmin">
        {!loading ? (
          courseData.courses.length > 0 ? (
            <table className="w-full ">
              <TitleCourse />

              {courseData.courses.map((course) => {
                return (
                  <CourseAd
                    key={course._id}
                    course={course}
                    setCourseData={setCourseData}
                  />
                );
              })}
            </table>
          ) : (
            <p>ترمی وجود ندارد</p>
          )
        ) : (
          <>
            {" "}
            <Loading />{" "}
          </>
        )}
      </div>

      {courseData.courses.length > 0 ? (
        <PaginationAdmin
          count={courseData.count}
          pageSize={PAGE_SIZE}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ) : (
        ""
      )}
    </div>
  );
};



















export default CoursesAd;

// *************************
// *************************
// *************************

//  data ===data == article , course

// course[{},{}]

// *************************
// *************************
// *************************
// *************************

// http://{{apiurl}}/api/course/list?pagenumber=1&pagesize=2

// *************************
// *************************

// الان اینجا دیتا داخل کانتکس ماهست

// کاری مه مااومدیم انجام دادیم این بود که تمامی دیتایی که مانیاز داشتیم ریختیم داخل کانتکس
// اما این کار یه سری بدی هایی هم دارد
// ما همیشه یه دیتای اصلی و ثابتی داریم
// دیتای ابدیت شده و نهایی نداریم
// همون بار اول که صفحه ما لود میشه
// دیتا فچ میشه میره داخل کانتکس بعد از اون دیگه هر بار بریم داخل صفحات داریم از کانتکس میخونیم
// یه سری خوبی و یه سری بدی دارد
// اگر ما بخوایم با استفاده از پچی خود بک اندکارمونوپیش ببریم
// باید بیایم دیتا رو خودمو
// رکویست بزنیم
// دیگه از کانتکس نخونیم

// منطقی اینه که ما هر بار که وارد صفحه میشیم
// همون وقت که وارد اون روت میشیم
// دیتا فچ بشه و دیتای نهایی و ابدیت در لحطه داریم
// نه اینکه بخوایم بریزیم داخل کانتکس
// *************************
// *************************
// *************************
// *************************

// حالا جایی که این
// getCourse
// فراخوانی میکنیم حالا میایم این دو تا مقدار روبهش
// پاس میدهیم
//    const { data } = await getCourse(PAGE_SIZE, pageNumber);
// size===
// هر دفعه چند تا چند تا دیتا اصافه بشه
// تو هر صفحه چه تعداد دیتایی  باشه
// pagenumber===شماره صفحه
// همونی هست که کلیک میکنه وتعییر میکنه
// مثلا ضفحه 2 یا 3 یاصفحه4میزنه
// برای این شماره صفحه باید یه استیت بگیریم

// page number
// مقدار دیفالتش یک هست

// الان باید دیتا رو فچ کنیم ....وقتی
// فقط
//courseDate
// داریم وجایی ان کلیک چیزی نداریم
// پس بدون داخل
// useEffect
// باید بزاری

// داخل یوزافکت دیتا روفچ میکنیم
// صفحه که بالا میاد داخل یوزافکت دیتا فچ میشه و
// بعد داخل استیت ست میشه
// و تمایش پیدا میکنه

// ****
// الان یه استیت برای دیتا هم باید داشته باشیم
// const [data ,setData] =useState({})

// ****
// مقدار اولیه استیت دیتا رو یه مقدار خالی بزاریم
// کلا هر جا که دیتا به صورت ارایه هست
// مقدار اولیه شو
// یه ارایه خالی بزارید
// دیگه نیاز به شرط گداشتن نباشه
// const [courseData, setCourseData] = useState({
//   data: [],
//   count: 8,
// });

// ارایه باید باشد که بتونیم مپبزنیم

// ****مهم
//ماهر دفعه که دیتایی رو فچ میکنیم
// اون کانت که بهمون میده
// تعداد کل دیتاهایی که داریم

// اون کانت باید تقسیم بر اون
// pagesize
// که داریم بکنیم
// count/pagesize ===8/4 =2
// پس دوتا دکمه  1و 2
// به پچی نیاز داریم
// 16/4 =4
// پس 1و2و3و4
// تادکمه میتونیم داشته باشیم

// ****
// اگر دیتایی وجود دارد باید یه پچی رندر شود

// *******
// setCourseData({
//   data: response.data.result.courses,
//   count: response.data.result.count,
// });

// ****
// pageNumber.....همین صفحه ای که الان جاری هستیم
// داخلش هستم..مثل همون
// currentPage
// می ماند
// صفحه 1 و2
// count=== کل دیتای ماست==8

// *****
// چون مقادیری که ثایت هستنئد
// متعیرهایی که ثابت  هستند
// قانونی هست که باید با حروف بزرگ
// بیرون کامپوننت بنویسیم
// چون داخل کامپوننت باشه بی دلیل رندر میشه
// و یه زمانی رو میگیره

// *************************
// *************************
// *************************
// *************************

// ---مهم---
// ***برای اینکه که دیتا رو بیاریم از طریق پچی****
// طبق اون مقدار اولیه ای که دادیم برای اون
// currentPage=pageNumber
// که دراصل مقدار یک بود
// الان این یک ارسال میشه به بک وما چهارتا مقدار اول رومیگیریم

// الان
// pageNumber=اون صفحه ای که داخلش هستیم
// ما از استیت هست
// حالاما باید بگیم به اون یوز افکتی
// که داریم دیتا رو فچ میکنیم
// هر موقع این
// pageNumber
// من تعییرکرد
// دوباره عملیات فچ کردن دیتا روانجام بده
// باید به اون
// dependency
// یوزافکت
// باید اون
// pageNumber
// اضافه کنیم

// پس ما تا الان متوجه شدیم که هر بار که
// pageNumber
// تعییر میکنه
// یوزافکت دوباره کال میشه
// ودیتای همونومیگیریم
// الان  استیمون هر بار که نامبرتعییر میکنه
// 4
//  تا دیتای جدید میگیریم
// یک روبزنیم 4 تا دیتای اول و میگیریم
// تموم میشه
// 2
// روبزنیم
// استیمون میشه
// 4
// تا دیتای دوم

// نکته مهم که اینجا هست ما الان دیتای جدید رومیگیریم
// اگر بخوایم همین دیتایی که الان گرفتیم ونمایش بدیم
// درسته هر چیزی که میگیریم وست میکنیم داخل
// استیتی که داریم

// اکر میخواستیم علاوه بر دیتایی که از قبل داریم
// دیتای جدید هم بهش اضافه بشه
// اون موقع داستان فرق میکرد
// ولی یه موقعی هست که ما میخوایم
// SetState
// انجام میدیم
// وابسته باشه به مقادیر قبلی
// یعنی مقادیری که از قبل داخل استیتمون هست
// حفظ بشه
// ومقادیر جدید هم بهش اضافه بشه
// مثل
// loadMore

// *************************
// *************************
// *************************
// *************************
// زمانی که لودیتگ تروبود اینو نشون  بده
// وزمانی که دیگه دیتایی نداریم اینو نشون نده و به جاش لودینگ بیار
// {/* <div className="relative overflow-x-auto cssScrolAdmin">
// {!loading ? (
// <table className="w-full ">
//   <TitleCourse />

//   {courseData.courses.map((course) => {
//     return <CourseAd key={course._id} course={course} />;
//   })}
// </table>
// ) : (
//   <p> <Loading/> </p>
// )}
// </div> */}

// *************************
// *************************
// *************************
// *************************
// 3:12
// count: 0,
// اول اینو صفر میزاریم وبعدش که این دیتا گرفته شد
// داخل کورس دیتا
// مقدارش ست میشه
// زمانی که کورس دیتای ما
// پرمیشه
// دیتا میاد داخلش
// کانت هم همراه باهاش میاد

// کل دیتاهای ما الان6 تاست
// و هر صفحه ما هم الان 4 تا دیتا میگیرد
// دو تا صفحه داریم صفحه اول  4 تا وصفحه دوم 2تا
// باید روبه بالا گرد کنیم
// 2 تا
// دکمه برای صفحه اول ودوم داشته باشیم

// maximumround up number javascript

// *************************

// 20:00 min

// *************************
// *************************

// const itemsPerPage = 4;
// const [currentPage, setCurrentPage] = useState(1);

// const pages = [];
// for (let i = 1; i <= Math.ceil(data.course.length / itemsPerPage); i++) {
//   pages.push(i);
// }

// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = data.course.slice(indexOfFirstItem, indexOfLastItem);
// console.log("currentItems", currentItems);

// {/* {currentItems.length > 0 &&
//         currentItems.map((course) => {
//           return <CourseAd key={course._id} course={course}/>;
//         })} */}
