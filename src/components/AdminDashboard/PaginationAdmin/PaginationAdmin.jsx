import React from "react";
import { _range } from "Utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const PaginationAdmin = ({ count, pageNumber, setPageNumber, pageSize }) => {
  // console.log("count---",count/pageSize)
  const round =Math.ceil(count/pageSize)  //6/4=1.5 ===2
  const pages = _range(round); 
  // console.log("count",count)
  // console.log("pageSize",pageSize) //[1,2]
  // console.log("pages",pages)

  const handleClick = (event) => {
    console.log(event);
    setPageNumber(Number(event.target.id));
  };

  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handlePrev = () => {
    setPageNumber(pageNumber - 1);
  };


  return (
    <nav aria-label="Page navigation example" className="mx-auto">
      <ul
        className="pagination  flex flex-row-reverse justify-center
       my-20 bg-white rounded-lg dark:bg-slate-900 "
      >
        {/* button back */}
        <li
          className="page-item  h-12 rounded-l-lg border-2 border-r-0 cursor-pointer
           border-[#0eb582] w-12 flex justify-center hover:bg-[#0eb582] hover:text-white   dark:!border-[rgb(66,63,81)] "
        >
          <button
            type="button"
            aria-label="Previous"
            onClick={handlePrev}
            className="w-full grid place-content-center dark:bg-[#1B314C] dark:text-white "
            disabled={pageNumber === pages[0] ? true : false}
          >
            <IoIosArrowBack />
          </button>
        </li>

        {/* count pages */}
        {pages.map((number) => {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={`page-item h-12 border-2 border-r-0 cursor-pointer
                 border-[#0eb582] w-12 flex justify-center items-center 
                  dark:!border-[rgb(66,63,81)]   ${
                    pageNumber === number ? "active   " : null
                  } `}
            >
              {number}
            </li>
          );
        })}

        {/* button next */}
        <li
          className="page-item  h-12 rounded-r-lg border-2 cursor-pointer
           border-[#0eb582] w-12 flex justify-center hover:bg-[#0eb582] hover:text-white   dark:!border-[rgb(66,63,81)]  "
        >
          <button
            type="button"
            aria-label="Next"
            disabled={pageNumber === pages[pages.length - 1] ? true : false}
            onClick={handleNext}
            className="w-full grid place-content-center  dark:bg-[#1B314C] dark:text-white"
          >
            <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationAdmin;










// **********************************
// **********************************
// **********************************

// pages.map
// از روی تعداد
// ایتم های ارایه
// pages
// دکمه رندر کردیم

// **********************************

// تعداد دکمه ها رو محاسه کردیم
// دوتا دکمه داخل
// pages
// باید باشه
// const pages =(count/pageSize) //8/4=2
// اینجا ما یه عدد 2 داریم
// ولی ما پایین روی
// pages
// مپ زدیم
// پس باید یه آرایه داشته باشیم که
// دوتا ایتم باشه
// چون داریم مپ میزنیم یه ارایه دو ایتمه باشه
// بتونیم این کارو انجام بدیم

// الان باید ما یه ارایه ایجاد کنیم
// که دو تا ایتم داخلش باشه

// **نکته***
// چه جوری میتونیم یه ارایه درست کنیم که داخلش دو تا ایتم باشه؟؟؟؟

// اگر بر 4 بخشپدیر نباشد یه مقدار اعشاری  ما میگیریم
// اینو باید چی کار کنیم

// کانت دیتای ما نامشخص هست یعنی از سرورمیاد

// ****برای صفحه utiles***range*
// اول مشکل ارایه حل کنیم
// 1:50
// 1--
// new Array(5).fill()
// (5) [undefined, undefined, undefined, undefined, undefined]
// یه ارایه با5 تا مقدار 
// undefined

// 2--
// new Array(5).fill().map((_,idx)=>idx+1)
// (5) [1, 2, 3, 4, 5]
// با یه خظ به تعداد مد نظرمون 
// ایتم های ارایه رو درست کنیم 
// و کارمون رو انجام بدیم
// این میتونه یه تابع بشه و بره توی 
// فایل 
// utils
// بعد گفتیم که جای اون
// undefined
// مقدار
// idx
// بزار

// idx
// هم مقدار دوم مپ هست
// که از  0 1 2
// شروع میشه
// این _
// همون
// undefined
// است

// 1:50
// const _range =(end=1 ,start=1)=>{
//   return Array(end-start+1)
//   .fill()
//   .map((_ ,idx)=>start+idx)
// }

// _range(10,5)

// new Array(5).fill().map((i,idx)=>i)

// new Array(10,20)
// [10,20]

// new Array(10)
// [empty x 10]

// **********************************
// **********************************
// **********************************
// **********************************
// **********************************

// const Pagination = ({ pages, setCurrentPage, currentPage }) => {

//   const pageNumberLimit= 5;
//   const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
//   const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

//   const handleClick = (event) => {
//     setCurrentPage(Number(event.target.id));
//   };

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);

//     if (currentPage + 1 > maxPageNumberLimit) {
//       setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//       setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//     }
//   };
//   const handlePrev = () => {
//     setCurrentPage(currentPage - 1);

//     if ((currentPage - 1) % pageNumberLimit === 0) {
//       setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//       setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//     }
//   };

//   return (

//       <nav aria-label="Page navigation example" className="mx-auto">
//         <ul className="pagination  flex flex-row-reverse justify-center my-20 bg-white rounded-lg">
//           {/* button back */}
//           <li
//             className="page-item  h-12 rounded-l-lg border-2 border-r-0 cursor-pointer
//            border-[#0eb582] w-12 flex justify-center hover:bg-[#0eb582] hover:text-white "
//           >
//             <button
//               type="button"
//               aria-label="Previous"
//               onClick={handlePrev}
//               disabled={currentPage === pages[0] ? true : false}
//             >
//               <span aria-hidden="true">&raquo;</span>
//             </button>
//           </li>

//           {/* count */}
//           {pages.map((number) => {
//             if (
//               number < maxPageNumberLimit + 1 &&
//               number > minPageNumberLimit
//             ) {
//               return (
//                 <li
//                   key={number}
//                   id={number}
//                   onClick={handleClick}
//                   className={`page-item h-12 border-2 border-r-0 cursor-pointer
//                  border-[#0eb582] w-12 flex justify-center items-center ${
//                    currentPage === number ? "active " : null
//                  } `}
//                 >
//                   {number}
//                 </li>
//               );
//             } else {
//               return null;
//             }
//           })}

//           {/* button next */}
//           <li
//             className="page-item  h-12 rounded-r-lg border-2 cursor-pointer
//            border-[#0eb582] w-12 flex justify-center hover:bg-[#0eb582] hover:text-white"
//           >
//             <button
//               type="button"
//               aria-label="Next"
//               disabled={currentPage === pages[pages.length - 1] ? true : false}
//               onClick={handleNext}
//             >
//               <span aria-hidden="true">&laquo;</span>
//             </button>
//           </li>
//         </ul>
//       </nav>
//   );
// };

// export default Pagination;
