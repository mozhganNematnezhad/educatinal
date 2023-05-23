import React, { useState } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);

  const checkBoxHandler = (e) => {
    if (e.target.checked) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
  };

  return (
    <div className="category flex flex-col md:flex-row 
              bg-[#f3f4f6] dark:bg-[#001E3C] 
              p-4  rounded-lg mt-8 mb-8 lg:mb-0 ">
      <div className="ml-[0.9rem] flex md:flex-row-reverse items-center">
        <label className="pr-[0.4rem] dark:text-white"> فرانت‌اند </label>
        <input
          type="checkbox"
          name="program"
          value="front"
          checked={category.includes("front")}
          onChange={checkBoxHandler}
        />
      </div>
      <div className="ml-[0.9rem] flex md:flex-row-reverse items-center">
        <label className="pr-[0.4rem] dark:text-white" > بک اند </label>
        <input
          type="checkbox"
          name="program"
          value="back"
          checked={category.includes("back")}
          onChange={checkBoxHandler}
        />
      </div>
      <div className="ml-[0.9rem] flex md:flex-row-reverse items-center">
        <label className="pr-[0.4rem] dark:text-white"> وردپرس</label>
        <input
          type="checkbox"
          name="program"
          value="wordpress"
          checked={category.includes("wordpress")}
          onChange={checkBoxHandler}
        />
      </div>
    </div>
  );
};

export default Category;
