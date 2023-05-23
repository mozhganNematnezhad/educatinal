import React from "react";
import { Link } from "react-router-dom";

import { ConsumeCartState } from "Context/CartItemsContext/CartItemsState";
import { GrFormClose } from "react-icons/gr";

import "components/commen/Navbar/Navbar.css";
import "./cartHover.css"

const CartHover = () => {
  const { cart,confirm } = ConsumeCartState();
  // const myObject = ConsumeCartState();
  // console.log("myObject" ,cart)

  const allprice = cart.reduce((acc, curr) => acc + curr.cost * 1, 0);

  if (cart.length === 0) {
    return (
      <div className="TwIn-cartHover slideUp p-4 dark:bg-[rbg(27,52,77)] ">
        <span className="dark:text-white"> سبد خرید خالی است</span>
      </div>
    );
  }

  // console.log(cart.cart[0].lesson);
  return (
    // dark:bg-black dark:text-white
    <>
      <div className="TwIn-cartHover slideUp ">
        <div className="TwIn-boxCartHover max-h-[450px]  overflow-y-scroll  ">
          {cart.length > 0 &&
            cart.map((item) => {
              // console.log("called1" , item)
              return (
                <React.Fragment key={item._id}>
                  <div className=" flex justify-around items-center p-4 gap-4 ">
                    <div className="w-100 	">
                      <img
                        src={item.lesson.image}
                        alt=""
                        className="w-[4rem] rounded-[0.5rem] "
                      />
                    </div>

                    <div className="">
                      <p className="text-sm dark:text-white">
                        {item.title}
                      </p>
                      <div className="flex items-center my-3">
                        <p className="text-sm dark:text-gray-300">مدرس : </p>
                        <p className="dark:text-white"> {item.teacher.fullName}</p>
                      </div>
                      <div className="flex my-3">
                        <p className="text-sm dark:text-gray-300">قیمت : </p>
                        <div className="flex items-center">
                          <p className="dark:text-white"> {item.cost} </p>
                          <p className="dark:text-white"> تومان</p>
                        </div>
                      </div>
                    </div>
                    

                    <div>
                      <GrFormClose
                        className="text-red-700 text-2xl cursor-pointer dark:!text-white"
                        // onClick={() => REMOVE_CART(item)}
                        onClick={() => confirm(item._id, item.title)}
                      />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}

          {/* totall price */}
          <div className="border-t-2 border-solid border-gray-100  rounded-lg flex flex-col lg:flex-row justify-around items-center p-4 
          dark:border-t-2 dark:border-[rgb(66,63,81)]
           ">
            <div>
              <h1 className="dark:text-gray-300">
                جمع کل :
                <span className="text-[#0eb582] text-sm">
                  {allprice}
                </span>
                <span className=" text-sm"> تومان</span>
              </h1>
            </div>

            <div>
              <Link to="/cart" className="btnCartHover">
                تسویه حساب
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartHover;

// تو حالت عادی هیدن باشه  وقتی که هاور شد
// گرید کن
