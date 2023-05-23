import React from "react";

import { IoEyeSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteCourse } from "./../../../Services/Admin";
import { toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { getAllCourses } from "./../../../Services/Public";

const CourseAd = ({ course, setCourseData }) => {
  // console.log("course-admin",course)

  const handelDelete = async (courseId) => {
    try {
      const response = await deleteCourse(courseId);
      // console.log("response2-handelDelete", response); //Delete shod coures
      toastifuySuccess("ترم با موفقیت حذف شد");
      // دوباره داریم درس ها رومیگیریم
      setCourseData((prevCourse) => ({
        ...prevCourse,
        courses: prevCourse.courses.filter((item) => item._id !== courseId),
      }));
      //  setCourseData((prevCourse)=>console.log("prevCourse" ,prevCourse));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <tbody
      className=" text-gray-500 bg-gray-50 md:text-[0.9] xl:text-[17px] 
      border-b-4 border-double content-center text-center 
    dark:bg-gray-300 items-center"
    >
      <tr>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          <img src={course.lesson.image} alt="" className="w-[6rem]" />
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {course.title}
          {/* {course.lesson.lessonName} */}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {course.cost}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {course.teacher.fullName}
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`showcourse/${course._id}`} className="flex justify-center">
            <IoEyeSharp />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`editcourse/${course._id}`} className="flex justify-center">
            <BiEdit />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <button
            onClick={() => handelDelete(course["_id"])}
            className="flex justify-center"
          >
            <MdDelete />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default CourseAd;
















// **********
// **********
// **********
// **********


// teachet [{_id ,fullName ,email, profile} ,{}]

// course.teacher.fullName

// فقط میخوام اون درسی که حدف شده داخل استیت ما هم حدف بشه
// اینجا یکی از جاهایی هست که باید از
// SetState call back
// استفاده کنیم
// چرا؟
// چون ما به مقدار قبلی نیاز داریم
// setCourseDate
// یه
// arrow function
// پاس میدهیم

// وقتی که دکمه کلیک
// میشه
// یه ریکوست
// delet
// میزه سمت سروز
// تا دیتا داخل  دیتا بیس سمت سروز حدف بشه
// حالا برای اینکه این تعییر سمت فرانت هم ببینیم
// میتونیم لیست کل دیتاها روفچ کنیم
// و اینجا دوباره رندر کنیم
// میتونیم بیایم دستی
// اون استیتی که دیتا داخلش هست
// اونی که پاک شده رو از داخل استیت پاک کنیم
// در اصل سمت فرانت اونی که پاک شده رو
// پاک میکنیم
// که دیتای جدید نمابش داده بشه
// توی
// response
// سمت سرور پاک میشه
// الان برای اینکه بتونیم تعییرات روببینم باید
// استیت یه تعییری بکند تا ری-رندر شود

// ⚽⚽⚽⚽⚽⚽⚽⚽
// handelDelete
// پس استیت ما یک ابجکت هست که
// داخلش 
// course ,count
// است
// چون داخلش هر دو تا هست و یک ابجکت هست 
// این طرف هم باید بیایم این 
// count
// درنظر بگیریم
// درحقیقت 
// prevCourse
// ما یک ارایه نیست 
// مهم
// خروجی چیزیکه از کال بک فانکشن
// ریترن کنیم
// همون مسنقیما داخل استیت ما قرار میگیرد
// پس بنابراین استیت ما هم یک ابجکت هست که دوتا
// پروپرتی
// courses ,count
// دارد
// بنابراین ما هم باید یه ابجکت ریترن کنیم
// SetCourseData((prevCourse)=>(
//     {
//   ...prevCourse ,course:اوندیتای که قیلتر
//     }
// )
// )