import { ConsumeAllDataState } from "Context/AllData/AllData";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

const ShowLessons = () => {
  const { shId } = useParams();
  // console.log("shId-showlessons", shId);

  const { data } = ConsumeAllDataState();
  // console.log("data-showlessons", data);

  const lessonItem = data.lesson.find((lesson) => lesson._id === shId);
  // console.log("lessonItem",lessonItem.courses)

  return (
    <div className=" bg-[#d6faef] mx-auto p-4 md:p-8 w-9/12 mt-12 mb-8 rounded-lg items-center gap-4">
      <div className="flex  items-center justify-between">
        <div></div>
        <div className="md:col-span-4">
          <img
            src={lessonItem.image}
            alt=""
            className="rounded w-[50%] lg:w-[35%] mx-auto"
          />
        </div>
        <div>
          <Link to={"/admindashboard/pages/lessons"}>
            <RiArrowGoBackFill className="text-2xl text-red-500" />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-8 gap-8 mt-4">
        <div className=" md:col-span-4 bg-[#0eb582] p-6 rounded-lg text-center">
          <ul>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              نام درس:{" "}
              <span className="text-base text-[#eef5f3]">
                {" "}
                {lessonItem.lessonName}
              </span>
            </li>

            {lessonItem.courses.map((lesson) => (
              <li className="py-[0.9rem] text-[1.1rem] text-white  " key={lesson._id}>
                موضوع درس:
                <span className="text-base text-[#eef5f3]">
                  {" "}
                  {lesson.title}
                </span>
              </li>
            ))}

            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              دسته درس:
              <span className="text-base text-[#eef5f3]">
                {" "}
                {lessonItem.category}
              </span>
            </li>
          </ul>
        </div>

        <div className=" md:col-span-4 bg-[#0eb582] p-6 rounded-lg text-center">
          <ul>
            <li className="py-[0.9rem] text-[1.1rem] text-white  ">
              توضیحات درس :
              <span className="text-base text-[#eef5f3] ">
                {lessonItem.description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowLessons;
