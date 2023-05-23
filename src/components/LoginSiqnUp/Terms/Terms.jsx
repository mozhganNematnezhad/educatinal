import { ErrorMessage } from "formik";
import React from "react";

const Terms = ({ name, label, id, type, checked, setChecked }) => {
  

  const handlechecked = (e) => {
    // console.log(e.target.checked)
    setChecked(e.target.checked);
  };
  return (
    <>
      <div className="flex items-center md:mr-[4rem] mt-[2rem]">
        <label
          htmlFor="checkbox"
          className="text-[rgba(149,160,177,1)] text-sm md:text-base md:!w-[40%] lg:!w-[50%] xl:!w-[40%] "
        >
          {label}
        </label>
        <div className="flex items-baseline pr-[1rem] ">
          <input
            type={type}
            id={id}
            name={name}
            value={checked}
            onChange={handlechecked}
          />
        </div>

        <div className="my-1  md:w-[80%]">
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-400 text-[0.8rem]">{msg}</div>
            )}
            name={name}
          />
        </div>
      </div>
    </>
  );
};

export default Terms;

// value={formik.values.terms}
// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
