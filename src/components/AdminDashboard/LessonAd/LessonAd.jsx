import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { Link, useParams } from "react-router-dom";
import { deleteLesson } from "Services/Public";
import { toastifuySuccess } from "HelperFunctions/Toastify/Toastify";

const LessonAd = ({ lesson, setLessonData }) => {
  const deleteHandler = async (lessonId) => {
    try {
      const response = await deleteLesson(lessonId);
      // console.log("response", response);
      toastifuySuccess("درس با موفقیت حذف شد");

      setLessonData((prevCourse) => ({
        ...prevCourse,
        lesson: prevCourse.lesson.filter((item) => item._id !== lessonId),
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
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base ">
          <img src={lesson.image} alt="" className="w-[6rem]" />
        </th>
        <th scope="col" className="px-6 py-3 text-[0.8rem] md:text-base ">
          {lesson.lessonName}
        </th>

        <th scope="col" className="px-6 py-3">
          <Link to={`showlesson/${lesson._id}`} className="flex justify-center">
            <IoEyeSharp />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <Link to={`editlesson/${lesson._id}`} className="flex justify-center">
            <BiEdit />
          </Link>
        </th>
        <th
          scope="col"
          className="px-6 py-3"
          onClick={() => deleteHandler(lesson._id)}
        >
          <div className="flex justify-center cursor-pointer">
            <MdDelete />
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default LessonAd;