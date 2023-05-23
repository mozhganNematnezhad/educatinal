import { ConsumeAllDataState } from "Context/AllData/AllData";
import React, { useState } from "react";

const SortInDate = () => {
  const {setData } = ConsumeAllDataState();
  // console.log(data);

  const [selectedOption, setSelectedOption] = useState("");

  const selectChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setSelectedOption(value);

    if (value === "free") {
      setData((data) => ({
        ...data,
        course: data.course.sort((a, b) => a.cost - b.cost),
        // course:[],
      }));
    } else if (value === "capacity") {
      setData((data) => ({
        ...data,
        course: data.course.sort((a, b) => a.capacity - b.capacity),
      }));
    } else {
      setData((data) => ({
        ...data,
        course: data.course.sort((a, b) => b.cost - a.cost),
      }));
    }
  };

  return (
    <div className="flex flex-col  items-end">
      <div className=" bg-[#f3f4f6] w-full md:w-[40%] p-4 rounded-lg dark:bg-[#001E3C] ">
        <div className=" border-2 border-solid border-[#0eb582] rounded-lg mt-4">
          <select
            onChange={selectChange}
            value={selectedOption}
            className="w-full outline-0 rounded-lg dark:bg-[#1B314C] dark:text-white"
          >
            {/* <option className="text-[#0eb582] disabled">
             مرتب سازی  
          </option> */}
            <option value="cost" className="option text-[#0eb582] dark:text-white">
              {" "}
              مرتب سازی براساس بیشترین قیمت
            </option>

            <option value="free" className="option text-[#0eb582] dark:text-white">
              {" "}
              مرتب سازی براساس دوره های رایگان
            </option>

            <option value="capacity" className="option text-[#0eb582] dark:text-white">
              {" "}
              مرتب سازی براساس ظرفیت دوره ها
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortInDate;
