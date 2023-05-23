import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

// import component
import { ConsumeAuthState } from "Context/AuthContext/AuthState";
// import { getStudentById } from 'Services/Student';
import { getStudentById } from 'Services/Admin';

const FreeCourses = () => {

 const {userData}=ConsumeAuthState() 
 const [freecourse,setFreeCourse] =useState([])
   //console.log("myObject-free",myObject)
  // console.log("myObject-free",userData)


  useEffect(() => {
    const getStudentID = async () => {
      try {
        // console.log("oooo",userData["_id"])
        const response = await getStudentById(userData["_id"]);
        // console.log("FreeCourses id", response);

        const AllCourse =response.data.result.courses   //allcourses
        console.log("AllCourse-freecourse",AllCourse); 
        const filterCourse =AllCourse.filter((item)=>item.cost ===0)
        setFreeCourse(filterCourse)

      } catch (error) {

        console.log(error);
      }
    };
  
    getStudentID();
  }, []);

  return (
    <div className="Da_freecourse  ">
      <div className="Da_Header  ">
        <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
          <h3 className="text-center pb-4 text-base dark:text-white"> دوره های رایگان</h3>
        </div>
        <ul className="mx-8 mt-8 block">
          {freecourse.map((item, index) => {
            return (
              <React.Fragment key={index} >
                <li className="py-4 bg-[#fafafa] my-4 rounded-lg px-8 flex items-center justify-between 
                    dark:bg-[rgb(27,52,77)]
                        dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
                      dark:text-white">
                  <Link to={item.title}>{item.title}</Link>
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

export default FreeCourses;







