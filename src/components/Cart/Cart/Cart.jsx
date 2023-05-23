import React from "react";
import { Link } from "react-router-dom";

import Radio from "components/commen/Radio/Radio";
// import context
import { ConsumeCartState } from "Context/CartItemsContext/CartItemsState";
// import icon
import { FaGraduationCap } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

const Cart = () => {
  const { cart, confirm } = ConsumeCartState();
  // console.log("cartpage",myObject)

  const allprice = cart.reduce((acc, curr) => acc + curr.cost * 1, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col text-center  justify-center h-screen bg-[#f3f4f6]
       dark:bg-slate-900 ">
        <p className="text-[rgba(149,160,177,1)] font-bold text-3xl ">
          سبد خرید خالی است
        </p>
        <Link to="/courses" className="mt-10 text-[#0eb582]">
          <p>بازگشت به دوره ها</p>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f3f4f6] dark:bg-slate-900  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          {/* col-span-8 */}
          <div className=" col-span-12 xl:col-span-8 ">
            {cart.length > 0 &&
              cart.map((item) => {
                return (
                  <React.Fragment key={item._id}>
                    <div className="bg-white md:flex items-center rounded-xl shadow-sm px-16 py-10 m-8 dark:bg-[#001E3C] ">
                      <div className="contentCart  ">
                        <div className="AllBox  md:grid md:grid-cols-12">
                          <div className="rightbox Le-img flex flex-col md:flex-row items-center col-span-6">
                            <figure className="w-[20%] overflow-hidden rounded-lg ">
                              <img src={item.lesson.image} alt="" />
                            </figure>
                            <div className="md:mr-8  my-2 md:my-0">
                              <p className="text-[#1e2f38] text-xl dark:text-white">
                                {item.title}
                              </p>
                              <div className="flex flex-col md:flex-row items-center mt-2 text-sm text-[#686e71] my-3 md:my-0 ">
                                <FaGraduationCap className="ml-2 text-[#0eb582] " />
                                <p  className="dark:text-[rgb(247,248,249)]">مدرس دوره:</p>
                                <p className="dark:text-[rgb(247,248,249)]">{item.teacher.fullName}</p>
                              </div>
                            </div>
                          </div>

                          <div className=" leftbox flex items-center justify-center  col-span-6  mb-3 md:mb-0 ">
                            <div className="cost flex items-center ">
                              <p className="dark:text-white">{item.cost}</p>
                              <p className="dark:text-white">تومان</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button type="button" className="delete flex mx-auto md:block dark:text-white ">
                        <FiTrash
                          // onClick={()=>REMOVE_CART(item)}
                          onClick={() => confirm(item._id, item.title)}
                        />
                      </button>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          {/* col-span-4 */}
          <div className="col-span-12 xl:col-span-4">
            {/* اطلاعات پرداخت */}
            <div className=" bg-white  rounded-xl shadow-sm px-16 py-10 m-8 dark:bg-[#001E3C] ">
              <h1 className="text-[#0eb582] text-center text-base md:text-2xl pb-8 
              border-b border-solid border-[#ecf0f4]
              dark:!border-[rgb(66,63,81)]
              dark:text-white
              ">
                اطلاعات پرداخت{" "}
              </h1>

              <div className="mt-10  text-[#1e2f38] font-semibold flex  items-center justify-between pb-8  border-b border-solid border-[#ecf0f4]   dark:!border-[rgb(66,63,81)]">
                <p className="text-[0.8rem] dark:text-white">جمع کل:</p>
                <div className="flex items-center">
                  <p className="text-[#0eb582] text-xl dark:text-[rgb(202,207,216)]">{allprice}</p>
                  <p className="text-[0.4rem] pr-1 dark:text-[rgb(202,207,216)]">تومان </p>
                </div>
              </div>
              <div className="mt-10  text-[#1e2f38] font-semibold flex  items-center justify-between pb-8  border-b border-solid border-[#ecf0f4]   dark:!border-[rgb(66,63,81)]">
                <p className=" text-[0.8rem] dark:text-white"> تخفیف:</p>
                <div className="flex items-center">
                  <p className="text-[#0eb582] text-xl dark:text-[rgb(202,207,216)]"> 0 </p>
                  <p className="text-[0.8rem] pr-1 dark:text-[rgb(202,207,216)]">تومان </p>
                </div>
              </div>

              <div className="mt-10  text-[#1e2f38] font-semibold md:flex !items-center justify-between">
                <p className="text-center text-[0.8rem] md:text-right dark:text-white"> مبلغ قابل پرداخت :</p>
                <div className="flex items-center justify-center md:justify-start">
                  <p className="text-[#0eb582] text-xl">{allprice}</p>
                  <p className="text-[0.8rem] pr-1 dark:text-[rgb(202,207,216)] ">تومان </p>
                </div>
              </div>
            </div>

            {/* اعمال کد تخفیف */}

            <div className=" bg-white  rounded-xl shadow-sm px-8 py-10 m-8 flex  mb-5 relative dark:bg-[#001E3C] ">
              <input
                type="text"
                placeholder="کد تخفیف"
                className="pr-2 py-3 outline-0 shadow-md rounded-lg block  bg-green-50 relative w-full md:w-[100%] dark:bg-[#1B314C]"
              />

              <button className="bg-green-700 mt-2 py-2 px-4 text-white text-[0.5rem] rounded-[12rem] absolute left-[48px]">
                اعمال کد
              </button>
            </div>

            {/* درگاه انلاین */}
            <div className=" bg-white  rounded-xl shadow-sm px-16 py-10 m-8 dark:bg-[#001E3C] ">
              <h1 className="text-[#0eb582] text-center text-base xl:text-xl pb-8 border-b border-solid border-[#ecf0f4]  
               dark:!border-[rgb(66,63,81)]">
                انتخاب نحوه پرداخت
              </h1>

              <div className="mt-8 ">
                <Radio />
              </div>
            </div>

            <div className="my-16">
              <div className="cart-btn w-[80%] mx-auto">
                <button> تکمیل فرایند خرید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
