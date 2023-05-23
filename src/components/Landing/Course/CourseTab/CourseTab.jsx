import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// import icon
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
// import
import { ConsumeAuthState } from "../../../../Context/AuthContext/AuthState";
import { ConsumeCartState } from "../../../../Context/CartItemsContext/CartItemsState";

import "./CourseTab.css";

// import animation
import "aos/dist/aos.css";
import Aos from "aos";

const CourseTab = ({ item }) => {
  const { ADD_TO_CART, cart } = ConsumeCartState();
  const { userData } = ConsumeAuthState();

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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="zoom-in">
      <div
        className="courseTab bg-white relative mt-24 rounded-lg 
                          !border !border-solid !border-transparent
                         dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] 
                       dark:bg-[rgb(27,52,77)] hover:dark:bg-[rgba(255,255,255,0.05)] hover:dark:border-none "
      >
        <Link to="">
          <div className="absolute -top-12 w-full px-4">
            <div className="Av-img inline-block h-40 overflow-hidden w-full rounded-lg ">
              <img src={item.lesson.image} alt="" />
            </div>
          </div>
        </Link>

        <div className="DC-course   rounded-lg  pt-[8.5rem]  px-4 pb-4 ">
          <div>
            <Link to="">
              <h3
                className="DCTitle  DC-title text-lg font-bold text-[#333] 
              dark:text-[rgb(96,156,255)] "
              >
                {item.title}
              </h3>
            </Link>
          </div>
          <p className="DC-desc text-sm text-[#7a7a7a] leading-8 pt-4 dark:text-white">
            {" "}
            {item.lesson.description}
          </p>
          <div>
            <div className="pt-4">
              <p className="dark:text-white"> {item.teacher.fullName}</p>
            </div>

            <span className="flex items-center  text-yellow-300 py-3">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <p className="dark:text-white">{item.cost} تومان</p>

            <div className="mt-2 flex flex-col-reverse md:flex-row justify-between items-center">
              <Link to={`courses/detailcourse/${item["_id"]}`}>
                <div className="Le-btn btnTabCourse ">
                  <button>مشاهده اطلاعات دوره</button>
                </div>
              </Link>
              <div>
                <div className="animcart">
                  <button
                    className="text-4xl m-[0.5rem] "
                    onClick={() => addToCartHandler(item)}
                  >
                    <AiOutlineShoppingCart className="DC-basket text-[#0eb582] " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTab;

















// ************************
// ************************
// ************************
// برای اینکه میخوایم کارتمون هم اندازه بشن باید یه ارتفاغ ثابتی رو هم
// برای تایتل وهم برای
// Desc
// برای هر کدوم که همون ارتفاعشون زیاد و کم میشه
// اگربیشتر از اون ارتفاع بود
// overflow: hidden;
// میکنیم

// ************************
// ************************
// ************************
// یه راه دیگه هست
// برای وقتی که جمله طولانی میشه وبایدکم شود

// function longTitle(item) {
//   if (item.title.length > 30) {
//     return item.title.substring(0, 27) + "...";
//   }
//   return item.title;
// }

// <h3 className="DCTitle  DC-title text-lg font-bold text-[#333]">
//   {longTitle(item)}
// </h3>;
// ************************
// ************************
// ************************
