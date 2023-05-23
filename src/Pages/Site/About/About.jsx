import React from "react";

import aboutU from "Assets/images/about.webp";
import HelmetTitle from "components/commen/Helmet/Helmet";

const About = () => {
  return (
    <>
    <HelmetTitle title="  درباره توریتور"/>
    <div className="bg-[#f3f4f6] dark:bg-[#0E2338] ">
      <div className="container m-auto">
        <div className="relative">
          <h1 className="text-[#212121] text-xl md:text-4xl font-black px-10 pt-10 
          relative text-center lg:text-right
          dark:text-white
          ">
            داستان شکل گیری توریتور
          </h1>
          <div className="absolute w-[4rem] bg-[#0eb582] 
              md:w-[7rem] h-[0.3rem] bg-opacity-20 mr-8 mt-[0.5rem]  
           rounded-full dark:bg-[#87652F] ">
            <p></p>
          </div>
        </div>

        <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 ">
          <div className="w-[100%]  px-10 py-10  ">
            <p className="text-[rgba(121,137,158)] leading-8  text-justify text-[1.1rem] dark:text-[rgb(202,207,216)] ">
              داستان توریتور در اردیبهشت 1396 شکل گرفت است و تا به امروز که در
              اینجا هستیم تمام تلاش خود را کرده‌ایم تا بتوانیم به کاربران ایرانی
              و علاقمند کمک کنیم تا بتوانند زبان‌ها و ابزارهای به‌روز جهانی را
              فرابگیرند و خود را آماده شروع کسب‌ و کار یا استخدام در شرکت‌های
              مختلف کنند. در Turitor ، ما معتقدیم که همه باید این فرصت را داشته
              باشند که از طریق فناوری پیشرفت کنند و مهارت های فردا را توسعه دهند
            </p>
            <p className="text-[rgba(121,137,158)] leading-8  text-justify text-[1.1rem] dark:text-[rgb(202,207,216)] ">
              در Turitor ، ما معتقدیم که همه باید این فرصت را داشته باشند که از
              طریق فناوری پیشرفت کنند و مهارت های فردا را توسعه دهند
            </p>
          </div>
          <div className="py-4 m-auto lg:text-lef mt-12 lg:mt-0 ">
            <img src={aboutU} alt="" className="w-[80%] m-auto sm:w-full  lg:w-[90%]" />
          </div>
        </div>

        <div className="text-center mt-12">
          <div>
            <h4 className="text-[#212121] text-xl md:text-4xl font-black relative dark:text-white ">
              هدف ما در توریتور
            </h4>

            <span className="absolute inline-block border-b w-[15rem] border-[#0eb582] border-opacity-40 transform translate-x-1/2 mt-4 dark:border-[#87652F]">
              <i className="absolute top-1/2 right-1/2 inline-block border-4 transform -translate-y-1/2  translate-x-1/2 border-[#0eb582] 
              rounded-full bg-customOrange-700 w-4 h-4 dark:bg-[#87652F] dark:border-white"></i>
            </span>
          </div>

          <p className="w-[80%] m-auto text-[rgba(121,137,158)] leading-8 text-justify text-[1.1rem] py-10  dark:text-[rgb(202,207,216)]">
            ما به عنوان یک وبسایت آموزشی سعی داریم به همه شما عزیزان فارسی زبان
            کمک کنیم که در این دنیای بی کران از زبان ها و فریمورک‌ها و ابزارهای
            مختلف برنامه نویسی مسیر فعالیت خود را پیدا کنید و همچنین سعی داریم
            در این مسیر همراه شما باشیم تا این قابلیت را بدست بیاورید که از دانش
            کسب شد در کسب و کار خود یا برای استخدام در شرکتی که قصد فعالیت در آن
            را دارید استفاده کنید . هدف ما پیروزی شماست . از این رو تصمیم ما
            ایجاد کردن یک فضای دوستانه است، که هم برای آموزش و هم برای ایجاد
            ارتباط و حل مشکل برنامه نویسان مختلف در فضای وب فارسی مورد استفاده
            قرار بگیرد تا در کنار یادگیری ابزارهای جدید، به عنوان یک برنامه نویس
            بتوانید مشکلاتتان را در راکت حل کنید یا حتی قادر باشید شغل آینده خود
            را پیدا کنید.
          </p>

          <p className="py-8 dark:text-white">ما را در شبکه های اجتماعی دنبال کنید </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
