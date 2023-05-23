import React, { useEffect } from "react";

import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ConsumeCartState } from "../../../Context/CartItemsContext/CartItemsState";
import Rating from "../../commen/Rating/Rating";
import StarCourse from "../../commen/StarCourse/StarCourse";

import "./Lesson.css";

const Lesson = ({ lesson }) => {
  const { ADD_TO_CART } = ConsumeCartState();

  // const myObject =ConsumeCartState()
  // console.log("Lesson",myObject);

  return (
    <div className="bg-[#f4f8ff] shadow-lg relative rounded-lg mt-20
    !border !border-solid !border-transparent
    dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)] 
    dark:bg-[rgb(27,52,77)] hover:dark:bg-[rgba(255,255,255,0.05)]
    hover:dark:border-none
    ">
      <div className="absolute -top-12 w-full px-4">
          <div className="Av-img inline-block h-40 overflow-hidden w-full rounded-lg ">
            <img
              src={lesson.lesson.image}
              alt=""
            />
          </div>
        </div>

      <div className="mt-[8rem]  p-4">
        <Link to="">
          <p
            className="text-[#333] text-lg font-bold hover:text-[#0eb582] 
            transition-all duration-300 ease-in-out
            dark:text-[rgb(96,156,255)]
          "
          >
            {lesson.title}
          </p>
        </Link>
        <p className="text-[#7a7a7a] text-base py-3 text-justify dark:text-white">
          {lesson.text}
        </p>

        <p className="text-[#7a7a7a] text-sm leading-7 text-justify mt-3  lessonAV dark:text-white ">
              {lesson.lesson.description}...
          </p>
        <div className="flex items-center">
          <GiTeacher className="text-xl text-[#0eb582]" />
          <p className="text-[#7a7a7a] text-base py-3 text-justify pr-2 dark:text-white">
            {lesson.teacher.fullName}
          </p>
        </div>

        <span className="flex items-center  text-yellow-300 p-2">
          <StarCourse/>
        </span>
        <div className="flex items-center">
          <p className="text-[rgba(51,65,85)] font-bold  text-2xl dark:text-white">
            {lesson.cost}{" "}
          </p>
          <span className="text-[rgba(51,65,85,0.6)] pr-2 dark:text-white">تومان</span>
        </div>

        {/* <Link to="">
          <div className="Le-btn">
            <button>مشاهده اطلاعات دوره</button>
          </div>
        </Link> */}

        <div className="mt-2 flex-col-reverse sm:flex-row flex justify-between items-center">
          <Link to={`/courses/detailcourse/${lesson._id}`}>
          {/* <Link to={`courses/detailcourse/${lesson["_id"]}`}> */}
            <div className="Le-btn">
              <button>مشاهده اطلاعات دوره</button>
            </div>
          </Link>
          <div>
            <div className="animcart">
              <button
                className="text-4xl m-[0.5rem] "
                onClick={() => ADD_TO_CART(lesson)}
              >
                <AiOutlineShoppingCart className="text-[#0eb582]" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Lesson;


