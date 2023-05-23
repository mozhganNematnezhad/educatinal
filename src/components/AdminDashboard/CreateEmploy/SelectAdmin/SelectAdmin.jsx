import { Field } from "formik";
import React, { useState } from "react";
import { BsBrightnessAltHigh } from "react-icons/bs";

const SelectAdmin = () => {
  const [handelRole, sethandelRole] = useState("");

  return (
    <div className=" flex  w-[80%] mx-auto  rounded lg:bg-transparent flex-row-reverse items-center  my-3 border-b-2 border-dotted hover:border-solid">
      <Field
        id="role"
        name="role"
        as={"select"}
        className=" w-full p-3 placeholder-green-200/80  
                  text-lg outline-none  bg-transparent
                  text-gray-600 dark:text-cyan-50  
                  "
        value={handelRole}
        onChange={(e) => sethandelRole(e.target.value)}
      >
        <option className="dark:text-gray-500" disabled>
          انتخاب کنید
        </option>
        <option className="dark:text-gray-500" value={"teacher"}>
          استاد
        </option>
        <option className="dark:text-gray-500" value={"admin"}>
          ادمین
        </option>
      </Field>
      <label
        for="role"
        className=" text-2xl dark:text-cyan-100/60 mr-2
                  text-Dark-Teal
                  "
      >
        {/* <BsBrightnessAltHigh /> */}
      </label>
    </div>
  );
};

export default SelectAdmin;

//  value="admin"
// حتماا  ببین که هیچ فاصله ای نداشته باشه
