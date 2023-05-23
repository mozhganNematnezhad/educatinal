import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ConsumeAuthState } from "Context/AuthContext/AuthState";
// import { getStudentById } from "Services/Student";
import { getStudentById } from "Services/Admin";

const PurchasedCourses = () => {
  const { userData } = ConsumeAuthState();
  const [purchased, setPurchased] = useState([]);

  useEffect(() => {
    const getStudentID = async () => {
      try {
        // console.log("oooo",userData["_id"])
        const response = await getStudentById(userData["_id"]);
        // console.log("purchased id", response);

        const AllCourse = response.data.result.courses; //allcourses
        // console.log("purchased", AllCourse);
        const filterCourse = AllCourse.filter((item) => item.cost > 0);
        setPurchased(filterCourse);
      } catch (error) {
        console.log(error);
      }
    };

    getStudentID();
  }, []);
  return (
    <div className="Da_PurchaseCourse ">
      <div className="Da_Header  ">
        <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
          <h3 className="text-center pb-4 text-base dark:text-white">
            دوره های خریداری شده{" "}
          </h3>
        </div>
        <ul className="mx-8 mt-8 block h-[80vh] overflow-y-scroll p-4">
          {purchased.map((item) => {
            return (
              <React.Fragment key={item._id}>
                <li
                  className="py-4 bg-[#fafafa] my-4 rounded-lg px-8 
                  flex flex-col justify-center md:flex md:flex-row items-center md:justify-between
                  dark:bg-[rgb(27,52,77)]
                    dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
                  dark:text-white">
                 <Link to={item.title}>{item.title}</Link>
                  <div className="flex flex-col">
                    {/* line-through */}
                    <span className="	text-red-400 dark:text-[rgb(96,156,255)]">{item.cost} تومان</span>
                    {/* <span className="text-center">رایگان</span> */}
                  </div>
                  <div>
                    <span className="text-center">
                      نام استاد :{item.teacher.fullName}
                    </span>
                  </div>
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

export default PurchasedCourses;
