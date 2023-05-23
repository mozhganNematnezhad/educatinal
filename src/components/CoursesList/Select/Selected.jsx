import React from "react";

const Selected = ({ selectedOption, setSelectedOption }) => {
  return (
    <div className=" mt-8 lg:mt-16 bg-[#f3f4f6]  p-4 rounded-lg dark:bg-[#001E3C]">
      <p className="text-[#333] dark:text-white">فیلتر براساس</p>
      <div className=" border-2 border-solid border-[#0eb582] rounded-lg mt-4">
        <select
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
          className="w-full outline-0 rounded-lg  dark:bg-[#1B314C] dark:text-white"
        >
          <option className="text-[#0eb582] disabled dark:text-white">
            -- انتخاب کنید..--
          </option>
          <option value="همه" className="option  dark:text-white">
            {" "}
            همه
          </option>
          <option value="نقدی" className="option  dark:text-white">
            {" "}
            نقدی
          </option>
          <option value="رایگان" className="option  dark:text-white">
            رایگان
          </option>
        </select>
      </div>
    </div>
  );
};

export default Selected;
