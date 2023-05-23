import React, { useState } from "react";

import Lesson from "./Lesson";
import Pagination from "components/CoursesList/Pagination/Pagination";

import { ConsumeAllDataState } from "Context/AllData/AllData";

// import Spinner from "../../commen/Spinner/Spinner";

const Lessons = ({ searchItem ,selectedOption}) => {
  const { data } = ConsumeAllDataState();
  const [loading, setloading] = useState(true);


  const filterDataHandler = () => {
    if (selectedOption === "رایگان") {
      return data.course.filter((item) => item.cost === 0);
    }
    if (selectedOption === "نقدی") {
      return data.course.filter((item) => item.cost > 0);
    }
    return data.course;
  };


  const renderData = (filterData) => {
    return filterData.filter((item) =>
      item.title.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
    );
  };

  // pagination
  // BOX pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  const filterData = filterDataHandler();
  const searchData = renderData(filterData);

  for (let i = 1; i <= Math.ceil(searchData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  // چه تغدادایتم رواز 9 تا نشون  بده
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const resultData = searchData.slice(indexOfFirstItem, indexOfLastItem);
  // end pagination

  return (
    <>
      {/* {!loading ? (
        <div className="lds-ringL">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : ( */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {resultData.length > 0 &&
          resultData.map((lesson) => {
            return (
              <React.Fragment key={lesson._id}>
                <Lesson lesson={lesson} />
              </React.Fragment>
            );
          })}
      </div>
      {/* )} */}

      {/* <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> */}
    </>
  );
};

export default Lessons;

// ************************************
// ************************************

// ceil
// گرد به سمت بالا

// تغداد اون محصولانی که میخوای داخل صفحت بزاری
// const itemsPerPage = 4;

// for (let i = 1; i <= Math.ceil(resultData.length / itemsPerPage); i++) {
//   pages.push(i);
// }

// این برای وقتی که تو چه تعداد پچی داری
// الان مثلا4 تا میخوای ایتم توی صفحت باشه پس پچی میشه
// 3 تا
// pages
// شماره داری
// اگر 6 تا محضول بخواد داخل صفحت باشه
// 2تا
// صفحه داری

// const pages = [1,2];

// ************************************

// موقعی که کامپوتت ما برای بار اول لود میشه
// هنوزدیتایی رونگرفتیم
// باید تروباشه
// const [loading, setloading] = useState(true);

// زمانی که یوزافکت ما یه بار اجرا شه
// یعنی ارگیومنت دومش یه ارایه خالی باشه
// باید لودینگ همین شکلی اجرا کنیم
// اینچا فقط برای باراول میخواد دیتا ما لود شود

// ************************************
// ************************************
// ************************************

// زمانی که میخوایم یه سرچی انجام بدیم یا یه فیلتری انجام بدیم
// اگربیایم کل دیتایی که
// داریم روفیلتر کنیم
// بعد اگر اون فیلتر ازبین بره
// دیگه ما دیتای قبلی روعملا نداریم
// همه دیتاهامون پرید
// پس کاری که میتوانیم انجام بدیم
// دو تا استیت باید داشته باشیم یه استیت برای کل دیتاهامون باید داشته باشیم
// یه استیت داشته باشیم برای وقتی که فیلترانجام بدهیم
// داخلش بریزیم

// اما یه کار ساده تر اینه که یه فانکشن داشته باشیم
// که کاررندر رو برای ما انجام بده
// بیایم یه تابع بنویسم یه دیتای کلی بهش بدیم
//  قیلتر هایی که در حال خاضر هستن مثلا سرچ
// مثلا اون رشته ای که سرچ کردیم
// بهش بدیم
// این تابع پردازش روانجام میده
// باید چه دیتایی رونمایش بده وچه دیتایی رونمایش نده
// پس یه فانکشن کلی کار ما رو راه میندازه

// پس این استیت کلی ماست که کل درس ها روداریم
//   const [course, setCourse] = useState([]);
// یه استیت هم داشته باشیم برای وقتی که کاربر داره سرچ میکنه
// اون رشته ای که داخل اینپوت هست
// const [searchItem, setSearchItem] = useState("");

// const renderData = () => {
// الان روی کل دیتاهای کورس ما یه فیلتر زدیم اون دیتاهای که تایتلشون با سرچ ما برابر هست رو ریترن کنیم
// trim() فاصله هاِی اول و اخر رشته رو حدف میکند
// toLowerCaseحروف کوچک میکند
// includes(searchItem.trim().toLowerCase() اگر شامل چیزی باشد که مشتری تایپ کرده است
// return course.filter((item) =>
// item.title.trim().toLowerCase().includes(searchItem.trim().toLowerCase())
// );
// };

// ************************************

// const renderData = () => {
//   return course.filter((item) =>
// {

//     console.log("filter",item.title)
//     console.log("searchItem",searchItem)

//    return item.title.trim().toLowerCase().includes(searchItem.trim().toLowerCase())

//     }

//   );
// };

// ************************************
// ************************************
// ************************************
// ************************************
// ************************************
// ************************************

// {/* <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8"> */}
//     {/* {!state.loading ? (
//         <Spinner />
//       ) : (
//         currentItems.length > 0 &&
//         currentItems.map((lesson) => {
//           return (
//             <React.Fragment key={lesson._id}>
//               <Lesson lesson={lesson} />
//             </React.Fragment>
//           );
//         })

//       )

//       }
//     </div> */}
