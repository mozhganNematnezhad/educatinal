import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

// import component
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
// import { getStudentById } from 'Services/Student';
import { getStudentById } from 'Services/Admin';

const FreeCourses = () => {

 const {userData}=ConsumeAuthState() 
 const [freecourse,setFreeCourse] =useState([])
   //console.log("myObject-free",myObject)
  // console.log("myObject-free",userData)


  useEffect(() => {
    const getStudentID = async () => {
      try {
        // console.log("oooo",userData["_id"])
        const response = await getStudentById(userData["_id"]);
        // console.log("FreeCourses id", response);

        const AllCourse =response.data.result.courses   //allcourses
        console.log("AllCourse-freecourse",AllCourse); 
        const filterCourse =AllCourse.filter((item)=>item.cost ===0)
        setFreeCourse(filterCourse)

      } catch (error) {

        console.log(error);
      }
    };
  
    getStudentID();
  }, []);

  return (
    <div className="Da_freecourse  ">
      <div className="Da_Header  ">
        <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
          <h3 className="text-center pb-4 text-base dark:text-white"> دوره های رایگان</h3>
        </div>
        <ul className="mx-8 mt-8 block">
          {freecourse.map((item, index) => {
            return (
              <React.Fragment key={index} >
                <li className="py-4 bg-[#fafafa] my-4 rounded-lg px-8 flex items-center justify-between 
                    dark:bg-[rgb(27,52,77)]
                        dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
                      dark:text-white">
                  <Link to={item.title}>{item.title}</Link>
                  <img
                    src={item.lesson.image}
                    alt={item.img}
                    className=" w-20 md:w-24"
                  />
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FreeCourses;











// ********************
// ********************
// ********************
// اگر درس های همین یوزر میخوای که باهاش
// لاگین کردی
// دیگه کل درسها رونباید بگیری
// باید درس های همین یوزرروبگیری
// باید
// api 
// روپیدا کنی
// مثلا روت  دوره های خریداری شده
// هر کاربر فرق میکنه
// پس
// نباید بریم سراغ کل کورس ها
// هر یوزر برای خودش یه حساب جدا داره اگه با یه یوزر دیگه
//  وارد شدین دوره های خریداری شده و پروفایلش فرق 
// میکنه
// ********************
// ********************
// ********************


// روت های مربوط به
// student
// اگرای پی داشتیم که فقط از روی توکن درس های کاربرره ما میداد 
// که ما نخوایم جدا دوباره
// ای دی دانش اموزبگیریم
// بعد بریم توی کل دانش اموزها
// درس های یوزر پیدا گنیم
// ********************

// یا ای دی میتونیم از کانتکس بگیریم ولی دال لوکال هم ما دخیره کردیم 

// **مهم مهم مهم **
// توی صفحاتی که که مربوط به دوره و لسن اینها میشود
// من درخواست میزنم وای دی رواز کانتکس میگیرم و مستقیما میچسیونم
// به url

// چون فقط برای دوره ها باید نشون بدیم و چون
// گلوبال نیست که در کانتکس دخیره کنیم 
// توی کانتکس چیزی دخیره میشه که با جابه جایی روت ها همچنان داشته باشیم
// ما درس های رایگان و نمیخوایم در صفحات دیگه داشته باشیم
// مثل سبد خرید و یا اطلاهات کاربر که در همه صفحات ما میخوایم

// اطلاعات کوچکتر مثل دوره یا درس همان موقع درخواست میزنیم و دیتا رو میگیریم و نمایس میدهیم و در استیت خودش دخیره میکنیم



// ********************
// ********************
// ********************
// بک اند باید بگه که مثلا قسمت صفحه ای که طرف درس های 
// ثبت نامشده شومیخواد ببینه من جه طوری دیتا روبه شما بدم
// اگربه شما نگفته احتمالا باید با همون ای دی پیش بری
// ولی اضولی نیست که بری ای دی طرف رو پیدا کنی بعد بری توی کل کورس ها
// ای دی فیلتر کنیو بعد درس ها رو بگیری
// ********************
// ********************
// ********************
//  اکر 
// freecourse 
// خالی باشه بایدهمون 
// [];
// بزاریم
// const [freecourse,setFreeCourse] =useState([])
// ********************
// ********************
// ********************