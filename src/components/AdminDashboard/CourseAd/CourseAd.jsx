import React from "react";

import { IoEyeSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteCourse } from "./../../../Services/Admin";
import { toastifuySuccess } from "HelperFunctions/Toastify/Toastify";
import { getAllCourses } from "./../../../Services/Public";

const CourseAd = ({ course, setCourseData }) => {

  const handelDelete = async (courseId) => {
    try {
      const response = await deleteCourse(courseId);
      toastifuySuccess("ترم با موفقیت حذف شد");
      setCourseData((prevCourse) => ({
        ...prevCourse,
        courses: prevCourse.courses.filter((item) => item._id !== courseId),
      }));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <tbody
      className=" text-gray-500 bg-gray-50 md:text-[0.9] xl:text-[17px] 
      border-b-4 border-double content-center text-center 
    dark:bg-gray-300 items-center"
    >
      <tr>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          <img src={course.lesson.image} alt="" className="w-[6rem]" />
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {course.title}
          {/* {course.lesson.lessonName} */}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {course.cost}
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base">
          {course.teacher.fullName}
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`showcourse/${course._id}`} className="flex justify-center">
            <IoEyeSharp />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`editcourse/${course._id}`} className="flex justify-center">
            <BiEdit />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <button
            onClick={() => handelDelete(course["_id"])}
            className="flex justify-center"
          >
            <MdDelete />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default CourseAd;














