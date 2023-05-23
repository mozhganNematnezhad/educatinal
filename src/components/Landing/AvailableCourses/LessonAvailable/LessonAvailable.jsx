import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "../../../commen/Rating/Rating";
import { ConsumeCartState } from "../../../../Context/CartItemsContext/CartItemsState";
import { toast } from "react-toastify";
import { ConsumeAuthState } from "../../../../Context/AuthContext/AuthState";
import StarCourse from "../../../commen/StarCourse/StarCourse";
import ModalCourse from "components/commen/ModalCourse/ModalCourse";

const LessonAvailable = ({ lesson }) => {
  // console.log("props", lesson);
  const { ADD_TO_CART, cart } = ConsumeCartState();
  const { userData } = ConsumeAuthState();
  const [modal, setModal] = useState(false);
  
  const addToCartHandler = (lesson) => {
    const FindProducts = cart.findIndex((item) => item._id === lesson._id);
    // console.log("FindProducts", FindProducts);
    // console.log("lesson", lesson._id);
    if (userData.fullName) {
      if (FindProducts === -1) {
        ADD_TO_CART(lesson);
        toast.success(` ${lesson.title} به سبد خرید اضافه شد `);
        // console.log("ifone", lesson.title);
      } else {
        toast.error(`  دوره ${lesson.title} در سبد خرید وجود دارد    `);
      }
    } else {
      toast.error("لطفا لاگین کنید");
    }
  };
  return (
    <>
      <div className="xl:col-span-3  md:col-span-6 sm:col-span-6 col-span-12">
        <div className="LessonAvbox ">
          <div className="absolute -top-12 w-full px-4 cursor-cell">
            <div className="Av-img inline-block h-40 overflow-hidden w-full rounded-lg ">
              <img
                src={lesson.lesson.image}
                onClick={() => setModal(!modal)}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 w-full space-y-2  pt-[6rem]">
            <div className="px-4 flex flex-col flex-grow">
              <Link to="">
                <p
                  className="text-[#333] text-lg font-bold 
                  hover:text-[#0eb582] 
                  transition-all duration-300 ease-in-out
                  dark:text-[rgb(96,156,255)]
                  
  "
                >
                  {lesson.title}
                </p>
              </Link>
              <p className="text-[#7a7a7a] text-sm leading-7 text-justify mt-3  lessonAV dark:text-white ">
                {lesson.lesson.description}...
              </p>

              <div className="flex items-center">
                <GiTeacher className="text-xl text-[#0eb582]" />
                <p className="text-[#7a7a7a] text-base py-3 text-justify pr-2 dark:text-white">
                  {lesson.teacher.fullName}
                </p>
              </div>

              <span className="flex  items-center  text-yellow-300 py-3">
                {/* <Rating /> */}
                <StarCourse />
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-[rgba(51,65,85)] font-bold  text-2xl dark:text-white">
                    {lesson.cost}
                  </p>
                  <span className="text-[rgba(51,65,85,0.6)] pr-2 dark:text-white">تومان</span>
                </div>
              </div>
            </div>

            <div className="pb-8 px-4 flex justify-between items-center">
              {/* <Link to={`/courses/detailcourse/${lesson._id}`}> */}
              <Link to={`courses/detailcourse/${lesson["_id"]}`}>
                <div className="Le-btn">
                  <button>مشاهده اطلاعات دوره</button>
                </div>
              </Link>
              <div>
                <div className="animcart">
                  <button
                    className="text-4xl m-[0.5rem] "
                    onClick={() => addToCartHandler(lesson)}
                  >
                    <AiOutlineShoppingCart className="text-[#0eb582]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && <ModalCourse modal={modal} setModal={setModal} lesson={lesson} />}
    </>
  );
};

export default LessonAvailable;










// ********************
// ********************
// ********************
// ********************
// ********************
// ********************
// const addToCartHandler = (lesson) => {
//   if (userData.fullName) {
//     ADD_TO_CART(lesson);
//   }else{
//     toast.error("لطفا لاگین کنید")
//   }
// };

// یعنی اگر
// userData
// وجودداشت واسم کاربر بود
// توبیا اد تو کارت وبزن
// در عیر این صورت توبیا یه الرتی بزار و بگو
// لطفا لاگین کن
// ********************
// ********************
// ********************
// const addToCartHandler = (lesson) => {
//   if (userData.fullName) {
//     ADD_TO_CART(lesson);
//   }else{
//     toast.error("لطفا لاگین کنید")
//   }
// };
// ********************
// ********************
// ********************
// userData={}
// userData.fullName
// باید جک کنیم که داخل یوزر دیتا اول چیری هست یا نه
// چون یوزر دیتا  خودش یه ابجکت هست پس ما میتوانیم به پروپرتی شو  بگیریمم
// چون ابجکت خالی رو نمیتونیم بگیریم
// ********************
// ********************
// ********************
// FindProducts === -1

// الان یعنی وقتی -1 هست تو بیا اضافه کن و وجود داره ولی اگر دوباره کلیک کرد یعنی دیگه -1
// نیست و بگه وجود دارد
