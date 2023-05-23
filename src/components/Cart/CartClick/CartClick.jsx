import React from "react";
import { Link } from "react-router-dom";
// import context
import { ConsumeCartState } from "Context/CartItemsContext/CartItemsState";

import { GrFormClose } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";

import "./CartClick.css"

const CartClick = ({ onCancle }) => {
  const { cart, confirm } = ConsumeCartState();

  const allprice = cart.reduce((acc, curr) => acc + curr.cost * 1, 0);

  if (cart.length === 0) {
    return (
      <div className="TwIn-cartHover slideUp p-4">
        <span> سبد خرید خالی است</span>
      </div>
    );
  }

  return (
    <div className="TwIn-cartClick slideUp   ">
      <FaTimes className="text-xl absolute top-0 left-0 " onClick={onCancle} />
      <div className="TwIn-boxCartClick   max-h-[450px]  overflow-y-scroll	 ">
        {cart.length > 0 &&
          cart.map((item) => {
            return (
              <React.Fragment key={item._id}>
                <div className=" flex flex-col md:flex-row justify-around items-center p-[0.75rem] md:p-4 md:gap-4">
                  <div className="w-100 	">
                    <img
                      src={item.lesson.image}
                      alt=""
                      className="w-[3rem] rounded-[0.5rem] "
                    />
                  </div>

                  <div className="">
                    <p className=" text-sm md:text-base dark:text-white">
                      {" "}
                      {item.lesson.lessonName}
                    </p>
                    <div className="flex my-2">
                      <p className=" text-sm md:text-base dark:text-gray-300">
                        مدرس :{" "}
                      </p>
                      <p className="dark:text-white">
                        {" "}
                        {item.teacher.fullName}
                      </p>
                    </div>
                    <div className="flex my-2">
                      <p className=" text-sm md:text-base dark:text-gray-300">
                        قیمت :{" "}
                      </p>
                      <div className="flex items-center dark:text-white  ">
                        <p> {item.cost} </p>
                        <p> تومان</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <GrFormClose
                      className="!text-red-700 text-2xl cursor-pointer dark:!text-white"
                      // onClick={() => REMOVE_CART(item)}
                      onClick={() => confirm(item._id, item.lesson.lessonName)}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        {/* dark:border-t-2 dark:border-[#23cdaf] */}
        <div className="border-t-2 border-solid border-gray-100  rounded-lg flex flex-col lg:flex-row justify-around items-center p-4 gap-4 
        dark:border-t-2 dark:border-[rgb(66,63,81)]
        ">
          
          <div>
            <h1 className="dark:text-gray-300">
              جمع کل :
              <span className="text-[#0eb582] xl:text-lg  lg:text-base">
                {allprice}
              </span>
              <span className=" xl:text-lg  lg:text-base"> تومان</span>
            </h1>
          </div>
          <div className="mb-[3rem] md:mb-0">
            <Link to="/cart" className="btnCartClick">
              تسویه حساب
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClick;
