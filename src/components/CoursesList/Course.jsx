import React, { useState, useEffect } from "react";

import student from "Assets/images/Service/1.svg";
import Selected from "./Select/Selected";
import Search from "./Search/Search";
import Category from "./Category/Category";
import SortInDate from "./SortInDate/SortInDate";
import Lessons from "./Lessons/Lessons";
import { ConsumeAllDataState } from "Context/AllData/AllData";

// import { getAllCourses } from "../../Services/Public";
// import { ConsumeAllDataState } from "../../Context/AllData/AllData";

const Courses = () => {
  // const { data } = ConsumeAllDataState();
  // console.log(data);

  const [searchItem, setSearchItem] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  //  const filterDataHandler = () => {
  //   if (selectedOption === "رایگان") {
  //     return data.course.filter((item) => item.cost === 0);
  //   }
  //   if (selectedOption === "نقدی") {
  //     return data.course.filter((item) => item.cost > 0);
  //   }
  //   return data.course;
  // };

  return (
    <div className="container mx-auto">
      <div className=" flex items-center py-8 ">
        <div className="relative right-8 z-[-999] ">
          <img src={student} alt="" className="w-32" />
        </div>

        <div className="absolute right-[10rem] z-[-999]">
          <h2 className="text-[19px]  text-[#333] dark:text-white ">دوره های آموزشی</h2>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 mt-8 gap-8  mx-8 xl:mx-0">
        <div className=" col-span-3 lg:col-span-4 xl:col-span-3">
          <Search searchItem={searchItem} setSearchItem={setSearchItem} />
          <Selected
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <Category />
        </div>

        <div className=" col-span-9 lg:col-span-8 xl:col-span-9">
          <SortInDate />
          <Lessons
            searchItem={searchItem}
            selectedOption={selectedOption}
            // filterDataHandler={filterDataHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;



