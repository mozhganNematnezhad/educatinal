import React, { useState, useEffect } from "react";

import student from "Assets/images/Service/1.svg";
import Selected from "./Select/Selected";
import Search from "./Search/Search";
import Category from "./Category/Category";
import SortInDate from "./SortInDate/SortInDate";
import Lessons from "./Lessons/Lessons";
import { ConsumeAllDataState } from "Context/AllData/AllData";

// import { getAllCourses } from "../../Services/Public";
// import { ConsumeAllDataState } from "../../Context/AllData/AllData";

const Courses = () => {
  // const { data } = ConsumeAllDataState();
  // console.log(data);

  const [searchItem, setSearchItem] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  //  const filterDataHandler = () => {
  //   if (selectedOption === "رایگان") {
  //     return data.course.filter((item) => item.cost === 0);
  //   }
  //   if (selectedOption === "نقدی") {
  //     return data.course.filter((item) => item.cost > 0);
  //   }
  //   return data.course;
  // };

  return (
    <div className="container mx-auto">
      <div className=" flex items-center py-8 ">
        <div className="relative right-8 z-[-999] ">
          <img src={student} alt="" className="w-32" />
        </div>

        <div className="absolute right-[10rem] z-[-999]">
          <h2 className="text-[19px]  text-[#333] dark:text-white ">دوره های آموزشی</h2>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 mt-8 gap-8  mx-8 xl:mx-0">
        <div className=" col-span-3 lg:col-span-4 xl:col-span-3">
          <Search searchItem={searchItem} setSearchItem={setSearchItem} />
          <Selected
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Category />
        </div>

        <div className=" col-span-9 lg:col-span-8 xl:col-span-9">
          <SortInDate />
          <Lessons
            searchItem={searchItem}
            selectedOption={selectedOption}
            // filterDataHandler={filterDataHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;













// ******************
// ******************
// ******************
// useEffect(() => {
//   const fetchallData = async () => {
//     try {
//       const response = await getAllCourses();
//       // console.log(response.data.result);
//       setCourse(response.data.result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   fetchallData();
// }, []);

// ******************
// ******************
// ******************
// هر جا که نیاز هست فیلتر انجام بشه یه دیتایی کم بشه یا زیاد بشه
// واونو داخل استیت بریزیم
// اینجا عملا استیت اصلی ما که کل دیتا بوده
// ما این طوری از دست میدهیم
// اینجا باید بستجیم که چه طوری داریم با استیت رفتارمیکنیم
// چه چیزی رو داخلش ست میکنم
// اگر
// بعدا گزاشت روی همه
// ما همه دیتای اولیه رو داشته باشیم

// ما باید کلش رو مثل سرچ
// یه چیزی روفیلتر کنیم
// و همان را ریترن کنیم
// وتوی رندر بیایم تابع روصدا کنیم
// وچیزی که تابع به ما میدهد راهمان را مپ بزنیم

// state
// استیت زمانی به کار میاد که مثلا بخوایم با یوزافکت
// تشخیص بدیم که چه زمانی
// استیت تعییر پیدا کرده
// واین کار وانجام بدیم

// اگربخوایم در داخل
// onchange
// صدا کنیم
// چه اتفاقی می افتد
// onchange
// اون سلکتت
// اتفاق میفته
// این تابع هم اجرا میشه
// اما اینجا استیتی ست نمیشه که دیتا بخواد دوباره از نو نمایش داده بشه
// در هر صورت ما باید یه استیتی
// تعییربکنه که صفححه ما ری-رندر شود

// یه استیت در نظر بگیریم که ویلیو اون سلکت دخیره شود
// مثل رایگان و غیر رایگان
// بعد اینکه تغییر پیدا کرد صفحه ری-رندر میشه تابع رو میتونیم اجرا کنیم

// الان صفحه ری-رندر نمیشه که ما دیتای اصلی رو بگیریم باید یه بار استیت ست بشه که صفحه ری-رندر شود
//  الان جون ما ریترن هم بکنیم هیچ اتفاقی نمی افتد از این تابع

// در ان واحد فقط یکی داخل استیت فرار میگیره
// const [selectedOption, setSelectedOption] = useState("");
// داخل این
// selectedOption
// همون ولیو سلکت سبومیشه
// همون چیزی که انتخاب کرده رو
// رایگان انتخاب کرده یا غیر رایگان
// بعد از این
// onchange
// اتفاق افتاد
// هر مقداری که بود  ست کندر استیت
// selectedOption

// پس نتیچه
// ما فقط یه استیت میخوایم یعنی ابشنی که انتخاب کرد و ولیوشو بریزیم داخل استیت
// بعدش چه اتفاقی می افند
// مقدار
// ابشن میزیریم داخل استیت
// بعد از این که چیزی انتخاب کرد
// چون استیت ست میشه
// صفحه ما ری-رندر مبشه
// ما میایم داخل رندر هر بار صفحه رندر میشه
// این تابع
// filterDataHandler
// برای ما صدا بزینم
// وهر دفعه که این تابع کال میشه
// یعنی استیتی که الان هست
// یعنی اون مقداری که الان انتخاب شده
// دیتا رو به ما میده
// یعن اونجایی که داریم دیتارو رندر میکنیم مپ میزینم

// نکته
// اینچا چیزی که مهمه باید الویت بندی کنیم
// اول سرج مهمه یا فیلتر
// کمتر پیش میاد که اول سرچ کنه بعدفیلتر
// بهتره اول فیلتر انجام بدیم
// بعد سرچ

// اگر اول  فیلتر انجام بده و بعد سرچ کنه
// اون میادتوی کل دیتای ما سرچ میکنه
// نه داخل دیتای فیلتر شده

// سرچ شد براساس ایتم هایی که الان داخل استیت وجود داره
